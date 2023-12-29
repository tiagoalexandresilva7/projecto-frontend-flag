import { useRef, useState } from "react";
import { Link } from "wouter";

function Navbar() {
  const mobileMenu = useRef();
  const mobileMenuIcon = useRef();
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  function mobileMenuHandler() {
    setIsMobileMenuHidden(!isMobileMenuHidden);

    isMobileMenuHidden
      ? mobileMenu.current.classList.replace("hidden", "flex") &&
        mobileMenuIcon.current.classList.replace("fa-bars", "fa-xmark")
      : mobileMenu.current.classList.replace("flex", "hidden") &&
        mobileMenuIcon.current.classList.replace("fa-xmark", "fa-bars");
  }

  return (
    <>
      <header className="">
        <nav className="container mx-auto">
          {/* logo and page title */}
          <div className="flex place-content-around items-center gap-1 p-4 text-blue-600">
            <ul>
              <li className="p-2 hover:cursor-pointer">
                <Link href="/">
                  <img className="min-w-min" src="\logo.svg" alt="logo" />
                </Link>
              </li>
            </ul>
            <ul>
              <li className="p-2 hover:cursor-pointer">
                <Link href="/">
                  <h1 className="text-2xl">
                    <strong>
                      Travelling <span className="italic">Projectified</span>
                    </strong>
                  </h1>
                </Link>
              </li>
            </ul>

            {/* mobile menu */}
            <ul className="flex gap-1 md:hidden">
              <li className="hover:scale-110 hover:cursor-pointer hover:transition-all hover:duration-300">
                <button className="w-6">
                  <i
                    className="fa-solid fa-bars text-3xl"
                    onClick={mobileMenuHandler}
                    ref={mobileMenuIcon}
                  ></i>
                </button>
              </li>
            </ul>

            {/* desktop links */}
            <ul className="hidden gap-3 whitespace-nowrap text-xl md:flex">
              <li className="md:hover:scale-105 md:hover:transition-all md:hover:duration-300">
                <Link href="/">
                  <i className="fa-solid fa-house-flag"></i> Home
                </Link>
              </li>
              <li className="md:hover:scale-105 md:hover:transition-all md:hover:duration-300">
                <Link href="/travelto">
                  <i className="fa-solid fa-map-location-dot"></i> Travel to...
                </Link>
              </li>
              <li className="md:hover:scale-105 md:hover:transition-all md:hover:duration-300">
                <Link href="/about">
                  <i className="fa-solid fa-user-astronaut"></i> About the
                  Tourist
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile menu links */}
          <ul
            className="hidden flex-col items-center gap-2 pb-4 text-blue-600 md:hidden"
            ref={mobileMenu}
          >
            <li className="hover:scale-105 hover:transition-all hover:duration-300">
              <Link href="/" onClick={mobileMenuHandler}>
                <i className="fa-solid fa-house-flag"></i> Home
              </Link>
            </li>
            <li className="hover:scale-105 hover:transition-all hover:duration-300">
              <Link href="/travelto" onClick={mobileMenuHandler}>
                <i className="fa-solid fa-map-location-dot"></i> Travel to...
              </Link>
            </li>
            <li className="hover:scale-105 hover:transition-all hover:duration-300">
              <Link href="/about" onClick={mobileMenuHandler}>
                <i className="fa-solid fa-user-astronaut"></i> About the Tourist
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
