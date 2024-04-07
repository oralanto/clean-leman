import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="footer flex justify-evenly border-t-2 py-4 h-max w-full">
      <div className="footer__logo flex flex-col items-center size-24">
        <Logo />
      </div>

      <div className="footer__info flex flex-col justify-center">
        <p>Rue de la propreté 123, Genève</p>
        <p>Tel: +1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;
