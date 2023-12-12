function Card() {
  return (
    <>
      <div className="w-full rounded-2xl border p-5 shadow-md md:hover:scale-105 md:hover:shadow-xl hover:transition-all hover:duration-300 hover:ease-in-out">
        <img
          src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/12/14/15447917835965.jpg"
          alt="city"
          className="rounded-md shadow-md hover:shadow-lg hover:transition-all hover:duration-300 hover:ease-in-out"
        />
        <div className="p-4 text-center text-xl font-semibold text-blue-600 lg:text-2xl">
          <h3>Lisboa</h3>
          <h2>01-01-2023</h2>
        </div>
        <div>
          <button className="w-full rounded-full bg-blue-600 p-2 text-xl  text-white md:hover:shadow-xl hover:transition-all hover:duration-300 hover:ease-in-out lg:text-2xl">
            Visit
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
