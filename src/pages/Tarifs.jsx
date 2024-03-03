import React from "react";

const PricingPage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Service Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Tarifs de Nettoyage
      </h1>

      {/* Service Description */}
      <p className="text-lg text-center mb-8">
        Découvrez nos tarifs compétitifs pour différents types de nettoyage, que
        ce soit pour l'intérieur, l'extérieur ou à domicile.
      </p>

      {/* Pricing Table */}
      <div className="flex justify-center">
        <table className="w-full lg:w-2/3 border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-400">
                Type de Nettoyage
              </th>
              <th className="py-2 px-4 border border-gray-400">Prix</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-400">
                Nettoyage voiture intérieur
              </td>
              <td className="py-2 px-4 border border-gray-400">50€ - 100€</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-400">
                Nettoyage voiture extérieur
              </td>
              <td className="py-2 px-4 border border-gray-400">40€ - 80€</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-400">
                Nettoyage domicile
              </td>
              <td className="py-2 px-4 border border-gray-400">Sur devis</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border border-gray-400">
                Devis Personnalisé
              </td>
              <td className="py-2 px-4 border border-gray-400">Gratuit</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="mb-4">
          Besoin de plus d'informations ? Contactez-nous dès maintenant pour un
          devis gratuit.
        </p>
        <button className="bg-slate-100 hover:text-white py-2 px-4 rounded hover:bg-slate-600 text-slate-900">
          Contactez-nous
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
