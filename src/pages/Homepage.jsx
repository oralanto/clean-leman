const Homepage = () => {
  return (
    <div className="container w-full mx-auto py-8">
      <div className="m-2 md:m-4">
        {/* French Slogan */}
        <h1 className="text-5xl font-bold text-center mb-4">
          Votre propreté, notre priorité
        </h1>

        {/* Description */}
        <p className="text-lg text-center mb-8  mx-auto w-10/12 md:w-2/3">
          Clean Leman, là où le professionnalisme rencontre la propreté. Avec
          notre équipe dévouée et nos méthodes innovantes, nous redéfinissons
          les standards du nettoyage, un coup d'éclat à la fois.
        </p>
      </div>
      <div className="bg-[#007EB1] h-32 mb-8 flex items-center">
        <h2 className="text-5xl mx-auto text-white font-bold">Nos Services</h2>
      </div>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {/* Service Card: Nettoyage Domicile */}
        <a
          href="/service-domicile"
          className="bg-white rounded-lg shadow-md hover:shadow-[#007EB1] p-6 mx-4 sm:m-0 space-y-4"
        >
          <h2 className="text-xl font-semibold ">Nettoyage domicile</h2>
          <div className="overflow-hidden">
            <img
              src="/images/canape-tapis-matelas.jpeg"
              alt="cleaning car"
              className="size-80 mx-auto object-cover hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          <p>
            Redonnez vie a votre mobilier, économiser du temps et de l'argent.
          </p>
        </a>

        {/* Service Card: Nettoyage Voiture */}
        <a
          href="/service-voiture"
          className="bg-white rounded-lg shadow-md hover:shadow-[#007EB1] p-6 mx-4 sm:m-0 space-y-4"
        >
          <h2 className="text-xl font-semibold ">Nettoyage voiture</h2>
          <div className="overflow-hidden">
            <img
              src="/images/car-cleaning.jpeg"
              alt="cleaning house"
              className="size-80 mx-auto object-cover hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
          <p>
            Nous nous occupons de votre voiture de A à Z, en passant par le
            shampoing des sièges et d'autres services essentiels.
          </p>
        </a>
      </section>

      {/* Social networks */}
      <div className="m-4">
        <p className="text-lg text-center mb-8 mx-auto w-10/12 md:w-2/3">
          Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos
          actualités et de nos offres spéciales.
        </p>
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
    </div>
  );
};

export default Homepage;
