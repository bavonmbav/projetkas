import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PanierClient = ({ clientName, invoiceNumber, products = [], onBackClick, onValidateInvoice }) => {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  const handleAddQuantity = (productId) => {
    setUpdatedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleRemoveQuantity = (productId) => {
    setUpdatedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  const handleRemoveProduct = (productId) => {
    setUpdatedProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const calculateTotalPrice = () => {
    return updatedProducts.reduce((total, product) => total + product.quantity * product.price, 0);
  };

  const handleValidateInvoice = () => {
    // Ajouter la logique pour valider la facture
    onValidateInvoice(updatedProducts);
  };

  return (
    <div className="min-vh-100" style={{paddingLeft: "230px", backgroundColor: "#f7f7f7"}}>
      <h1 className="text-white" style={{paddingLeft: "340px", fontFamily:"sans-serif", textJustify:"auto", backgroundColor:'#0054a6'}}> PANIER DU CLIENT </h1>
      <h2 style={{paddingTop: "90px", fontFamily:"sans-serif", textJustify:"auto", fontStyle:"oblique"}}>Nom client : {clientName}</h2>
      <h2 style={{paddingLeft: "690px", fontFamily:"sans-serif", textJustify:"auto", fontStyle:"italic"}}>Facture N*: {invoiceNumber}</h2>

      <table class="w3-table-all w3-hoverable">
        <thead>
          <tr>
            <th className='py-2 border px-4 bg-green'>Quantité</th>
            <th className='py-2 border px-4 bg-green'>ID Produit</th>
            <th className='py-2 border px-4 bg-green'>Désignation</th>
            <th className='py-2 border px-4 bg-green'>Prix de Vente</th>
            <th className='py-2 border px-4 bg-green'>Prix Total</th>
            <th className='py-2 border px-4 bg-green'>Action</th>
          </tr>
        </thead>
        <tbody>
          {updatedProducts.map((product) => (
            <tr key={product.id} className="border bg-white">
              <td className="py-2 px-4 border">{product.id}</td>
              <td className="py-2 px-4 border">{product.designation}</td>
              <td className="py-2 px-4 border">{product.quantity}</td>
              <td className="py-2 px-4 border">{product.price}</td>
              <td className="py-2 px-4 border">{product.quantity * product.price}</td>
              <td className="py-2 px-4 border">
                
              <a href="#"  style={{color:"green"}} onClick={() => handleAddQuantity(product.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </a>
                <a href="#"  style={{color:"black"}} onClick={() => handleRemoveQuantity(product.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>
                </a>
                <a href="#"  onClick={() => handleRemoveProduct(product.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{color:"red"}} className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray">
            <td colSpan="4" className="py-2 bg-blue text-white px-4 border">
              Montant à Payer:
            </td>
            <td className="py-2 px-4 border bg-red text-white">{calculateTotalPrice()}</td>
            
          </tr>
        </tfoot>
      </table>

      <div className="mt-4">
        <NavLink to={"/paiement"} className="bg-blue text-white px-4 py-2 mr-2 ms-2 rounded" onClick={handleValidateInvoice}> Valider la Facture</NavLink>
        <NavLink to={"/sortie"} className="bg-blue text-white px-4 py-2 mr-2 ms-2 rounded" onClick={onBackClick}>Retour</NavLink>
      </div>
    </div> 
  );
};

export default PanierClient;
