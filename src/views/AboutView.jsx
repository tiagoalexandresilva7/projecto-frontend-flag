import About from "../components/About";
import { useEffect } from "react";

function AboutView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="container mx-auto">
          <About />
      </main>
    </>
  );
}

export default AboutView;
