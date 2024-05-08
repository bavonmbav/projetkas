import React, { useState } from 'react';
import '../../../assets/styles/fournisseur.css';

const FormulaireEntree = ({ onValider }) => {
  const [idProduit, setIdProduit] = useState('');
  const [designation, setDesignation] = useState('');
  const [quantite, setQuantite] = useState('');

  const handleIdProduitChange = (event) => {
    setIdProduit(event.target.value);
  };

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
        idProduit: parseInt(idProduit),
        designation,
        quantite: parseInt(quantite),
      });

      // Réinitialiser les champs après la validation
      setIdProduit('');
      setDesignation('');
      setQuantite('');
    }
  };

  return (
    <div className='contenaire'>
      <h2 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}>ENREGISTRER UN PRODUIT</h2>
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        ID Produit:
        <input className='input' type="text" value={idProduit} onChange={handleIdProduitChange} />
      </label>
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

export default FormulaireEntree;
