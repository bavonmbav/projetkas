import React, { useState, useEffect } from 'react';
import '../../../assets/styles/interface.css';
const TableauProduits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [produits, setProduits] = useState([
    { id: 1, numfacture: '002-23-2024', nom: 'gabriel',montant:0,  datever: '2024-12-31' ,  datefacture: '2024-12-31' ,  dateecheance: '2024-12-31' },
  ]);

  const [editProductId, setEditProductId] = useState(null);
  const [showPopup, setShowPopup ] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: null,
    numfacture: '',
    nom: '',
    montant: 0,
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEditClick = (id) => {
    setEditProductId(id);
    setShowPopup(true);
    const productToEdit = produits.find(product => product.id === id);
    setEditedProduct(productToEdit);
  };

  const handleClosePopup = () => {
    setEditProductId(null);
    setShowPopup(false);
    setEditedProduct({
        id: null,
        numfacture: '',
        nom: '',
        montant: 0, 
    });
  };


  const filteredProduits = produits.filter((produit) =>
    Object.values(produit)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Logic to get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = produits.slice(indexOfFirstProduct, indexOfLastProduct);

  const produitsAffiches = searchTerm ? filteredProduits : currentProducts;

// notifaction

  const [notifaction, setNotification] = useState({ message:'', type:""});
  useEffect(()=>{
    let timer;
    if(notifaction.message){
      timer = setTimeout(() =>{
        setNotification({message:'', type:''});
      }, 5000);
    }
    return () => clearTimeout(timer);


  }, [notifaction.message]);

  // const[designation, setDesignation] = useState('');
  // const[stok, setStock] = useState('');
  // const[stockMini, setStockmini] = useState('');
  // const[prixAchat, setPrixachat] = useState('');
  // const[prixVente, setPrixvente] = useState('');
  // const[fournisseur, setFournisseur] = useState('');
  // const[dateExpiration, setDateExpiration] = useState('');


  const handlesubmit = (e) => {
    if(!editedProduct)
    {
      setNotification({ message: 'succes full', type:'success'});
    }else{
      setNotification({ message: 'not fund', type:'error'});
    }
  };




  const styles = {
    tables: {
      width: "100%",
      borderCollapse: "collapse"
    },

    ths: {
      border: "1px solid #dddddd",
      padding: "8px",
      textAlign: "left",
      backgroundColor: "#f2f2f2"
    },

    tds: {
      border: "1px solid #dddddd",
      padding: "8px",
      textAlign: "left",
    },
    inputs: {
      width: "40%",
      padding: "10px",
      marginBottom: "10px"
    },
    button: {
      padding: "5px 10px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      borderRadius: "3px"
    },
    divs:
    {
      backgroundColor: "#fff"
    },
    popup: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    popupInner: {
      width: "50%",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
    },
    forms: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '10px',
    },
    label: {
      marginRight: '10px',
    },
    input: {
      flex: '1',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
    
  }

  return (
    <div style={styles.divs} >
      <h1 style={{ paddingLeft: "390px", fontFamily: "sans-serif", textJustify: "auto" }}> GESTIONNAIRE DE VERSEMENT</h1>
      <input type="text" placeholder="Rechercher..." style={styles.inputs} value={searchTerm} onChange={handleSearch} />
      <table style={styles.tables}>
        <thead>
          <tr>
            <th style={styles.ths}>numero facture</th>
            <th style={styles.ths}>nom fournisseur</th>
            <th style={styles.ths}>Montant VERSEMENT</th>
            <th style={styles.ths}>date versement</th>
            <th style={styles.ths}>data facturation</th>
            <th style={styles.ths}>date d'echeance</th>
            <th style={styles.ths}>Action</th>
          </tr>
        </thead>
        <tbody>
          {produitsAffiches.map((produit) => (
            <tr key={produit.id}>
              <td style={styles.tds}>{produit.numfacture}</td>
              <td style={styles.tds}>{produit.nom}</td>
              <td style={styles.tds}>{produit.montant}</td>
              <td style={styles.tds}>{produit.datever}</td>
              <td style={styles.tds}>{produit.datefacture}</td>
              <td style={styles.tds}>{produit.dateecheance}</td>          
              <td style={styles.tds}>
                {/* Edit button */}
                <a href="#" onClick={() => handleEditClick(produit.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "blue" }} className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(produits.length / productsPerPage) }).map((_, index) => (
            <li key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </footer>
      

      {/* Popup for editing */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupInner}>
            {/* Form for editing product */}
            {/* Form for editing product */}
            <form style={styles.forms} onSubmit={handlesubmit}>
            {
            notifaction.message && (
              <div className={`notifaction ${notifaction.type}`}>
                {notifaction.message}
              </div>
            )
          } 
              {/* Example: */}
              <div style={styles.inputContainer}>
              <label htmlFor="designation" style={styles.label}>numero facture:</label>
              <input style={styles.input}  value={editedProduct.numfacture} onChange={(e) => setEditedProduct({ ...editedProduct, numfacture: e.target.value })} />
              </div>
              

              <div style={styles.inputContainer}>
              <label htmlFor="nom"  style={styles.label}>Nom fournisseur:</label>
              <input style={styles.input} type="text" id="nom" name="nom" value={editedProduct.nom} onChange={(e) => setEditedProduct({ ...editedProduct, nom: e.target.value })} />
              </div>
             
             <div style={styles.inputContainer}>
             <label htmlFor="montant" style={styles.label}>Montant:</label>
              <input style={styles.input} type="number" id="montant" name="montant" value={editedProduct.montant} onChange={(e) => setEditedProduct({ ...editedProduct, montant: e.target.value })} />
             </div>
             
              
          <div style={styles.buttonContainer}>
          <button style={styles.button} type="submit">Submit</button>
          <button style={styles.button} onClick={handleClosePopup}>Close</button>
          
          </div>
        </form>
          
          </div>
        </div>
      )}
       
    </div>
  );
};

export default TableauProduits;
