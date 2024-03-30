import React from "react";
import FormuleCard from "../components/FormuleCard";

const car = [
  {
    title: "Nettoyage intérieur",
    description: "Nettoyage complet de l'intérieur de la voiture",
    price: ["- Citadine: 100 chf", "- Berline: 120 chf", "- SUV: 140 chf"],
  },
  {
    title: "Nettoyage extérieur",
    description: "Nettoyage complet de l'extérieur de la voiture",
    price: ["- Citadine: 40 chf", "- Berline: 60 chf", "- SUV: 60 chf"],
  },
  {
    title: "Au détail",
    description: "",
    price: [
      "- Nettoyage poils d'animaux: 30 chf",
      "- Shampoing: 20 chf/siège",
      "- Voiture avec vomi ou très sale: +30 chf",
    ],
  },
];

const CarCleaningServicePage = () => {
  return (
    <div className="container mx-auto py-8 p-4 md:p-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {car.map(({ title, description, price }, index) => (
          <FormuleCard
            key={index}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="mb-4">Envie d'une voiture impeccable ?</p>
        <a
          href="contact"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Contactez-nous dès maintenant
        </a>
      </div>
    </div>
  );
};

export default CarCleaningServicePage;
