import Error404 from "../components/Error404";
import { useEffect } from "react";

function Error404View() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-24">
          <Error404 />
      </main>
    </>
  );
}

export default Error404View;
