import { useState } from "react";
import Slideshow from "./Slideshow";
import WeatherWidget from "./WeatherWidget";

function DetailedCard() {

  const [slideNumber, setSlideNumber] = useState(1)

  return (
    <>
      <div className="pb-4 text-center text-2xl text-blue-600 font-semibold">
        <h2>Lisbon</h2>
        <h3>01-01-2023</h3>
      </div>
      <Slideshow/>
      <div className="pb-4">
        <img
          src="https://i.redd.it/k1uzwu8wwuv01.png"
          alt="map placeholder"
          className="rounded-3xl mx-auto"
        />
      </div>
      <div className="xl:flex xl:gap-1">
        <div className="pb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ipsa assumenda esse fugiat et minima, quo iusto optio porro nesciunt
            natus aperiam tenetur fuga quidem rem harum error, molestias
            accusantium.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sint explicabo consectetur facilis, fugiat doloremque molestias
            temporibus accusamus, mollitia ad omnis ab voluptatum neque, iste
            fuga corporis qui error quos!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sint explicabo consectetur facilis, fugiat doloremque molestias
            temporibus accusamus, mollitia ad omnis ab voluptatum neque, iste
            fuga corporis qui error quos!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sint explicabo consectetur facilis, fugiat doloremque molestias
            temporibus accusamus, mollitia ad omnis ab voluptatum neque, iste
            fuga corporis qui error quos!
          </p>
        </div>
        <WeatherWidget />
      </div>
    </>
  );
}

export default DetailedCard;
