import About from "../components/About";
import { useEffect } from "react";

function AboutView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-background min-h-screen">
        <About />
      </main>
    </>
  );
}

export default AboutView;
