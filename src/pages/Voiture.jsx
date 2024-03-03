import React from "react";

const CarCleaningServicePage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Service Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Service de Nettoyage de Voiture
      </h1>

      {/* Service Description */}
      <p className="text-lg text-center mb-8">
        Notre service de nettoyage de voiture assure un nettoyage complet tant à
        l'intérieur qu'à l'extérieur de votre véhicule.
      </p>

      {/* Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Image */}
        <div>
          <img
            src="/images/car_cleaning.jpg"
            alt="Nettoyage de Voiture"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Service Features */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nos Services Inclus</h2>
          <ul className="list-disc pl-4">
            <li>Nettoyage en profondeur de l'intérieur du véhicule</li>
            <li>
              Nettoyage complet de l'extérieur y compris la carrosserie et les
              vitres
            </li>
            <li>Shampoing des sièges, tapis et moquettes</li>
            <li>Polissage de la carrosserie pour une brillance éclatante</li>
            <li>Protection extérieure pour une durabilité accrue</li>
            <li>Nettoyage et lustrage des jantes et des pneus</li>
            {/* Add more service features as needed */}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="mb-4">Envie d'une voiture impeccable ?</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Contactez-nous dès maintenant
        </button>
      </div>
    </div>
  );
};

export default CarCleaningServicePage;
