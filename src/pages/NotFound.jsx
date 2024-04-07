import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <div className="text-center text-[#12A9D8]">
        <h1 className="text-4xl font-bold mb-4">Oops! Page non trouvée</h1>
        <p className="text-lg mb-4">
          Désolé, la page que vous recherchez semble introuvable.
        </p>
        <p className="text-lg">
          Vous pouvez retourner à la{" "}
          <a href="/" className="underline">
            page d'accueil
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
