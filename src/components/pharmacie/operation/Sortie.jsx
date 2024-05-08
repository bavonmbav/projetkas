import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/styles/interface.css';

const VenteProduit = () => {
  const [clientType, setClientType] = useState('standard');
  const [clientId, setClientId] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientContact, setClientContact] = useState('');

  const [productId, setProductId] = useState('');
  const [productDesignation, setProductDesignation] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleClientTypeChange = (event) => {
    setClientType(event.target.value);
  };

  const handleInputChange = (setStateFunction, value) => {
    setStateFunction(value);
  };

  const handleValidateForm = () => {
    // Vérifier si tous les champs sont remplis
    if (
      clientId &&
      clientName &&
      clientAddress &&
      clientContact &&
      productId &&
      productDesignation &&
      productPrice &&
      productQuantity
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleAddToCart = () => {
    // Ajouter les données au panier client ou effectuer d'autres opérations de vente
    // Réinitialiser les états après l'ajout au panier si nécessaire
    // Exemple : Reset des champs de détail client et détail produit
    setClientId('');
    setClientName('');
    setClientAddress('');
    setClientContact('');

    setProductId('');
    setProductDesignation('');
    setProductPrice('');
    setProductQuantity('');

    setIsFormValid(false);
  };

  return (
    <div className="contenaire">
    <form className='form'>
    <div>
        <label>
            <NavLink  to={"/sortie"}
           
            style={{textDecoration: "none"}}
            >
          <input className='input'
            type="radio"
            checked={clientType === 'standard'}
            onChange={handleClientTypeChange}
            value="standard" 
          />
          
          Client Standard
          </NavLink>
        </label>
        <label>
        <NavLink to={"/VenteProduitaboner"}
         
         checked={clientType === 'abonne'}
         onChange={handleClientTypeChange}
         value="abonne"
         style={{textDecoration: "none"}}
         >  
          <input className='input'
            type="radio"
           
           
          />
          Client Abonné
        </NavLink>
        </label>
      </div>
        
        <h2>Détail Client</h2>
        <input className='input' type="text"  placeholder="ID Client" value={clientId} onChange={(e) => handleInputChange(setClientId, e.target.value)} />
        <input className='input' type="text" placeholder="Nom du Client" value={clientName} onChange={(e) => handleInputChange(setClientName, e.target.value)} />
        <input className='input' type="text" placeholder="Adresse" value={clientAddress} onChange={(e) => handleInputChange(setClientAddress, e.target.value)} />
        {/* <input className='input' type="text" placeholder="Contact" value={clientContact} onChange={(e) => handleInputChange(setClientContact, e.target.value)} /> */}
        
        <br />
        <h2>Détail Produit</h2>
        <input className='input' type="text" placeholder="ID Produit" value={productId} onChange={(e) => handleInputChange(setProductId, e.target.value)} />
        <input className='input' type="text" placeholder="Désignation" value={productDesignation} onChange={(e) => handleInputChange(setProductDesignation, e.target.value)} />
        <input className='input' type="number" placeholder="Prix de Vente" value={productPrice} onChange={(e) => handleInputChange(setProductPrice, e.target.value)} />
        <input className='input' type="number" placeholder="Quantité" value={productQuantity} onChange={(e) => handleInputChange(setProductQuantity, e.target.value)} />
       

      <button className='button' onClick={handleValidateForm}>
        Valider
      </button>
      <NavLink className="btna" to={"/panier"} onClick={handleAddToCart}> Accéder au Panier Client</NavLink>
    </form>
    </div>
  );
};

export default VenteProduit;
