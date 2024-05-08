import React, { useState } from 'react';
import '../../../assets/styles/fournisseur.css';

const Commande = ({ onValider }) => {
  const [designation, setDesignation] = useState('');
  const [quantite, setQuantite] = useState('');

  

  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleQuantiteChange = (event) => {
    setQuantite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Valider les données ou effectuer d'autres actions si nécessaire
    if (idProduit && designation && quantite) {
      onValider({
        designation,
        quantite: parseInt(quantite),
      });

      // Réinitialiser les champs après la validation
      setDesignation('');
      setQuantite('');
    }
  };

  return (
    <div className='contenaire'>
      <h2 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}>Gestionnaire des commandes</h2>
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        Désignation:
        <input className='input' type="text" value={designation} onChange={handleDesignationChange} />
      </label>
      <label className='label'>
        Quantité:
        <input className='input' type="number" value={quantite} onChange={handleQuantiteChange} />
      </label>
      <button className='button' type="submit">Valider</button>
    </form>
    </div>
  );
};

export default Commande;
