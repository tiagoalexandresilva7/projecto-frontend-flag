import { Link } from "wouter";

function Card({ trip }) {
  return (
    <>
      <div className="w-80 rounded-2xl shadow-md hover:transition-all hover:duration-300 hover:ease-in-out md:hover:scale-105 md:hover:shadow-xl">
        <img
          src={trip.cardPreview}
          alt={trip.name}
          className="h-64 rounded-md shadow-md"
        />
        <div className="p-4 flex flex-col items-center">
          <div className="text-center text-xl font-semibold text-blue-600 lg:pb-2 lg:text-2xl">
            <h2 className="pb-1 lg:pb-2 ">{trip.name}</h2>
            <h3 className="text-lg">
              <i className="fa-solid fa-plane-departure pr-1"></i>
              {trip.dateDeparture}
            </h3>
            <h3 className="pb-2 text-lg">
              <i className="fa-solid fa-plane-arrival pr-1"></i>
              {trip.dateArrival}
            </h3>
          </div>
          <Link href={`/trip/${trip.id}`}>
            <button className="w-6/12 p-2 text-xl border-2 rounded border-blue-600 text-blue-600 lg:text-2xl">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
