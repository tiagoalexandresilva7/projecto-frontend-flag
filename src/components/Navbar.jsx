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
      <header className="fixed z-50 w-full bg-primary bg-opacity-90 shadow-lg">
        <nav className="container mx-auto">
          <ul className="flex place-content-around items-center gap-1 p-2 text-accent drop-shadow-md">
            <li className="cursor-pointer p-2">
              <Link href="/">
                <img
                  className="w-[50px]"
                  src="\travel-svgrepo-com.svg"
                  alt="logo"
                />
              </Link>
            </li>
            <li className="cursor-pointer p-2 whitespace-nowrap">
              <Link href="/">
                <h1 className="text-2xl">
                  <strong>
                    Travelling <span className="italic">Projectified</span>
                  </strong>
                </h1>
              </Link>
            </li>
            <li className="xl:hidden mr-2">
              <button className="cursor-pointer transition hover:scale-110">
                <i
                  className="fa-solid fa-bars text-3xl"
                  onClick={mobileMenuHandler}
                  ref={mobileMenuIcon}
                ></i>
              </button>
            </li>
            <ul className="hidden max-w-sm gap-4 whitespace-nowrap text-xl xl:flex text-textcolor">
              <li className="drop-shadow-md transition hover:scale-110">
                <Link href="/">
                  <i className="fa-solid fa-house-flag mr-1 text-accent"></i>Home
                </Link>
              </li>
              <li className="drop-shadow-md transition hover:scale-110">
                <Link href="/travelto">
                  <i className="fa-solid fa-map-location-dot mr-1 text-accent"></i>Suggest a
                  journey
                </Link>
              </li>
              <li className="drop-shadow-md transition hover:scale-110">
                <Link href="/about">
                  <i className="fa-solid fa-user-astronaut mr-1 text-accent"></i>About the
                  Tourist
                </Link>
              </li>
            </ul>
          </ul>
          <ul
            className="hidden flex-col items-center gap-2 pb-4 text-textcolor xl:hidden"
            ref={mobileMenu}
          >
            <li className="drop-shadow-md transition hover:scale-110">
              <Link href="/" onClick={mobileMenuHandler} className="p-1">
                <i className="fa-solid fa-house-flag mr-1 text-accent"></i>Home
              </Link>
            </li>
            <li className="drop-shadow-md transition hover:scale-110">
              <Link
                href="/travelto"
                onClick={mobileMenuHandler}
                className="p-1"
              >
                <i className="fa-solid fa-map-location-dot mr-1 text-accent"></i>Suggest a
                journey
              </Link>
            </li>
            <li className="drop-shadow-md transition hover:scale-110">
              <Link href="/about" onClick={mobileMenuHandler} className="p-1">
                <i className="fa-solid fa-user-astronaut mr-1 text-accent"></i>About the
                Tourist
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
