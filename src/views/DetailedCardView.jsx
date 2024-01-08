import DetailedCard from "../components/DetailedCard";
import { useEffect } from "react";

function DetailedCardView({ id }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="shadow-inner pt-28">
        <div className="mx-auto p-4">
          <DetailedCard id={id} />
        </div>
      </main>
    </>
  );
}

export default DetailedCardView;
