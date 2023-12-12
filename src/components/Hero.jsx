function Hero() {
  return (
    <>
      <div
        className="flex h-96 items-center justify-center 
            rounded-3xl 
            bg-[url('https://cdn.mos.cms.futurecdn.net/fEiiAFCszqW8THGArcpAG4-1200-80.jpg')] 
            bg-cover bg-center
            shadow-2xl"
      >
        <h2 className="whitespace-nowrap p-4 text-2xl text-blue-600 md:text-3xl lg:text-4xl">
          <em>The World is our playground...</em>
        </h2>
      </div>
    </>
  );
}

export default Hero;
