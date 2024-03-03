import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Create account to emailjs.com
    // Add keys in env.local
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          alert("Votre message a été envoyé avec succès!");
          console.log("SUCCESS!");
        },
        (error) => {
          alert("Une erreur s'est produite, veuillez réessayer.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="mb-6">
        <a href="mailto:cleanleman@contact.com">
          Email: cleanleman@contact.com
        </a>
      </p>
      <p className="mb-6 max-w-md mx-auto">
        Vous avez des questions ou des commentaires? Nous aimerions avoir de vos
        nouvelles! Remplissez le formulaire ci-dessous pour nous envoyer un
        message.
      </p>
      <form
        className="max-w-md bg-gray-100 rounded-lg shadow-md p-6 mx-auto"
        onSubmit={sendEmail}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Nom Prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input mt-1 px-4 py-2 w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input mt-1 px-4 py-2 w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-textarea mt-1 px-4 py-2 w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="bg-[#12A9D8] hover:bg-[#007EB1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
