import DetailedCard from "../components/DetailedCard";
import { useEffect } from "react";

function DetailedCardView({ id }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 pt-28">
        <DetailedCard id={id} />
      </main>
    </>
  );
}

export default DetailedCardView;
