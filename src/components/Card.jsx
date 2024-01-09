import { Link } from "wouter";

function Card({ journey }) {
  return (
    <>
      <div className="w-80 rounded-2xl shadow-md hover:scale-105 hover:transition-all hover:duration-150 hover:ease-in-out">
        <img
          src={journey.cardPreview}
          alt={journey.name}
          className="h-64 rounded-md shadow-sm"
        />
        <div className="flex flex-col items-center p-4">
          <div className="text-center text-xl font-semibold text-blue-600 lg:pb-2 lg:text-2xl">
            <h2 className="pb-1 lg:pb-2 ">{journey.name}</h2>
            <h3 className="text-lg">
              <i className="fa-solid fa-plane-departure pr-1"></i>
              {journey.dateDeparture}
            </h3>
            <h3 className="pb-2 text-lg">
              <i className="fa-solid fa-plane-arrival pr-1"></i>
              {journey.dateArrival}
            </h3>
          </div>
          <Link href={`/journeys/${journey.id}`}>
            <button className="w-6/12 rounded border-2 border-blue-600 p-2 text-xl text-blue-600 hover:bg-blue-600 hover:text-white hover:transition-all">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
