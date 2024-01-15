import Hero from "../components/Hero";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import weatherAPI from "../services/weatherAPI";
import HomepageJourneyMarkers from "../components/HomepageJourneyMarkers";

function HomepageView() {
  const [data, setData] = useState([]);
  const [citiesToFetchCoords, setCitiesToFetchCoords] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(function () {
    (async function () {
      const url = "/api/data.json";
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    })();
  }, []);

  useEffect(
    function () {
      (async function () {
        const citiesToFetchCoords = [];
        for (let i = 0; i < data.length; i++) {
          const response = await weatherAPI.FetchCityLatLon(data[i].name);
          citiesToFetchCoords.push(response);
        }
        setCitiesToFetchCoords(citiesToFetchCoords);
      })();
    },
    [data],
  );

  return (
    <>
      <main className="bg-background">
          <Hero />
        <h1
          className="scroll-mt-28 pb-6 pt-8 text-center text-2xl font-bold text-accent md:text-3xl lg:text-4xl"
          id="Journeys"
        >
          Journeys
        </h1>
        <section className="container mx-auto grid justify-items-center gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.map((item) => (
            <article key={item.name}>
              <Card journey={item} />
            </article>
          ))}
        </section>
        <section className="container mx-auto p-4">
          {citiesToFetchCoords ? (
            <HomepageJourneyMarkers markers={citiesToFetchCoords} />
          ) : null}
        </section>
      </main>
    </>
  );
}

export default HomepageView;
