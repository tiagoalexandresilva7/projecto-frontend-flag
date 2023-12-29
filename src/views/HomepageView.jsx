import Hero from "../components/Hero";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function HomepageView() {
  const [data, setData] = useState([]);

  useEffect(function () {
    (async function () {
      const url = "/data.json";
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <>
      <main className="shadow-inner">
        <div className="container mx-auto px-4 pb-6 pt-4">
          <Hero />
        </div>
        <ul className="container mx-auto grid justify-items-center gap-10 px-4 pb-5 pt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item) => (
            <li key={item.name}>
              <Card trip={item} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomepageView;
