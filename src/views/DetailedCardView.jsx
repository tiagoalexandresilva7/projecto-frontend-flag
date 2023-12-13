import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailedCard from "../components/DetailedCard";

function DetailedCardView() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <DetailedCard />
      </main>

      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default DetailedCardView;
