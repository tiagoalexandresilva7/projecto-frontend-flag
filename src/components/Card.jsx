import { Link } from "wouter";

function Card({ journey }) {
  return (
    <>
      <div className="min-w-[256px] max-w-xs rounded-2xl bg-primary shadow-md transition hover:scale-105 hover:duration-150 hover:ease-in-out">
        <img
          src={journey.cardPreview}
          alt={journey.name}
          className="h-64 rounded-md shadow-sm"
        />
        <div className="flex flex-col items-center p-4">
          <hgroup className="text-center text-xl font-semibold lg:pb-2 lg:text-2xl">
            <h2 className="pb-1 text-accent lg:pb-2">{journey.name}</h2>
            <h3 className="text-lg text-textcolor">
              <i className="fa-solid fa-plane-departure mr-1 text-accent"></i>
              {journey.dateDeparture}
            </h3>
            <h3 className="pb-2 text-lg text-textcolor">
              <i className="fa-solid fa-plane-arrival mr-1 text-accent"></i>
              {journey.dateArrival}
            </h3>
          </hgroup>
          <Link href={`/journeys/${journey.id}`}>
            <button className="w-6/12 rounded border-2 border-accent p-2 text-xl text-accent transition hover:bg-accent hover:text-background">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
