function Hero() {
  return (
    <>
      <div className="relative flex h-screen place-content-center place-items-center overflow-hidden shadow-xl">
        <img
          src="https://cdn.mos.cms.futurecdn.net/fEiiAFCszqW8THGArcpAG4-1200-80.jpg"
          alt="hero"
          className="zoom min-h-screen w-full"
        />
        <div className="absolute text-center">
          <h2 className="pb-3 text-3xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-3xl lg:text-4xl">
            <em>The journey is the</em>
          </h2>
          <h2 className="pb-10 text-white">
            <em>
              <strong className="text-5xl">DESTINATION</strong>
            </em>
          </h2>
          <a href="#Journeys">
            <button className="w-fit rounded border-2 border-blue-600 bg-blue-600 p-2 text-xl text-white hover:scale-105 hover:transition-all">
              Check my journeys
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
