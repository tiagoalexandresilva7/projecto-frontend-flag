import { useEffect, useState } from "react";
//import jsonfile from "./apiobjs/weatherapi.json";
import weatherAPI from "../services/weatherAPI";

function WeatherWidget() {
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    (async function () {
      const result = await weatherAPI.Query();
      setCityData(result);
      /* console.log(cityData); */
    })();
  }, []);

  return (
    <>
      <div className="mx-auto shadow-lg">
        <div>
          <ul className="flex items-center justify-around xl:flex-col xl:gap-3 xl:p-5">
            <li className="flex items-center">
              <img
                src={cityData.icon}
                alt={cityData.weather?.list[0].weather[0].main}
                width="75px"
              />
            </li>
            <li>
              <div>
                <h3 className="text-xl font-bold">
                  {cityData.weather?.list[0].weather[0].main}
                </h3>
                <h4>{cityData.weather?.city.name}</h4>
              </div>
            </li>
            <li className="text-xl font-bold">
              <h3>{cityData.weather?.list[0]?.main.temp}ºC</h3>
            </li>
            <li>
              <div className="flex items-center gap-1 text-orange-400">
                <h4>
                  <i className="fa-solid fa-temperature-arrow-up"></i>
                </h4>
                <h4>{cityData.weather?.list[0]?.main.temp_max}ºC</h4>
              </div>
              <div className="flex items-center gap-1 text-blue-400">
                <h4>
                  <i className="fa-solid fa-temperature-arrow-down"></i>
                </h4>
                <h4>{cityData.weather?.list[0]?.main.temp_min}ºC</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WeatherWidget;
