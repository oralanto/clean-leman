import React from "react";
import FormuleCard from "../components/FormuleCard";

const domicile = [
  {
    title: "Tapis",
    description: "Nettoyage de vos tapis en profondeur",
    price: ["30 chf/m²"],
  },
  {
    title: "Fauteuils",
    description: "Nettoyage de vos fauteuils en profondeur",
    price: ["60 chf"],
  },
  {
    title: "Canapé 3 places",
    description: "Nettoyage de vos canapés en profondeur",
    price: ["120 chf"],
  },
  {
    title: "Canapé 5 places",
    description: "Nettoyage de vos canapés en profondeur",
    price: ["150 chf"],
  },
  {
    title: "Canapé XL",
    description: "Nettoyage de vos canapés en profondeur",
    price: ["210 chf"],
  },
  {
    title: "Matelas une place",
    description: "Nettoyage de vos matelas en profondeur, une ou deux faces",
    price: ["1 face: 60 chf", "2 faces: 100 chf"],
  },
  {
    title: "Matelas deux places",
    description: "Nettoyage de vos matelas en profondeur, une ou deux faces",
    price: ["1 face: 100 chf", "2 faces: 170 chf"],
  },
];

const DomicileServicePage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Service Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Service de Nettoyage à Domicile
      </h1>

      {/* Service Description */}
      <p className="text-lg text-center mb-8">
        Libérez-vous des corvées ménagères et économisez temps et argent avec
        notre service de nettoyage à domicile. Votre espace retrouve sa
        splendeur sans que vous ayez à vous soucier de rien d'autre !
      </p>

      {/* Service Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {domicile.map(({ title, description, price, secondPrice }, index) => (
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
        <p className="mb-4">Besoin d'un nettoyage à domicile de qualité ?</p>
        <a
          href="/contact"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Contactez-nous dès maintenant
        </a>
      </div>
    </div>
  );
};

export default DomicileServicePage;
