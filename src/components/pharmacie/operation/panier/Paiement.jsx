import React, { useState } from 'react';
import '../../../../assets/styles/fournisseur.css';

const GestionnairePaiement = ({ invoiceNumber, clientName, totalAmount, onPaymentSubmit }) => {
  const [cashAmount, setCashAmount] = useState('');
  const [changeAmount, setChangeAmount] = useState('');


  const handleCashAmountChange = (event) => {
    const enteredCashAmount = event.target.value;
    setCashAmount(enteredCashAmount);

    // Calculer le montant restant (change) à rendre
    const enteredCash = parseFloat(enteredCashAmount);
    const remainingChange = enteredCash - totalAmount;
    setChangeAmount(remainingChange >= 0 ? remainingChange.toFixed(2) : '');
  };

  const handlePaymentSubmit = () => {
    // Envoyer les données de paiement au gestionnaire approprié
    onPaymentSubmit({
      invoiceNumber,
      clientName,
      totalAmount,
      cashAmount: parseFloat(cashAmount),
      changeAmount: parseFloat(changeAmount),
    });

    // Réinitialiser les champs après la soumission
    setCashAmount('');
    setChangeAmount('');
  };

  return (
    <div className="contenaire" style={{paddingLeft: "230px"}}>
      <h2>Gestionnaire de Paiement</h2>
      <label htmlFor="" className='label'>
      Numéro de Facture: 
      <input className='input' type="text" value={invoiceNumber} />
      </label>
      
      <label htmlFor="" className='label'>
      Nom du Client:
      <input className='input'type="text" value={clientName} />
      </label>
      <label htmlFor="" className='label'>
      Montant à Payer:
      <input className='input'type="text" value={totalAmount}/>
      </label>

      <label className='label'>
        Montant en Espèces:
        <input className='input' type="number" value={cashAmount} onChange={handleCashAmountChange} />
      </label>
      <label htmlFor="" className='label'>
      Montant Restant:
      <input className='input'type="text" value={changeAmount} />
      </label>

      <button className='button' onClick={handlePaymentSubmit}>Valider</button>
    </div>
  );
};

export default GestionnairePaiement;
