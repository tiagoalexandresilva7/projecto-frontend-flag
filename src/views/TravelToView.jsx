import TravelToForm from "../components/TravelToForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TravelToView() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <TravelToForm />
        </div>
      </main>

      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default TravelToView;
