const date = new Date();

const daysOriginalData = [
  {
    name: "Sunday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
  {
    name: "Monday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
  {
    name: "Tuesday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
  {
    name: "Wednesday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
  {
    name: "Thursday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
  {
    name: "Friday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
  {
    name: "Saturday",
    lowestTemp: 999,
    highestTemp: -999,
    isUpdated: false,
  },
];

let currentWeather = {
  temp: null,
  lowestTemp: 999,
  highestTemp: -999,
  condition: "",
  icon: "",
  time: date.getDay(),
};

function dailyForecast(data) {
  currentWeather.lowestTemp = 999;
  currentWeather.highestTemp = -999;
  let days = JSON.parse(JSON.stringify(daysOriginalData));

  for (let i = 0; i < data.list.length; i++) {
    const apiTime = new Date(data.list[i]?.dt * 1000);
    const currentDay = apiTime.getDay();

    const retrievedLowestTemp = Math.round(data.list[i].main.temp_min);
    const retrievedHighestTemp = Math.round(data.list[i].main.temp_max);
    const retrievedCurrentTemp = Math.round(data.list[0].main.temp);

    const isToday = currentDay == currentWeather.time;
    const isSunday = days[currentDay].name == "Sunday";
    const isMonday = days[currentDay].name == "Monday";
    const isTuesday = days[currentDay].name == "Tuesday";
    const isWednesday = days[currentDay].name == "Wednesday";
    const isThursday = days[currentDay].name == "Thursday";
    const isFriday = days[currentDay].name == "Friday";
    const isSaturday = days[currentDay].name == "Saturday";

    if (isToday) {
      if (currentWeather.lowestTemp > retrievedLowestTemp) {
        currentWeather.lowestTemp = retrievedLowestTemp;
      }
      if (currentWeather.highestTemp < retrievedHighestTemp) {
        currentWeather.highestTemp = retrievedHighestTemp;
      }
    } else if (isSunday) {
      if (days[0].lowestTemp > retrievedLowestTemp) {
        days[0].lowestTemp = retrievedLowestTemp;
        days[0].isUpdated = true;
      }
      if (days[0].highestTemp < retrievedHighestTemp) {
        days[0].highestTemp = retrievedHighestTemp;
      }
    } else if (isMonday) {
      if (days[1].lowestTemp > retrievedLowestTemp) {
        days[1].lowestTemp = retrievedLowestTemp;
        days[1].isUpdated = true;
      }
      if (days[1].highestTemp < retrievedHighestTemp) {
        days[1].highestTemp = retrievedHighestTemp;
      }
    } else if (isTuesday) {
      if (days[2].lowestTemp > retrievedLowestTemp) {
        days[2].lowestTemp = retrievedLowestTemp;
        days[2].isUpdated = true;
      }
      if (days[2].highestTemp < retrievedHighestTemp) {
        days[2].highestTemp = retrievedHighestTemp;
      }
    } else if (isWednesday) {
      if (days[3].lowestTemp > retrievedLowestTemp) {
        days[3].lowestTemp = retrievedLowestTemp;
        days[3].isUpdated = true;
      }
      if (days[3].highestTemp < retrievedHighestTemp) {
        days[3].highestTemp = retrievedHighestTemp;
      }
    } else if (isThursday) {
      if (days[4].lowestTemp > retrievedLowestTemp) {
        days[4].lowestTemp = retrievedLowestTemp;
        days[4].isUpdated = true;
      }
      if (days[4].highestTemp < retrievedHighestTemp) {
        days[4].highestTemp = retrievedHighestTemp;
      }
    } else if (isFriday) {
      if (days[5].lowestTemp > retrievedLowestTemp) {
        days[5].lowestTemp = retrievedLowestTemp;
        days[5].isUpdated = true;
      }
      if (days[5].highestTemp < retrievedHighestTemp) {
        days[5].highestTemp = retrievedHighestTemp;
      }
    } else if (isSaturday) {
      if (days[6].lowestTemp > retrievedLowestTemp) {
        days[6].lowestTemp = retrievedLowestTemp;
        days[6].isUpdated = true;
      }
      if (days[6].highestTemp < retrievedHighestTemp) {
        days[6].highestTemp = retrievedHighestTemp;
      }
    }

    currentWeather.temp = retrievedCurrentTemp;
    currentWeather.icon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    currentWeather.condition = data.list[0].weather[0].main;
  }

  const forecast = days.filter((day) => day.isUpdated == true);

  //data is original api response
  return { /* data, */ forecast, currentWeather };
}

export default { dailyForecast };
