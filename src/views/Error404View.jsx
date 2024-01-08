import Error404 from "../components/Error404";
import { useEffect } from "react";

function Error404View() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="min-h-[90vh] shadow-inner pt-24">
        <div className="mx-auto">
          <Error404 />
        </div>
      </main>
    </>
  );
}

export default Error404View;
