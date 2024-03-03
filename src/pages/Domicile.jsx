import React from "react";

const DomicileServicePage = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Service Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Service de Nettoyage à Domicile
      </h1>

      {/* Service Description */}
      <p className="text-lg text-center mb-8">
        Notre service de nettoyage à domicile offre une solution complète pour
        rendre votre espace de vie impeccable et agréable à vivre.
      </p>

      {/* Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Image */}
        <div>
          <img
            src="/images/home_cleaning.jpeg"
            alt="Nettoyage à Domicile"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Service Features */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nos Services Inclus</h2>
          <ul className="list-disc pl-4 flex flex-col items-start">
            <li>Nettoyage complet des tapis et moquettes</li>
            <li>Sanitaires impeccables et désinfectés</li>
            <li>
              Nettoyage en profondeur des canapés et des meubles rembourrés
            </li>
            <li>Dépoussiérage minutieux des surfaces</li>
            <li>Nettoyage des vitres et des miroirs</li>
            <li>Aspiration et lavage des sols</li>
            {/* Add more service features as needed */}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="mb-4">Besoin d'un nettoyage à domicile de qualité ?</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Contactez-nous dès maintenant
        </button>
      </div>
    </div>
  );
};

export default DomicileServicePage;
