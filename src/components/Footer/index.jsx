import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer grid grid-cols-3 border-t-2 py
    -4"
    >
      <div className="footer__logo flex flex-col items-center">
        <img
          src="/images/clean_leman.png"
          alt="Clean Leman"
          className="size-24"
        />
      </div>

      <div className="footer__info flex flex-col justify-center">
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +1234567890</p>
      </div>

      <div className="footer__social flex flex-col justify-center items-center gap-2">
        <a
          href="https://www.instagram.com/cleanleman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center"
        >
          <img
            src="/images/instagram.svg"
            alt="Instagram"
            className="size-8 mr-2"
          />
          <p>@cleanleman</p>
        </a>
        <a
          href="https://www.facebook.com/cleanleman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center"
        >
          <img
            src="/images/facebook.svg"
            alt="facebook"
            className="size-8 mr-2"
          />
          <p>Clean Leman</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
