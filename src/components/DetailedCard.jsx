import { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import WeatherWidget from "./WeatherWidget";

function DetailedCard({ id }) {
  const [journey, setJourney] = useState({});

  useEffect(
    function () {
      (async function () {
        const url = "/api/data.json";
        const response = await fetch(url);
        const result = await response.json();

        const foundJourney = result.find((journey) => {
          return journey.id == id;
        });

        if (!foundJourney) {
          window.location.href = "/notfound";
        }

        setJourney(foundJourney);
      })();
    },
    [id],
  );

  return (
    <>
      <div className="container mx-auto">
        <Slideshow images={journey.imageGallery} alt={journey.name} />
      </div>
      <div className="container mx-auto">
        <div className="pb-4 text-center text-2xl font-semibold text-blue-600">
          <h2>{journey.name}</h2>
        </div>
        <p className="pb-4 text-xl">{journey.description}</p>
        <div className="pb-4">
          <img
            src="https://i.redd.it/k1uzwu8wwuv01.png"
            alt="map placeholder"
            className="rounded-3xl"
          />
        </div>
        <p className="pb-4 text-xl">{journey.bestTimeToGo}</p>
        <div className="pb-4">
          {journey.name ? <WeatherWidget city={journey.name} /> : null}
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
