import Copyright from "../components/Copyright";
import { useEffect } from "react";

function CopyrightView() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="min-h-[89vh] shadow-inner">
        <div className="container mx-auto">
          <Copyright />
        </div>
      </main>
    </>
  );
}

export default CopyrightView;
