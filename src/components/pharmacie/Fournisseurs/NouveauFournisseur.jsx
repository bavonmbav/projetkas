import React, { useState } from 'react';
import'../../../assets/styles/fournisseur.css';

function NouveauFournisseur() {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/insert/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: nom,
          adresse: adresse,
          telephone: contact,
        }),
      });
      const data = await response.json();
      console.log(data.message); // Afficher le message de retour du backend
      // Réinitialiser les champs après l'enregistrement
      setNom('');
      setAdresse('');
      setContact('');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
    }
  };

  return (
    <div className='contenaire'>
      <h2 style={{ paddingLeft: "390px", fontFamily: "sans-serif", textJustify: "auto" }}> NOUVEAU FOURNISSEUR</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label' >
          Nom :
          <input className="input" type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <br />
        <label className='label'>
          Adresse :
          <input className="input" type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
        </label>
        <br />
        <label className='label'>
          Contact :
          <input className="input" type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </label>
        <br />
        <button className='button' type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default NouveauFournisseur;
