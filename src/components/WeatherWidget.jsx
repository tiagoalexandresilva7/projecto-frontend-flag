import { useEffect, useState } from "react";
import weatherAPI from "../services/weatherAPI";

function WeatherWidget({ city }) {
  const [cityData, setCityData] = useState({});

  const isLowestTempEqualToHighestTemp =
    cityData.currentWeather?.lowestTemp == cityData.currentWeather?.highestTemp;

  const isLastForecastForToday =
    cityData.currentWeather?.lowestTemp == 999 &&
    cityData.currentWeather?.highestTemp == -999;

  useEffect(() => {
    (async function () {
      const result = await weatherAPI.Query(city);
      setCityData(result);
    })();
  }, [city]);

  return (
    <>
      <table className="mx-auto w-[19rem] text-xl shadow-inner">
        <thead className="flex place-content-around pt-4">
          <tr>
            <th>
              <img
                src={cityData.currentWeather?.icon}
                alt={cityData.currentWeather?.condition}
                width="75px"
              />
            </th>
            <th className="text-center">
              <h3 className="mr-2 font-semibold">
                {cityData.currentWeather?.temp}
                ºC
              </h3>
              <h3 className="mr-2 font-semibold">
                {cityData.currentWeather?.condition}
              </h3>
            </th>
            {isLowestTempEqualToHighestTemp || isLastForecastForToday ? null : (
              <th>
                <div className="flex items-center">
                  <i
                    className="fa-solid fa-temperature-arrow-up mr-1 text-orange-400"
                    aria-label="Highest Temperature"
                  ></i>
                  <h3 className="font-normal">
                    {`${cityData.currentWeather?.highestTemp}ºC`}
                  </h3>
                </div>
                <div className="flex items-center">
                  <i
                    className="fa-solid fa-temperature-arrow-down mr-1 text-blue-400"
                    aria-label="Lowest Temperature"
                  ></i>
                  <h3 className="font-normal">
                    {`${cityData.currentWeather?.lowestTemp}ºC`}
                  </h3>
                </div>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {cityData.forecast?.map((day) => (
            <tr
              key={day.name}
              className="flex place-content-between p-4 transition-all hover:bg-blue-50 md:place-content-evenly"
            >
              <td>{day.name}</td>
              <td>
                <p>
                  <i
                    className="fa-solid fa-temperature-arrow-up mr-1 text-orange-400"
                    aria-label="Highest Temperature"
                  ></i>
                  {`${day.highestTemp}ºC`}
                </p>
              </td>
              <td>
                <p>
                  <i
                    className="fa-solid fa-temperature-arrow-down mr-1 text-blue-400"
                    aria-label="Lowest Temperature"
                  ></i>
                  {`${day.lowestTemp}ºC`}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default WeatherWidget;
