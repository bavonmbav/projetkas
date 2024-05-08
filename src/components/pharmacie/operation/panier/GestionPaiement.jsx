import React, { useState } from 'react';
import GestionnairePaiement from './Paiement'; // Assurez-vous que le chemin est correct

const MonComposantParent = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [productsData, setProductsData] = useState([
    // ... données de produits
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
  ]);

  const calculateTotalPrice = (products) => {
    const totalPrice = products.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
    return totalPrice;
  };

  const handleValidateInvoice = (updatedProducts) => {
    console.log("Facture validée avec les produits :", updatedProducts);

    const calculatedTotal = calculateTotalPrice(updatedProducts);
    setTotalAmount(calculatedTotal);
  };

  const handlePaymentSubmit = (updatedProducts) => {
    console.log("Données de paiement soumises :", updatedProducts);

    const calculatedTotal = calculateTotalPrice(updatedProducts);
    setTotalAmount(calculatedTotal);
  };

  return (
    <div>
      <GestionnairePaiement
        invoiceNumber="12345"
        clientName="gabriel"
        totalAmount={calculateTotalPrice(productsData)}
        onPaymentSubmit={handlePaymentSubmit}
        products={productsData} // Assurez-vous de passer les produits ici
      />
    </div>
  );
};

export default MonComposantParent;
