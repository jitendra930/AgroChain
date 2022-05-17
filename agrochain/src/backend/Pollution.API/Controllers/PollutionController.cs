using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Pollution.API.Models;

namespace Pollution.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PollutionController : ControllerBase
    {
        private readonly ILogger<PollutionController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _apiKey;
        private readonly string _baseUrl;
        private readonly string _urlPath;

        public PollutionController(ILogger<PollutionController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            _apiKey = _configuration["APIKey"];
            _baseUrl = _configuration["OpenWeatherURL"];
            _urlPath = @"data/2.5/air_pollution/history";
        }

        //https://localhost:7081/api/Pollution?lat=50&lon=50&startDatetime=2020-11-27T20:21:00&endDatetime=2020-11-30T20:21:00
        [HttpGet(Name = "GetPolltionHistory")]
        //TODO: discuss the return type
        public async Task<Response> GetPolltionHistory(double lat, double lon, string startDatetime, string endDatetime)
        {
            var startTimeInUnix = ConvertDateTimeToUnix(startDatetime);
            var endTimeInUnix = ConvertDateTimeToUnix(endDatetime);
            
            var completeUrl = _baseUrl + _urlPath + $"?lat={lat}&lon={lon}&start={startTimeInUnix}&end={endTimeInUnix}&appid={_apiKey}";

            try
            {
                using (var client = new HttpClient())
                {
                    using (var httpResponseMessage = await client.GetAsync(completeUrl))
                    {
                        httpResponseMessage?.EnsureSuccessStatusCode();
                        var contents = await httpResponseMessage?.Content?.ReadAsStringAsync();

                        var result = JsonConvert.DeserializeObject<Response>(contents);
                        return result;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Something went wrong while using http client");
                throw;
            }
        }

        private long ConvertDateTimeToUnix(string dateTime)
        {
            DateTime.TryParse(dateTime, out DateTime temp);
            var unixTime = ((DateTimeOffset)temp).ToUnixTimeSeconds();
            return unixTime;
        }
    }
}
