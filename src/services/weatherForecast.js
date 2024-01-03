function dailyForecast(data) {
  let forecast = {
    Sunday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
    Monday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
    Tuesday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
    Wednesday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
    Thursday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
    Friday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
    Saturday: {
      lowestTemp: 100,
      highestTemp: -100,
    },
  };

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < data.list?.length; i++) {
    const time = new Date(data.list[i]?.dt * 1000);
    const getDayOfWeek = time.getDay();

    const retrievedLowestTemp = Math.round(
      data.list[i]?.main.temp_min,
    );
    const retrievedHighestTemp = Math.round(
      data.list[i]?.main.temp_max,
    );

    const isSunday = weekDays[getDayOfWeek] == "Sunday";
    const isMonday = weekDays[getDayOfWeek] == "Monday";
    const isTuesday = weekDays[getDayOfWeek] == "Tuesday";
    const isWednesday = weekDays[getDayOfWeek] == "Wednesday";
    const isThursday = weekDays[getDayOfWeek] == "Thursday";
    const isFriday = weekDays[getDayOfWeek] == "Friday";
    const isSaturday = weekDays[getDayOfWeek] == "Saturday";

    if (isSunday) {
      if (forecast.Sunday.lowestTemp > retrievedLowestTemp) {
        forecast.Sunday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Sunday.highestTemp < retrievedHighestTemp) {
        forecast.Sunday.highestTemp = retrievedHighestTemp;
      }
    } else if (isMonday) {
      if (retrievedLowestTemp < forecast.Monday.lowestTemp) {
        forecast.Monday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Monday.highestTemp < retrievedHighestTemp) {
        forecast.Monday.highestTemp = retrievedHighestTemp;
      }
    } else if (isTuesday) {
      if (forecast.Tuesday.lowestTemp > retrievedLowestTemp) {
        forecast.Tuesday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Tuesday.highestTemp < retrievedHighestTemp) {
        forecast.Tuesday.highestTemp = retrievedHighestTemp;
      }
    } else if (isWednesday) {
      if (forecast.Wednesday.lowestTemp > retrievedLowestTemp) {
        forecast.Wednesday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Wednesday.highestTemp < retrievedHighestTemp) {
        forecast.Wednesday.highestTemp = retrievedHighestTemp;
      }
    } else if (isThursday) {
      if (forecast.Thursday.lowestTemp > retrievedLowestTemp) {
        forecast.Thursday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Thursday.highestTemp < retrievedHighestTemp) {
        forecast.Thursday.highestTemp = retrievedHighestTemp;
      }
    } else if (isFriday) {
      if (forecast.Friday.lowestTemp > retrievedLowestTemp) {
        forecast.Friday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Friday.highestTemp < retrievedHighestTemp) {
        forecast.Friday.highestTemp = retrievedHighestTemp;
      }
    } else if (isSaturday) {
      if (forecast.Saturday.lowestTemp > retrievedLowestTemp) {
        forecast.Saturday.lowestTemp = retrievedLowestTemp;
      }
      if (forecast.Saturday.highestTemp < retrievedHighestTemp) {
        forecast.Saturday.highestTemp = retrievedHighestTemp;
      }
    }
  }

  return { data, forecast };
}

export default { dailyForecast };
