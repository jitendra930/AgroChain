using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using RestSharp;

namespace Rapyd.Sandbox
{
    public class RapydClient
    {
        private readonly string _accessKey;
        private readonly string _secretKey;
        private readonly string _baseUrl;
        private readonly RestClient _client;

        public RapydClient()
        {
            _accessKey = "CF87F73F119BFD9D2AF7";
            _secretKey = "4c2c6e60ae4d571e9da2c51c9aa16241f8aacce2c839dbb05210de07ca6cab0b118ef2489ced4406";
            _baseUrl = "https://sandboxapi.rapyd.net";
            _client = new RestClient(_baseUrl);
        }

        public async Task<T> MakeRequest<T>(Method method, string urlPath, object body = null)
        {
            try
            {
                var request = PrepareRequest(method, urlPath, body);

                var response = await _client.ExecuteAsync<T>(request);

                if (response.ResponseStatus != ResponseStatus.Completed)
                {
                    throw new Exception(response.Data != null ? JsonSerializer.Serialize(response.Data) : response.Content);
                }
                return response.Data;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error during API request: {ex}");
                throw;
            }
        }

        private RestRequest PrepareRequest(Method method, string httpURLPath, object body = null)
        {
            try
            {
                var request = new RestRequest(httpURLPath);
                string httpBody = body is null ? "" : JsonSerializer.Serialize(body);
                string salt = GenerateRandomString(8);
                long timestamp = DateTimeOffset.Now.ToUnixTimeSeconds();
                string signature = GenerateSign(method.ToString(), httpURLPath, salt, timestamp, httpBody);

                request.Method = method;
                request.AddHeader("access_key", _accessKey);
                request.AddHeader("salt", salt);
                request.AddHeader("timestamp", timestamp.ToString());
                request.AddHeader("signature", signature);

                if (body != null)
                {
                    request.AddJsonBody(body);
                }
                return request;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error generating request options: {ex}");
                throw;
            }
        }

        private string GenerateSign(string method, string urlPath, string salt, long timestamp, string body)
        {
            try
            {
                string bodyString = String.Empty;
                if (!String.IsNullOrWhiteSpace(body))
                {
                    bodyString = body == "{}" ? "" : body;
                }

                string toSign = method.ToLower() + urlPath + salt + timestamp + _accessKey + _secretKey + bodyString;

                UTF8Encoding encoding = new UTF8Encoding();
                byte[] secretKeyBytes = encoding.GetBytes(_secretKey);
                byte[] signatureBytes = encoding.GetBytes(toSign);
                string signature = String.Empty;
                using (HMACSHA256 hmac = new HMACSHA256(secretKeyBytes))
                {
                    byte[] signatureHash = hmac.ComputeHash(signatureBytes);
                    string signatureHex = String.Concat(Array.ConvertAll(signatureHash, x => x.ToString("x2")));
                    signature = Convert.ToBase64String(encoding.GetBytes(signatureHex));
                }

                return signature;
            }
            catch (Exception)
            {
                Console.WriteLine("Error generating signature");
                throw;
            }
        }

        private string GenerateRandomString(int size)
        {
            try
            {
                using (var rng = RandomNumberGenerator.Create())
                {
                    byte[] randomBytes = new byte[size];
                    rng.GetBytes(randomBytes);
                    return String.Concat(Array.ConvertAll(randomBytes, x => x.ToString("x2")));
                }
            }
            catch (Exception)
            {
                Console.WriteLine("Error generating salt");
                throw;
            }
        }
    }
}
