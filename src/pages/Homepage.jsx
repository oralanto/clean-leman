const Homepage = () => {
  return (
    <div className="container w-full mx-auto py-8">
      <div className="border-b-2 m-4">
        {/* French Slogan */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Votre propreté, notre priorité
        </h1>

        {/* Description */}
        <p className="text-lg text-center mb-8">
          Nous sommes une entreprise de nettoyage dévouée à fournir des services
          de haute qualité pour rendre votre espace de vie impeccable.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Nos Services</h2>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card: Nettoyage Domicile */}
        <a
          href="/service-domicile"
          className="bg-white rounded-lg shadow-md hover:shadow-[#007EB1] p-6 mx-4 sm:m-0 space-y-4"
        >
          <h2 className="text-xl font-semibold ">Nettoyage à Domicile</h2>
          <img src="/images/house_cleaning_1.jpeg" alt="cleaning car" />
          <p className="">
            Nous offrons un nettoyage complet de votre domicile, y compris les
            tapis, les sanitaires, les canapés, et bien plus encore.
          </p>
        </a>

        {/* Service Card: Nettoyage Voiture */}
        <a
          href="/service-voiture"
          className="bg-white rounded-lg shadow-md hover:shadow-[#007EB1] p-6 mx-4 sm:m-0 space-y-4"
        >
          <h2 className="text-xl font-semibold ">Nettoyage de Voiture</h2>
          <img src="/images/car_cleaning_1.jpeg" alt="cleaning house" />
          <p className="">
            Nous prenons soin de l'intérieur et de l'extérieur de votre voiture,
            y compris le shampoing des sièges et plus encore.
          </p>
        </a>

        {/* Service Card: Tarifs */}
        <a
          href="/service-tarifs"
          className="bg-white rounded-lg shadow-md hover:shadow-[#007EB1] p-6 mx-4 sm:m-0 space-y-4"
        >
          <h2 className="text-xl font-semibold ">Tarifs</h2>
          <img src="/images/tarifs.jpeg" alt="tarifs" />
          <p className="">
            Découvrez nos tarifs compétitifs pour le nettoyage intérieur,
            extérieur, à domicile, ainsi que la possibilité de demander un devis
            gratuit.
          </p>
        </a>
      </section>
    </div>
  );
};

export default Homepage;
