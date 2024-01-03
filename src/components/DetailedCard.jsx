import { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import WeatherWidget from "./WeatherWidget";

function DetailedCard({ id }) {
  const [trip, setTrip] = useState({});

  useEffect(
    function () {
      (async function () {
        const url = "/data.json";
        const response = await fetch(url);
        const result = await response.json();

        const foundTrip = result.find((trip) => {
          return trip.id == id;
        });

        setTrip(foundTrip);
      })();
    },
    [id, trip],
  );

  return (
    <>
      <Slideshow images={trip.imageGallery} alt={trip.name} />
      <div className="container mx-auto">
        <div className="pb-4 text-center text-2xl font-semibold text-blue-600">
          <h2>{trip.name}</h2>
        </div>
        <p className="pb-4">{trip.description}</p>
        <div className="pb-4">
          <img
            src="https://i.redd.it/k1uzwu8wwuv01.png"
            alt="map placeholder"
            className="rounded-3xl"
          />
        </div>
        <p className="pb-4">{trip.bestTimeToGo}</p>
        <div className="pb-4 xl:flex xl:gap-8">
          {trip.name ? <WeatherWidget city={trip.name} /> : null}
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
