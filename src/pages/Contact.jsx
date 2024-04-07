import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <div className="mb-12">
        <a href="mailto:contact@cleanleman.ch">Email: contact@cleanleman.ch</a>
        {/* TODO: Add phone number */}
        <p>Téléphone: 079 123 45 67</p>
      </div>

      <div className="m-4 w-full">
        <div className="flex space-x-8 m-auto justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61557931702302"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/facebook.svg"
              alt="facebook"
              className="size-12"
            />
          </a>
          <a
            href="https://www.instagram.com/clean.leman/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/instagram.svg"
              alt="instagram"
              className="size-12"
            />
          </a>
        </div>
      </div>
      <p className="mb-6 max-w-md mx-auto">
        Vous avez des questions ou des commentaires? Nous aimerions avoir de vos
        nouvelles! Contacter nous par email, téléphone ou sur nos réseaux !
      </p>
    </div>
  );
};

export default Contact;
