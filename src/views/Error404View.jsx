import Error404 from "../components/Error404";
import { useEffect } from "react";

function Error404View() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-24 bg-background md:h-[75vh] xl:h-[80vh] 2xl:h-[85vh]">
          <Error404 />
      </main>
    </>
  );
}

export default Error404View;
