import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

function ContactsView() {
  return (
    <>
      <header>
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>

      <main className="container mx-auto">
        <Contacts />
      </main>

      <footer className="container mx-auto p-4">
        <Footer />
      </footer>
    </>
  );
}

export default ContactsView;
