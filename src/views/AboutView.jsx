import About from "../components/About";
import { useEffect } from "react";

function AboutView() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="min-h-[89vh] shadow-inner pt-24">
        <div className="container mx-auto p-4">
          <About />
        </div>
      </main>
    </>
  );
}

export default AboutView;
