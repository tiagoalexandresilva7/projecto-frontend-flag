import { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import WeatherWidget from "./WeatherWidget";
/* import file from "./apiobjs/data.json"; */

function DetailedCard({ id }) {
  const [trip, setTrip] = useState({});

  useEffect(function () {
    (async function () {
      const url = "/data.json";
      const response = await fetch(url)
      const result = await response.json()

      const foundTrip = result.find((trip) => {
        return trip.id == id;
      });

      setTrip(foundTrip);
    })();
  }, [id]);

  return (
    <>
      <div className="pb-4 text-center text-2xl font-semibold text-blue-600">
        <h2>{trip.name}</h2>
        <h3>{trip.date}</h3>
      </div>
      <Slideshow images={trip.imageGallery} alt={trip.name}/>
      <div className="pb-4">
        <img
          src="https://i.redd.it/k1uzwu8wwuv01.png"
          alt="map placeholder"
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="xl:flex xl:gap-8">
        <div className="pb-6">
          <p>{trip.description}</p>
          <br></br>
          <p>{trip.bestTimeToGo}</p>
        </div>
        <WeatherWidget />
      </div>
    </>
  );
}

export default DetailedCard;
