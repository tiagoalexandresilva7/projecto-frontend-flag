import DetailedCard from "../components/DetailedCard";
import { useEffect } from "react";

function DetailedCardView({ id }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="mx-auto bg-midnight-blue">
        <DetailedCard id={id} />
      </main>
    </>
  );
}

export default DetailedCardView;
