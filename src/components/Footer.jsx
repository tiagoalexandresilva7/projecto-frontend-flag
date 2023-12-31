import { Link } from "wouter";

function Footer() {
  return (
    <>
      <footer className="p-2 flex min-w-full items-center shadow-inner">
        <div className="container mx-auto">
          <nav className="whitespace-nowrap text-xl text-blue-600 md:text-2xl">
            <ul className="flex justify-center gap-4">
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
