import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>
      <main>
        <div className="container mx-auto px-4 pt-4 pb-6">
          <Hero />
        </div>
        <div className="container mx-auto grid justify-items-center gap-10 px-4 pt-2 pb-5 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default App;