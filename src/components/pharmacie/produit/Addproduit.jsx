import React, { useState ,useEffect } from "react";
import { NavLink } from "react-router-dom";


const AddProductForm = () => {

    
    const [idproduit, setidproduit] = useState('');
    const [designation, setDesignation] = useState('');
    const [prix_achat, setPrixAchat] = useState('');
    const [prix_vente, setPrixVente] = useState('');
    const [stock_mini, setStock_mini] = useState('');
    const [date_expiration, setDate_expiration] = useState('');
    const [idfournisseur, setIdfournisseur] = useState('');
    const [stock, setStock] = useState('');

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8000/produits/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idproduit:idproduit,
            designation:designation,
            stock:stock,
            prix_achat:prix_achat,
            prix_vente:prix_vente,
            stock_mini:stock_mini,
            date_expiration:date_expiration,
            idfournisseur:idfournisseur,
          })
        });
        const data = await response.json();
        console.log(data.message); 
        // Clear form inputs after successful submission
        setidproduit('');
        setDesignation('');
        setPrixAchat('');
        setPrixVente('');
        setStock_mini('');
        setStock('');
        setDate_expiration('');
        setIdfournisseur('');

      } catch (error) {
        console.error('Erreur lors de l\'enregistrement :', error);
      };
    }


    const styles = {
      forms: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", /* Deux colonnes de largeur égale */
        gap: "1rem",
        width: "100%",
        maxWidth: "700px",
        margin: "auto"
    },
    zonetext:{
        width: "100%",
        padding: "12px 10px",
        margin: "20px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box"
    },
    btnajoute:{
        width: "40%",
        background: "#4CAF50",
        color: "white",
        padding: "10px 8px 10px 8px",
        margin: "auto",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
        textAling:"center"
    },
    btna:{
        width: "100%",
        background: "blue",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
    },
    contenaire :{
        borderRadius: "5px",
        color: "#f2f2f2",
        padding: "20px"
    },
    divs:{
      backgroundColor:"#ffffff"
    }

  }
  


    return (
      <div style={styles.divs}>
        <h1 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}>PRODUIT PHAMACETIQUE</h1>
    <form style={styles.forms} onSubmit={handleSubmit}>
      <label>
        IDproduit:
      <input style={styles.zonetext} 
            type="text"
            name="idproduit"
            value={idproduit}
           onChange={(e) => setidproduit(e.target.value)} required />
      </label>
      <label>Produit:
        <input style={styles.zonetext}  
            type="text" 
            name="produit"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)} required />
      </label>
      <label>stock:
        <input style={styles.zonetext} 
              type="number"
              name="stock"
              value={stock}
               onChange={(e) => setStock(e.target.value)} required 
        />
      </label>
      <label>prix d'achat:
        <input style={styles.zonetext} 
            type="number"
            name="prix_achat"
            value={prix_achat}
           onChange={(e) => setPrixAchat(e.target.value)} required />
      </label>
      <label>prix de vente:
        <input style={styles.zonetext} 
              type="number"
              name="prix_vente"
              value={prix_vente}
               onChange={(e) => setPrixVente(e.target.value)} required 
        />
      </label>
      <label>stock Mini:
        <input style={styles.zonetext} 
        type="number"
        name="stock"
        value={stock_mini}
        onChange={(e) => setStock_mini(e.target.value)} required 
        />
      </label>
      <label>date d'expiration:
        <input style={styles.zonetext} 
        type="date"
        name="date_expiration"
        value={date_expiration}
         onChange={(e) => setDate_expiration(e.target.value)} required 
        />
      </label>
      <label>
        Fournisseur:
        <input style={styles.zonetext} name="idfournisseur" value={idfournisseur} onChange={(e) => setIdfournisseur(e.target.value)} required />
        </label>
        <NavLink style={styles.btnajoute}to={"/nouveau"} >ajouter un fournisseur</NavLink>
        <input type="submit" style={styles.btna} value={"Enregistre"}/>
    </form>
    </div>
    );
}
export default AddProductForm;