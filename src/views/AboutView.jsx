import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";


function AboutView() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <About />
      </main>

      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default AboutView;
