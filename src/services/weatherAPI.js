import weatherForecast from "./weatherForecast";

let fetchedCoordinates = {};

async function FetchCityLatLon(city) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${
    import.meta.env.VITE_OPENWEATHER_KEY
  }`;

  const response = await fetch(url);
  const result = await response.json();

  const fetchedData = {
    name: result[0].name,
    lat: result[0].lat,
    lon: result[0].lon,
  };

  fetchedCoordinates = fetchedData;
  return fetchedData;
}

async function FetchCityWeather(fetchedCoordinates) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${
    fetchedCoordinates.lat
  }&lon=${fetchedCoordinates.lon}&appid=${
    import.meta.env.VITE_OPENWEATHER_KEY
  }&units=metric`;

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

export default { Query, FetchCityLatLon };
