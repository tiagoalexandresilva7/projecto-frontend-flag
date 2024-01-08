import Contacts from "../components/Contacts";
import { useEffect } from "react";

function ContactsView() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="min-h-[89vh] shadow-inner pt-24">
        <div className="container mx-auto">
          <Contacts />
        </div>
      </main>
    </>
  );
}

export default ContactsView;
