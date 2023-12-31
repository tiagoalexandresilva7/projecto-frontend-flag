import weatherForecast from "./weatherForecast";

let fetchedCoordinates = {};
let fetchedCityData = {};
const apikey = "appid=e52c092aae1af777ecf96980c2fd4b06";

async function FetchCityLatLon(city) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&${apikey}`;

  const response = await fetch(url);
  const result = await response.json();

  const fetchedData = {
    lat: result[0].lat,
    lon: result[0].lon,
  };

  fetchedCoordinates = fetchedData;
}

async function FetchCityWeather(fetchedCoordinates) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedCoordinates.lat}&lon=${fetchedCoordinates.lon}&${apikey}&units=metric`;

  const response = await fetch(url);
  const result = await response.json();

  const forecast = weatherForecast.dailyForecast(result);

  return forecast;
}

async function Query(city) {
  await FetchCityLatLon(city);
  const weather = await FetchCityWeather(fetchedCoordinates);

  return weather;
}

export default { Query };
