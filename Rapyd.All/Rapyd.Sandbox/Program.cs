// See https://aka.ms/new-console-template for more information

using Rapyd.Sandbox;
using Rapyd.Sandbox.Dto;

var client = new RapydClient();

await GetCountryData();

async Task GetCountryData()
{
    var a = await client.MakeRequest<CountryDetails>(RestSharp.Method.Get, "/v1/data/countries");
}
