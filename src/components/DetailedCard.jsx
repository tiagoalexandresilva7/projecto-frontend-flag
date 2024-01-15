import { useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import WeatherWidget from "./WeatherWidget";
import MapWidget from "./MapWidget";

function DetailedCard({ id }) {
  const [journey, setJourney] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="container mx-auto px-4 pt-28">
        <section>
          <Slideshow images={journey.imageGallery} alt={journey.name} />
        </section>
        <article>
          <h2 className="text-shadow-grey pb-4 text-center text-2xl font-semibold">
            {journey.name}
          </h2>
          <p className="text-asphalt pb-4 text-xl">{journey.description}</p>
          <section className="pb-4">
            {journey.name && journey.source ? (
              <MapWidget city={journey.name} source={journey.source} />
            ) : null}
          </section>
          <p className="text-asphalt pb-4 text-xl">{journey.bestTimeToGo}</p>
          <section className="pb-4">
            {journey.name ? <WeatherWidget city={journey.name} /> : null}
          </section>
        </article>
      </section>
    </>
  );
}

export default DetailedCard;
