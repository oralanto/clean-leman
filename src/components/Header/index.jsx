import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.classList.contains("size-6")
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="text-white p-4 flex relative border-b-2 bg-no-repeat bg-center bg-local bg-cover h-fit"
      style={{ backgroundImage: "url('/images/background-home.jpeg')" }}
    >
      {/* Burger Menu for mobile Screens */}
      <div
        className="sm:hidden absolute top-4 left-4 text-slate-900"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            className="size-6 cursor-pointer"
            fill="current"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="size-6 cursor-pointer"
            fill="current"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>

      {/* Modal for Small Screens */}
      {isMenuOpen ? (
        <div className="sm:hidden fixed top-0 left-0 size-48 bg-[#12A9D8] bg-opacity-85 flex justify-center items-center z-50 rounded-br-md">
          <ul
            ref={menuRef}
            className="text-white text-lg font-bold"
            onClick={handleClickOutside}
          >
            <li className="mb-4 hover:text-[#007EB1]">
              <a href="/">Accueil</a>
            </li>
            <li className="mb-4 hover:text-[#007EB1]">
              <a href="/a-propos">À propos</a>
            </li>
            <li className="mb-4 hover:text-[#007EB1]">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      ) : null}

      {/* Menu desktop */}
      <nav
        ref={menuRef}
        className={`hidden sm:block ${
          isMenuOpen ? "" : "hidden"
        } w-full absolute top-4 left-4 text-white text-xl font-bold`}
      >
        <ul className="flex">
          <li className="mr-4">
            <a
              href="/"
              className="hover:border-b-4 hover:border-[#007EB1]  pb-1"
            >
              Accueil
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/a-propos"
              className="hover:border-b-4 hover:border-[#007EB1]  pb-1"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:border-b-4 hover:border-[#007EB1] pb-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Logo */}
      <div className="w-full mx-auto my-24 size-48 inline-flex items-center justify-center">
        <Logo />
      </div>

      {/* Tarifs */}
      <a
        href="/service-tarifs"
        className="absolute bottom-4 right-4 border-2 border-white rounded-lg p-4 hover:bg-[#007EB1] text-white font-bold text-xl"
      >
        Nos tarifs
      </a>
    </header>
  );
};

export default Header;
