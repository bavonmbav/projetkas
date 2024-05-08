import React, { useState, useEffect } from 'react';
import '../../../assets/styles/interface.css';
const TableauProduits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [produits, setProduits] = useState([
    { id: 1, designation: 'Produit A', stock: 50, stockMini: 10, prixAchat: 5.0, prixVente: 10.0, fournisseur: 'Fournisseur A', dateExpiration: '2024-12-31' },
    { id: 2, designation: 'Produit B', stock: 1, stockMini: 3, prixAchat: 5.0, prixVente: 10.0, fournisseur: 'Fournisseur A', dateExpiration: '2024-12-31' },
  ]);

  const [editProductId, setEditProductId] = useState(null);
  const [showPopup, setShowPopup ] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: null,
    designation: '',
    stock: 0,
    stockMini: 0,
    prixAchat: 0.0,
    prixVente: 0.0,
    fournisseur: '',
    dateExpiration: ''
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
      designation: '',
      stock: 0,
      stockMini: 0,
      prixAchat: 0.0,
      prixVente: 0.0,
      fournisseur: '',
      dateExpiration: ''
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
      <h1 style={{ paddingLeft: "390px", fontFamily: "sans-serif", textJustify: "auto" }}> GESTIONNAIRE DE PRODUIT</h1>
      <input type="text" placeholder="Rechercher..." style={styles.inputs} value={searchTerm} onChange={handleSearch} />
      <table style={styles.tables}>
        <thead>
          <tr>
            <th style={styles.ths}>ID Produit</th>
            <th style={styles.ths}>Désignation</th>
            <th style={styles.ths}>Stock</th>
            <th style={styles.ths}>Stock Mini</th>
            <th style={styles.ths}>Prix d'Achat</th>
            <th style={styles.ths}>Prix de Vente</th>
            <th style={styles.ths}>Fournisseur</th>
            <th style={styles.ths}>Date d'Expiration</th>
            <th style={styles.ths}>Action</th>
          </tr>
        </thead>
        <tbody>
          {produitsAffiches.map((produit) => (
            <tr key={produit.id}>
              <td style={styles.tds}>{produit.id}</td>
              <td style={styles.tds}>{produit.designation}</td>
              <td style={styles.tds}>{produit.stock}</td>
              <td style={styles.tds}>{produit.stockMini}</td>
              <td style={styles.tds}>{produit.prixAchat}</td>
              <td style={styles.tds}>{produit.prixVente}</td>
              <td style={styles.tds}>{produit.fournisseur}</td>
              <td style={styles.tds}>{produit.dateExpiration}</td>
              <td style={styles.tds}>
                {/* Edit button */}
                <a href="#" onClick={() => handleEditClick(produit.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "blue" }} className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                </a>
                {/* Delete button */}
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "red" }} className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
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
              <label htmlFor="designation" style={styles.label}>Designation:</label>
              <input style={styles.input} type="text" id="designation" name="designation" value={editedProduct.designation} onChange={(e) => setEditedProduct({ ...editedProduct, designation: e.target.value })} />
              </div>
              

              <div style={styles.inputContainer}>
              <label htmlFor="stock"  style={styles.label}>Stock:</label>
              <input style={styles.input} type="text" id="stock" name="stock" value={editedProduct.stock} onChange={(e) => setEditedProduct({ ...editedProduct, stock: e.target.value })} />
              </div>
             
             <div style={styles.inputContainer}>
             <label htmlFor="stockMini" style={styles.label}>stock Mini:</label>
              <input style={styles.input} type="text" id="stockMini" name="stockMini" value={editedProduct.stockMini} onChange={(e) => setEditedProduct({ ...editedProduct, stockMini: e.target.value })} />
             </div>
             
             <div style={styles.inputContainer}>
             <label htmlFor="prixAchat" style={styles.label}>Prix d'achat:</label>
              <input style={styles.input} type="text" id="prixAchat" name="prixAchat" value={editedProduct.prixAchat} onChange={(e) => setEditedProduct({ ...editedProduct, prixAchat: e.target.value })} />
             </div>
              
             <div style={styles.inputContainer}>
             <label htmlFor="prixVente" style={styles.label}>Prix de vente:</label>
              <input style={styles.input} type="text" id="prixVente" name="prixVente" value={editedProduct.prixVente} onChange={(e) => setEditedProduct({ ...editedProduct, prixVente: e.target.value })} />
             </div>
              
          <div style={styles.inputContainer}>
          <label htmlFor="fournisseur" style={styles.label}>Fournisseur:</label>
          <input style={styles.input} type="text" id="fournisseur" name="designation" value={editedProduct.fournisseur} onChange={(e) => setEditedProduct({ ...editedProduct, fournisseur: e.target.value })} />
          </div>
              
          <div style={styles.inputContainer}>
          <label htmlFor="dateExpiration" style={styles.label}>Date d'expiration:</label>
          <input style={styles.input} type="date" id="dateExpiration" name="dateExpiration" value={editedProduct.dateExpiration} onChange={(e) => setEditedProduct({ ...editedProduct, dateExpiration: e.target.value })} />
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
