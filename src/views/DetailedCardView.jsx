import DetailedCard from "../components/DetailedCard";

function DetailedCardView({ id }) {
  return (
    <>
      <main className="shadow-inner">
        <div className="container mx-auto p-4">
          <DetailedCard id={id} />
        </div>
      </main>
    </>
  );
}

export default DetailedCardView;
