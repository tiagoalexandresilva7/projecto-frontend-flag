import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

function Error404View() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="container mx-auto">
        <Error404 />
      </main>

      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default Error404View;
