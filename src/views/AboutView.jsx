import About from "../components/About";
import { useEffect } from "react";

function AboutView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="shadow-inner">
        <div className="container mx-auto">
          <About />
        </div>
      </main>
    </>
  );
}

export default AboutView;
