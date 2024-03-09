import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">À Propos de Nous</h1>

      {/* Content */}
      <div className="text-lg">
        <p className="mb-4">
          Bienvenue chez Clean Leman ! Nous sommes une entreprise de nettoyage
          dédiée à fournir des services de haute qualité pour rendre votre
          environnement propre et sain.
        </p>
        <p className="mb-4">
          Notre équipe de professionnels qualifiés est là pour répondre à tous
          vos besoins de nettoyage, que ce soit pour votre domicile, votre
          voiture ou votre lieu de travail. Nous mettons tout en œuvre pour
          garantir la satisfaction de nos clients.
        </p>
        <p className="mb-4">
          Chez Clean Leman, nous croyons en l'importance de la propreté et de
          l'hygiène pour un environnement de vie et de travail sain. C'est
          pourquoi nous nous engageons à fournir des services de nettoyage
          fiables et efficaces, adaptés à vos besoins spécifiques. Nous
          intervenons sur le secteur du Grand Genève et ses alentours.
        </p>
        <p className="mb-4">
          Contactez-nous dès aujourd'hui pour en savoir plus sur nos services ou
          pour planifier un nettoyage avec notre équipe professionnelle.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
