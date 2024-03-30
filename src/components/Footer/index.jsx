import React from "react";
import LittleLogo from "../LittleLogo";

const Footer = () => {
  return (
    <footer
      className="footer grid grid-cols-2 border-t-2 py
    -4 h-max w-full"
    >
      <div className="footer__logo flex flex-col items-center">
        <LittleLogo />
      </div>

      <div className="footer__info flex flex-col justify-center">
        <p>Adresse: Rue de la propreté 123, Genève</p>
        <p>Tel: +1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;
