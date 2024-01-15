function Hero() {
  return (
    <>
      <section className="relative flex h-screen place-content-center place-items-center overflow-hidden shadow-xl">
        <img
          src="https://cdn.mos.cms.futurecdn.net/fEiiAFCszqW8THGArcpAG4-1200-80.jpg"
          alt="hero"
          className="zoom min-h-screen w-full"
        />
        <hgroup className="text-accent absolute text-center">
          <h2 className="pb-3 text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:text-4xl">
            <em>The journey is the</em>
          </h2>
          <h2 className="pb-10">
            <em>
              <strong className="text-5xl">DESTINATION</strong>
            </em>
          </h2>
          <a href="#Journeys">
            <button className="w-fit rounded bg-primary p-2 text-xl transition-all hover:scale-105">
              Check my journeys
            </button>
          </a>
        </hgroup>
      </section>
    </>
  );
}

export default Hero;
