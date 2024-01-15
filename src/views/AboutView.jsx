import About from "../components/About";
import { useEffect } from "react";

function AboutView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-background xl:min-h-[80vh] 2xl:min-h-[85vh]">
        <About />
      </main>
    </>
  );
}

export default AboutView;
