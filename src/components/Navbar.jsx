import { useRef, useState } from "react";
import { Link } from "wouter";

/* bug first click on each page refresh does not open mobile menu */

function Navbar() {
  const mobileMenu = useRef();
  const mobileMenuIcon = useRef();
  const [mobileMenuToggle, setmobileMenuToggle] = useState(false);

  function mobileMenuHandler() {
    setmobileMenuToggle(!mobileMenuToggle);

    mobileMenuToggle
      ? mobileMenu.current.classList.replace("hidden", "flex") &&
        mobileMenuIcon.current.classList.replace("fa-bars", "fa-xmark")
      : mobileMenu.current.classList.replace("flex", "hidden") &&
        mobileMenuIcon.current.classList.replace("fa-xmark", "fa-bars");

    console.log(mobileMenuToggle);
  }

  return (
    <>
      <div className="m-4 flex place-content-around items-center gap-1 text-blue-600">
        <ul>
          <li>
            <Link href="/">
              <img className="min-w-min" src="\logo.svg" alt="logo" />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">
              <h1 className="whitespace-nowrap text-2xl">
                <strong>
                  Travelling <span className="italic">Projectified</span>
                </strong>
              </h1>
            </Link>
          </li>
        </ul>

        {/* mobile menu */}
        <ul className="flex gap-1 md:hidden">
          <li className="hover:cursor-pointer">
            <button className="w-6">
              <i
                className="fa-solid fa-bars p-1 text-3xl"
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
              <i className="fa-solid fa-user-astronaut"></i> About the Tourist
            </Link>
          </li>
        </ul>
      </div>
      {/* mobile menu links */}
      <ul
        className="hidden flex-col items-center gap-2 text-blue-600 md:hidden"
        ref={mobileMenu}
      >
        <li>
          <Link href="/">
            <i className="fa-solid fa-house-flag"></i> Home
          </Link>
        </li>
        <li>
          <Link href="/travelto">
            <i className="fa-solid fa-map-location-dot"></i> Travel to...
          </Link>
        </li>
        <li>
          <Link href="/about">
            <i className="fa-solid fa-user-astronaut"></i> About the Tourist
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
