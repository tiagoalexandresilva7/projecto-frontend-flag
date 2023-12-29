function Hero() {
  return (
    <>
      <div className="relative flex place-content-center place-items-center pt-4">
        <img
          src="https://cdn.mos.cms.futurecdn.net/fEiiAFCszqW8THGArcpAG4-1200-80.jpg"
          alt="hero"
          className="h-[600px] w-full flex-col place-content-center place-items-center gap-4
            rounded-md blur md:h-[600px] lg:h-[700px] xl:h-[800px]"
        />
        <div className="absolute text-center">
          <h2 className="pb-3 text-2xl text-white md:text-3xl lg:text-4xl">
            <em>The World is our playground</em>
          </h2>
          <a href="#trips">
            <button className="w-fit rounded border-2 border-blue-600 p-2 text-white hover:scale-105 hover:transition-all">
              See our trips
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
