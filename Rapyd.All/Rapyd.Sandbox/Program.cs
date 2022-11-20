// See https://aka.ms/new-console-template for more information

using Rapyd.Sandbox;
using Rapyd.Sandbox.Dto;
using Rapyd.API.Dto;
using System.Threading.Channels;

var client = new RapydClient();

await GetCountryData();

async Task GetCountryData()
{
    var a = await client.MakeRequest<Response<CountryDetails>>(RestSharp.Method.Get, "/v1/data/countries");
    Console.WriteLine(a.Data.CurrencyName);
}
