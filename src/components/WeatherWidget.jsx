import { useEffect, useState } from "react";
import weatherAPI from "../services/weatherAPI";

function WeatherWidget({ city }) {
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    (async function () {
      const result = await weatherAPI.Query(city);
      setCityData(result);
    })();
  }, [city]);

  return (
    <>
      <div className="mx-auto w-96 text-xl shadow-inner">
        <div className="flex place-content-between place-items-center p-4 md:place-content-evenly">
          <img
            src={cityData.currentWeather?.icon}
            alt={cityData.currentWeather?.condition}
            width="75px"
          />
          <div className="text-center">
            <h3 className="font-bold">
              {cityData.currentWeather?.temp}
              ºC
            </h3>
            <h3>{cityData.currentWeather?.condition}</h3>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-temperature-arrow-up text-orange-400"></i>
              <h3>
                {cityData.currentWeather?.highestTemp}
                ºC
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-temperature-arrow-down text-blue-400"></i>
              <h3>
                {cityData.currentWeather?.lowestTemp}
                ºC
              </h3>
            </div>
          </div>
        </div>
        <ul>
          {cityData.forecast?.map((day) => (
            <li
              key={day.name}
              className="flex place-content-between p-4 hover:bg-slate-50 hover:transition-all md:place-content-evenly"
            >
              <h3>{day.name}</h3>
              <p className="flex place-items-center gap-1">
                <i className="fa-solid fa-temperature-arrow-up text-orange-400"></i>
                {day.highestTemp}ºC
              </p>
              <p className="flex place-items-center gap-1">
                <i className="fa-solid fa-temperature-arrow-down text-blue-400"></i>
                {day.lowestTemp}ºC
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default WeatherWidget;
