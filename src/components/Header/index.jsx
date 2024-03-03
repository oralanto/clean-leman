import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <header className="text-white p-4 flex relative bg-slate-100 border-b-2">
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
      {isMenuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-purple-900 bg-opacity-75 flex items-center justify-center z-50">
          <ul className="text-white text-lg">
            <li className="mb-4">
              <a href="#home" onClick={toggleMenu}>
                Accueil
              </a>
            </li>
            <li className="mb-4">
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li className="mb-4">
              <a href="/a-propos" onClick={toggleMenu}>
                À propos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Menu desktop */}
      <nav
        ref={menuRef}
        className={`hidden sm:block ${
          isMenuOpen ? "" : "hidden"
        } w-full absolute top-4 left-4 text-slate-900`}
      >
        <ul className="flex">
          <li className="mr-4">
            <a href="/" className="hover:border-b-2 pb-1">
              Accueil
            </a>
          </li>
          <li className="mr-4">
            <a href="/#services" className="hover:border-b-2 pb-1">
              Services
            </a>
          </li>
          <li className="mr-4">
            <a href="/a-propos" className="hover:border-b-2 pb-1">
              À propos
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:border-b-2 pb-1">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Logo */}
      <div className="w-full mx-auto my-24">
        <img src="/images/products.png" alt="Logo" className="size-40 m-auto" />
      </div>

      {/* contact */}
      <button
        ref={menuRef}
        className="absolute bottom-4 right-4 border-2 border-gray-600 rounded-lg p-4 text-slate-900 hover:bg-slate-500 hover:text-white hover:border-slate-100"
      >
        Contactez-nous
      </button>
    </header>
  );
};

export default Header;
