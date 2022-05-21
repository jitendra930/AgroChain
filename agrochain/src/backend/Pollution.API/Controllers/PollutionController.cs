using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Pollution.API.Models;

//https://openweathermap.org/api/air-pollution#:~:text=Air%20Pollution%20API%20concept,-Air%20Pollution%20API&text=Besides%20basic%20Air%20Quality%20Index,PM2.5%20and%20PM10).
namespace Pollution.API.Controllers
{
    [Route("api/[controller]/[action]")]
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

        //https://localhost:7081/api/ApiResult/GetPolltionHistory?lat=50&lon=50&currentDate=2020-11-27T20:21:00
        [HttpGet(Name = "GetPolltionHistory")]
        public async Task<string> GetPolltionHistory(double lat, double lon, string currentDate)
        {
            DateTime.TryParse(currentDate, out DateTime temp);
            var startDatetime = temp.AddYears(-2).ToString("s");
            var startTimeInUnix = ConvertDateTimeToUnix(startDatetime);
            var endTimeInUnix = ConvertDateTimeToUnix(currentDate);

            var completeUrl = _baseUrl + _urlPath + $"?lat={lat}&lon={lon}&start={startTimeInUnix}&end={endTimeInUnix}&appid={_apiKey}";

            try
            {
                using (var client = new HttpClient())
                {
                    using (var httpResponseMessage = await client.GetAsync(completeUrl))
                    {
                        httpResponseMessage?.EnsureSuccessStatusCode();
                        var contents = await httpResponseMessage?.Content?.ReadAsStringAsync();

                        var result = JsonConvert.DeserializeObject<ApiResult>(contents);

                        //TODO: add logic to get per month average
                        var res = new List<Result>();
                        if (result != null)
                        {
                            var a = result.PollutionData
                                .GroupBy(x => new { x.DateTime.Year, x.DateTime.Month })
                                .ToLookup(t => t.Key, t => new Result
                                {
                                    DateTime = new DateTime(t.Key.Year, t.Key.Month, 1),
                                    AverageAQI = t.Average(t => t.Main.AQI),
                                    AverageCO = t.Average(t => t.Pollutants.CO),
                                    AverageNO = t.Average(t => t.Pollutants.NO),
                                    AverageNO2 = t.Average(t => t.Pollutants.NO2),
                                    AverageO3 = t.Average(t => t.Pollutants.O3),
                                    AverageSO2 = t.Average(t => t.Pollutants.SO2),
                                    AveragePM25 = t.Average(t => t.Pollutants.PM25),
                                    AveragePM10 = t.Average(t => t.Pollutants.PM10),
                                    AverageNH3 = t.Average(t => t.Pollutants.NH3)
                                });

                            foreach (var item in a)
                            {
                                foreach (var val in item)
                                {
                                    res.Add(val);
                                }
                            }

                            //_logger.LogInformation(JsonConvert.SerializeObject(res));
                            return JsonConvert.SerializeObject(res);
                        }
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Something went wrong while using http client");
                throw;
            }
        }

        //[HttpGet(Name = "GetAveragePolltionHistory")]
        //public async Task<ApiResult> GetAveragePolltionHistory(double lat, double lon, string currentDate)
        //{
        //    DateTime.TryParse(currentDate, out DateTime temp);
        //    var startDatetime = temp.AddYears(-2).ToString("s");
        //    var startTimeInUnix = ConvertDateTimeToUnix(startDatetime);
        //    var endTimeInUnix = ConvertDateTimeToUnix(currentDate);

        //    var completeUrl = _baseUrl + _urlPath + $"?lat={lat}&lon={lon}&start={startTimeInUnix}&end={endTimeInUnix}&appid={_apiKey}";

        //    try
        //    {
        //        using (var client = new HttpClient())
        //        {
        //            using (var httpResponseMessage = await client.GetAsync(completeUrl))
        //            {
        //                httpResponseMessage?.EnsureSuccessStatusCode();
        //                var contents = await httpResponseMessage?.Content?.ReadAsStringAsync();

        //                var result = JsonConvert.DeserializeObject<ApiResult>(contents);

        //                //TODO: need to calculate average based on current month and previous 3 months
        //                if (result != null)
        //                {
        //                    //foreach (var item in result.PollutionData)
        //                    //{
        //                    //    var acceptedDateTimes = 
        //                    //    if (item.DateTime in )
        //                    //    {

        //                    //    }
        //                    //}
        //                    //var a = result.PollutionData
        //                    //    .GroupBy(x => x.DateTime.Year)
        //                    //    .ToLookup(t => t.Key, t => new
        //                    //    {
        //                    //        Average = t.Average(t => t.Main.AQI)
        //                    //    });
        //                }

        //                return result;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError(ex, "Something went wrong while using http client");
        //        throw;
        //    }
        //}

        private long ConvertDateTimeToUnix(string dateTime)
        {
            DateTime.TryParse(dateTime, out DateTime temp);
            var unixTime = ((DateTimeOffset)temp).ToUnixTimeSeconds();
            return unixTime;
        }
    }
}
