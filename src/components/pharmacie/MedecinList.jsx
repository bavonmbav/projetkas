// import React from "react";


// const styles = {
//     btnDots: {
//         backgroundColor: "transparent",
//         border: "none",
//     }
// }

// const MedecinList = ({onSingleDelete}) => {   
//     // donne moi donnee static sans la base de donnee meme la base de donnee local
//     const medecins = [
//         {
//             id: 1,
//             name: "Dr. Jean",
//             specialite: "Cardiologue",
//             adresse: "Rue 1",
//             phone: "12345678",
//             email: "jean@gmail.com",
//         },
//         {
//             id: 2,
//             name: "Dr. Paul",
//             specialite: "Dentiste",
//             adresse: "Rue 2",
//             phone: "12345678",
//             email: "Paul@gmail.com",
//         },
//         {
//             id: 3,
//             name: "Dr. Jacques",
//             specialite: "Dentiste",
//             adresse: "Rue 3",
//             phone: "12345678",
//             email: "jacques@gmail.com",
//         }
//     ];



//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <h1>Liste des médecins</h1>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Nom</th>
//                                 <th>Specialité</th>
//                                 <th>Adresse</th>
//                                 <th>Phone</th>
//                                 <th>Email</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {medecins.map((medecin) => (
//                                 <tr key={medecin.id}>
//                                     <td>{medecin.name}</td>
//                                     <td>{medecin.specialite}</td>
//                                     <td>{medecin.adresse}</td>
//                                     <td>{medecin.phone}</td>
//                                     <td>{medecin.email}</td>
//                                     <td className="text-end" style={{ paddingRight: "20px" }}>
//                                         <button className="btn btn-icon text-danger me-2" style={styles.btnDots}
//                                         onClick={onSingleDelete}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
//                                         </button>
//                                         <button className="btn btn-icon" style={styles.btnDots}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }    


// export default MedecinList;
import React, { useState } from 'react';

const PharmacyManagement = () => {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({name: '', deliveryDate: '', expiryDate: '', supplier: ''});

  const addMedicine = () => {
    setMedicines([...medicines, newMedicine]);
    setNewMedicine({name: '', deliveryDate: '', expiryDate: '', supplier: ''});
  };

  const deleteMedicine = (index) => {
    const newMedicines = [...medicines];
    newMedicines.splice(index, 1);
    setMedicines(newMedicines);
  };

  const updateMedicine = (index, updatedMedicine) => {
    const newMedicines = [...medicines];
    newMedicines[index] = updatedMedicine;
    setMedicines(newMedicines);
  };

  return (
    <div>
      <h1>Gestion de Pharmacie</h1>
      <input
        type="text"
        value={newMedicine.name}
        onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
        placeholder="Nom du médicament"
      />
      <input
        type="date"
        value={newMedicine.deliveryDate}
        onChange={(e) => setNewMedicine({...newMedicine, deliveryDate: e.target.value})}
        placeholder="Date de livraison"
      />
      <input
        type="date"
        value={newMedicine.expiryDate}
        onChange={(e) => setNewMedicine({...newMedicine, expiryDate: e.target.value})}
        placeholder="Date d'expiration"
      />
      <input
        type="text"
        value={newMedicine.supplier}
        onChange={(e) => setNewMedicine({...newMedicine, supplier: e.target.value})}
        placeholder="Fournisseur"
      />
      <button onClick={addMedicine}>Ajouter au stock</button>
      <h2>Liste des Médicaments</h2>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            {medicine.name} - Livré le : {medicine.deliveryDate} - Expire le : {medicine.expiryDate} - Fournisseur : {medicine.supplier}
            <button onClick={() => deleteMedicine(index)}>Supprimer</button>
            <button onClick={() => updateMedicine(index, {name: 'Nouveau nom', deliveryDate: '2024-01-01', expiryDate: '2025-01-01', supplier: 'Nouveau fournisseur'})}>Mettre à jour</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyManagement;
