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
    <header className="bg-purple-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/images/products.png" alt="Logo" className="h-8 mr-2" />
      </div>

      {/* Menu */}
      <nav
        ref={menuRef}
        className={`hidden sm:block ${isMenuOpen ? "" : "hidden"}`}
      >
        <ul className="flex">
          <li className="mr-4">
            <a href="#home" onClick={toggleMenu}>
              Accueil
            </a>
          </li>
          <li className="mr-4">
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className="mr-4">
            <a href="#about" onClick={toggleMenu}>
              À propos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Burger Menu for Small Screens */}
      <div className="sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            className="h-6 w-6 cursor-pointer"
            fill="none"
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
            className="h-6 w-6 cursor-pointer"
            fill="none"
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
              <a href="#about" onClick={toggleMenu}>
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
    </header>
  );
};

export default Header;
