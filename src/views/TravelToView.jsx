import TravelToForm from "../components/TravelToForm";
import { useEffect } from "react";

function TravelToView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-background px-4 pt-28 md:h-[75vh] xl:h-[80vh] 2xl:h-[85vh]">
        <div className="container mx-auto">
          <TravelToForm />
        </div>
      </main>
    </>
  );
}

export default TravelToView;
