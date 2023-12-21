import { Link } from "wouter";

function Footer() {
  return (
    <>
      <footer className="container mx-auto p-4">
        <nav className="bottom-0 h-16 whitespace-nowrap text-xl text-blue-600 md:text-2xl">
          <ul className="flex justify-center gap-1">
            <li className="hover:scale-105 hover:transition-all hover:duration-300">
              <Link className="p-4" href="/copyright">
                <i className="fa-solid fa-copyright"></i> Copyright
              </Link>
            </li>
            <li className="hover:scale-105 hover:transition-all hover:duration-300">
              <Link className="p-4" href="/contacts">
                <i className="fa-solid fa-square-phone"></i> Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
