import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

function CopyrightView() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="container mx-auto">
        <Copyright />
      </main>

      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default CopyrightView;
