import TravelToForm from "../components/TravelToForm";
import { useEffect } from "react";

function TravelToView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-background px-4 pt-28 min-h-screen">
        <div className="container mx-auto">
          <TravelToForm />
        </div>
      </main>
    </>
  );
}

export default TravelToView;
