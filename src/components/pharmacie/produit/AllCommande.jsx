import React, {useState} from "react";
import'../../../assets/styles/panier.css';


export default function Allcomande(){

    const [recherche, setRecherche] = useState('');
    const [stockma, setStockma] = 
    useState([
        {id:1, idproduit:'d004', designation:'der', fournisseur:'tfm', quantite:60, date_commande:'20-12-2023'},
        {id:2, idproduit:'z0056', designation:'zamto', fournisseur:'hmtl', quantite:27, date_commande:'20-03-2023'},
        {id:3, idproduit:'k034', designation:'kader', fournisseur:'java', quantite:34, date_commande:'042-04-2023'},
        {id:4, idproduit:'d0032', designation:'dant', fournisseur:'php', quantite:65, date_commande:'12-07-2023'},
        {id:5, idproduit:'f024', designation:'fd', fournisseur:'bav', quantite:23, date_commande:'30-10-2023'},
        {id:6, idproduit:'l0012', designation:'lol', fournisseur:'python', quantite:20, date_commande:'05-06-2023'},
        {id:7, idproduit:'m002', designation:'mdr', fournisseur:'rybi', quantite:70, date_commande:'26-08-2023'},
]);
const [showPopup, setShowPopup] = useState(false);
const [editedProduct, setEditedProduct] = useState({
    id: null,
      idproduit: '',
      designation: '',
      fournisseur: '',
      quantite: 0,
      date_commande: ''
  });

  const handleEditClick = (id) => {
    setEditedProduct(id);
    setShowPopup(true);
    const productToEdit = stockma.find(stock => stock.id === id);
    setEditedProduct(productToEdit);
  };
  const handleClosePopup = () => {
    setEditedProduct(null);
    setShowPopup(false);
    setEditedProduct({
      id: null,
      idproduit: '',
      designation: '',
      fournisseur: '',
      quantite: 0,
      date_commande: ''
    });
  };


      // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);
  
      // Logic to get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = stockma.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleCommande = (e)=>{};
    const handlePlus = (e) => {};
    const handleMoins = (e) => {};

    const handleRecherche = (e) => {
        setRecherche(e.target.value);
    };
    // filtrage de donnees de la table
    const filteredProduits = stockma.filter((stocks) => 
    Object.values(stocks)
    .join(' ')
      .toLowerCase()
      .includes(recherche.toLowerCase()));

    const produitsAffiches = recherche ? filteredProduits : currentProducts;

   
    const styles = {
        tables:{
                 width: "100%",
                 borderCollapse: "collapse"
       },
       
       ths:{
         border: "1px solid #dddddd",
         padding: "8px",
         textAlign: "left",
         backgroundColor: "#f2f2f2"
       },
    
       tds:{
         border: "1px solid #dddddd",
         padding: "8px",
         textAlign: "left",
       },
       inputs:{
         width: "40%",
         padding: "10px",
         marginBottom: "10px"
     },
     buttons:{
         padding: "5px 10px",
         cursor: "pointer",
         backgroundColor: "#007bff",
         color: "#ffffff",
         border: "none",
         borderRadius: "3px"
     },
     btndroit:{
        marginLeft: "400px",
        marginRight:"3px",
        marginBottom:"50px",
        padding:" 9px 9px 18px 18px",
        backgroundColor:"#5effbc"
      },
     divs:
     {
       backgroundColor:"#fff"
     }
     ,
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

    return[
        <div style={styles.divs}>
             
             
             <h2 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}> GESTIONNAIRE DE COMMANDE</h2>
             <input  style={styles.inputs} type="text"  placeholder='Recherche' value={recherche} onChange={handleRecherche}/>
            <a href="#" style={styles.btndroit}>imprimer la commande</a>
            <table style={styles.tables}>
                <thead>
                    <tr>
                        <th style={styles.ths}>IDPRODUIT</th>
                        <th style={styles.ths}>DESIGNATION</th>
                        <th style={styles.ths}>FOURNISSEUR</th>
                        <th style={styles.ths}>QUANTITE</th>
                        <th style={styles.ths}>DATE COMMANDE</th>
                        <th style={styles.ths}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {produitsAffiches.map((stocks) => (
                    <tr key={stocks.id}>
                        <td style={styles.tds}>{stocks.idproduit}</td>
                        <td style={styles.tds}>{stocks.designation}</td>
                        <td style={styles.tds}>{stocks.fournisseur}</td>
                        <td style={styles.tds}>{stocks.quantite}</td>
                        <td style={styles.tds}>{stocks.date_commande}</td>
                        <td style={styles.tds}>
                            <a href="#" onClick={() => handleEditClick(stocks.id)}>
                            <svg style={{color:"blue"}} xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                            </a>       
                            <a href="#">
                            <svg  style={{color:"red"}} xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                            </a>
                          
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <footer>
                {/* la pagination de les elements du tableau*/}
                <ul className="pagination">
                {Array.from({ length: Math.ceil(stockma.length / productsPerPage) }).map((_, index) => (
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
            <form style={styles.forms} >
            {/* {
            notifaction.message && (
              <div className={`notifaction ${notifaction.type}`}>
                {notifaction.message}
              </div>
            )
          }  */}
              {/* Example: */}
              <div style={styles.inputContainer}>
              <label htmlFor="idproduit"  style={styles.label}>IDPRODUIT:</label>
              <input style={styles.input} type="text" id="idproduit" name="idproduit" value={editedProduct.idproduit} onChange={(e) => setEditedProduct({ ...editedProduct, idproduit: e.target.value })} />
              </div>

              <div style={styles.inputContainer}>
              <label htmlFor="designation" style={styles.label}>Designation:</label>
              <input style={styles.input} type="text" id="designation" name="designation" value={editedProduct.designation} onChange={(e) => setEditedProduct({ ...editedProduct, designation: e.target.value })} />
              </div>
              

             
             
             <div style={styles.inputContainer}>
             <label htmlFor="fournisseur" style={styles.label}>fournisseur</label>
              <input style={styles.input} type="text" id="fournisseur" name="fournisseur" value={editedProduct.fournisseur} onChange={(e) => setEditedProduct({ ...editedProduct, fournisseur: e.target.value })} />
             </div>
             
             <div style={styles.inputContainer}>
             <label htmlFor="quantite" style={styles.label}>quantite:</label>
              <input style={styles.input} type="text" id="quantite" name="quantite" value={editedProduct.quantite} onChange={(e) => setEditedProduct({ ...editedProduct, quantite: e.target.value })} />
             </div>
              
             <div style={styles.inputContainer}>
             <label htmlFor="date_commande" style={styles.label}>date_commande:</label>
              <input style={styles.input} type="date" id="date_commande" name="date_commande" value={editedProduct.date_commande} onChange={(e) => setEditedProduct({ ...editedProduct, date_commande: e.target.value })} />
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

    ]

}