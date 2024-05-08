import React from 'react';
import PanierClient from './Accederpanier';

const MonComposantParent = () => {
  const handleValidateInvoice = (updatedProducts) => {
    // Logique pour valider la facture ici
    console.log("Facture validée avec les produits :", updatedProducts);
  };

  const productsData = [
    {
      id: 1,
      designation: 'Produit A',
      quantity: 2,
      price: 10.99,
    },
    {
      id: 2,
      designation: 'Produit B',
      quantity: 1,
      price: 20.5,
    },
    // ... autres produits
  ];
  
  return (
    <div>
      {/* ... d'autres composants ou éléments JSX */}
      <PanierClient
        clientName="Bavon"
        invoiceNumber="12345"
        products={productsData}
        onBackClick={() => console.log("Retour")}
        onValidateInvoice={handleValidateInvoice}
      />
      {/* ... d'autres composants ou éléments JSX */}
    </div>
  );
};

export default MonComposantParent;
