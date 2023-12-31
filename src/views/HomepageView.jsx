import Hero from "../components/Hero";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function HomepageView() {
  const [data, setData] = useState([]);

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

  return (
    <>
      <main className="shadow-inner">
        <div className="mx-auto pb-8">
          <Hero />
        </div>
        <h1
          className="scroll-mt-28 pb-6 text-center text-2xl font-bold text-blue-600 md:text-3xl lg:text-4xl"
          id="Journeys"
        >
          Journeys
        </h1>
        <ul className="container mx-auto grid justify-items-center gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.map((item) => (
            <li key={item.name}>
              <Card journey={item} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomepageView;
