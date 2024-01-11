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
      <header className="fixed z-50 w-full bg-white bg-opacity-80 shadow-lg">
        <nav className="container mx-auto">
          <div className="flex place-content-around items-center gap-1 p-4 text-blue-600 drop-shadow-md">
            <ul>
              <li className="cursor-pointer p-2">
                <Link href="/">
                  <img className="min-w-min" src="\logo.svg" alt="logo" />
                </Link>
              </li>
            </ul>
            <ul>
              <li className="cursor-pointer p-2">
                <Link href="/">
                  <h1 className="text-2xl">
                    <strong>
                      Travelling <span className="italic">Projectified</span>
                    </strong>
                  </h1>
                </Link>
              </li>
            </ul>
            <ul className="flex gap-1 md:hidden">
              <li className="cursor-pointer transition-all hover:scale-110">
                <button className="w-6">
                  <i
                    className="fa-solid fa-bars text-3xl"
                    onClick={mobileMenuHandler}
                    ref={mobileMenuIcon}
                  ></i>
                </button>
              </li>
            </ul>
            <ul className="hidden max-w-sm gap-3 whitespace-nowrap text-xl md:flex">
              <li className="drop-shadow-md transition-all hover:scale-110">
                <Link href="/">
                  <i className="fa-solid fa-house-flag"></i> Home
                </Link>
              </li>
              <li className="drop-shadow-md transition-all hover:scale-110">
                <Link href="/travelto">
                  <i className="fa-solid fa-map-location-dot"></i> Travel to...
                </Link>
              </li>
              <li className="drop-shadow-md transition-all hover:scale-110">
                <Link href="/about">
                  <i className="fa-solid fa-user-astronaut"></i> About the
                  Tourist
                </Link>
              </li>
            </ul>
          </div>
          <ul
            className="hidden flex-col items-center gap-2 pb-4 text-blue-600 md:hidden"
            ref={mobileMenu}
          >
            <li className="drop-shadow-md transition-all hover:scale-110">
              <Link href="/" onClick={mobileMenuHandler} className="p-1">
                <i className="fa-solid fa-house-flag"></i> Home
              </Link>
            </li>
            <li className="drop-shadow-md transition-all hover:scale-110">
              <Link href="/travelto" onClick={mobileMenuHandler} className="p-1">
                <i className="fa-solid fa-map-location-dot"></i> Travel to...
              </Link>
            </li>
            <li className="drop-shadow-md transition-all hover:scale-110">
              <Link href="/about" onClick={mobileMenuHandler} className="p-1">
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
