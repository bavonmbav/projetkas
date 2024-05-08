
import React,{useState} from "react"




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
 button:{
     padding: "5px 10px",
     cursor: "pointer",
     backgroundColor: "#007bff",
     color: "#ffffff",
     border: "none",
     borderRadius: "3px"
 },
 divs:
 {
   backgroundColor:"#fff"
 }
 ,
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

function FactureAboner(){
    const [recherche, setRecherche] = useState('');
    const [stockma, setStockma] = 
    useState([
        {id:1, idpayement:12, nomclient:"gabriel", montantpayer:600, montantavance:550,reste:50, numfacture:'002-01-2024', date:'02-01-2024', resteab:0},
        {id:2, idpayement:23, nomclient:"Nathan", montantpayer:5000, montantavance:3000,reste:2000, numfacture:'003-01-2024',date:'03-01-2024',resteab:0}
]);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  //popups
  
  const [showPopup, setShowPopup] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
        id: null,
        nomclient: '',
        reste: 0,   
        montantavance:0,
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
            nomclient: '',
            reste: 0,
            montantavance:0,
       
        });
      };
      //===================================================view
      
  const [showPopupView, setShowPopupView] = useState(false);
  const [editedProducts, setEditedProducts] = useState({
        id: null,
        nomclient: '',
        reste: 0,   
        montantavance:0,
    });
    const handleEditClicks = (id) => {
        setEditedProduct(id);
        setShowPopupView(true);
        const productToEdit = stockma.find(stock => stock.id === id);
        setEditedProducts(productToEdit);
      };
      const handleClosePopups = () => {
        setEditedProduct(null);
        setShowPopupView(false);
        setEditedProducts({
            id: null,
            nomclient: '',
            reste: 0,
            montantavance:0,
       
        });
      };
//===================================================================

const handlePrint = (idFacture) => {
    const facture = stockma.find((facture) => facture.id === idFacture);

    const content = `
      <h1>Facture</h1>
      <p>ID Payement: ${facture.idpayement}</p>
      <p>Total a payer: ${facture.montantpayer}</p>
      <p>Espece: ${facture.montantavance}</p>
      <p>Rest a payer: ${facture.reste}</p>
      <p>Rendu: ${facture.resteab}</p>
      <p>Numéro de Facture: ${facture.numfacture}</p>
      <p>Nom client: ${facture.nomclient}</p>
      <p>Numéro de Facture: ${facture.date}</p>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };


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

    return(
        <div style={styles.divs}>
             
             
             <h2 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}> IMPRIMER LES FACTURES ABONER</h2>
             <input type="text"  style={styles.inputs} placeholder='Recherche' value={recherche} onChange={handleRecherche}/>
            <table style={styles.tables}>
                <thead>
                    <tr>
                        <th style={styles.ths}>IDPAYEMENT</th>
                        <th style={styles.ths}>NOM CLIENTT</th>
                        <th style={styles.ths}>MONTANT PAYER</th>
                        <th style={styles.ths}>MONTANT AVANCE</th>
                        <th style={styles.ths}>RESTE A PAYER</th>
                        <th style={styles.ths}>NUM-FACTURE</th>
                        <th style={styles.ths}>DATE</th>
                        <th style={styles.ths}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {produitsAffiches.map((stocks) => (
                    <tr key={stocks.id}>
                        <td style={styles.tds}>{stocks.idpayement}</td>
                        <td style={styles.tds}>{stocks.nomclient}</td>
                        <td style={styles.tds}>{stocks.montantpayer}</td>
                        <td style={styles.tds}>{stocks.montantavance}</td>
                        <td style={styles.tds}>{stocks.reste}</td>
                        <td style={styles.tds}>{stocks.numfacture}</td>
                        <td style={styles.tds}>{stocks.date}</td>
                        <td style={styles.tds}>
                        <a href="#" onClick={() => handleEditClick(stocks.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon basket-icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>                      
                        </a>

                        <a href="#" onClick={() => handleEditClicks(stocks.id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon detail-icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 12l2 2l4 -4" /><line x1="7" y1="12" x2="3" y2="12" /> <line x1="21" y1="12" x2="17" y2="12" /><path d="M9 12l2 -2l4 4" /></svg>
                        </a>

                        <a href="#" onClick={() => handlePrint(stocks.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon print-icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9h6v-4h6v4h6v6h-6v4h-6v-4h-6v-6" /><circle cx="12" cy="16" r="2" /></svg>
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
            <form style={styles.forms}>
                <h1 style={{color:'rgb(19 35 19)'}}>SOLDER</h1>
            {/* {
            notifaction.message && (
              <div className={`notifaction ${notifaction.type}`}>
                {notifaction.message}
              </div>
            )
          }  */}
              {/* Example: */}
              <div style={styles.inputContainer}>
              <label htmlFor="nomclient" style={styles.label}>Nomclient:</label>
              <input style={styles.input} type="text" id="nomclient" name="nomclient" value={editedProduct.nomclient} onChange={(e) => setEditedProduct({ ...editedProduct, nomclient: e.target.value })} />
              </div>
              
              <div style={styles.inputContainer}>
              <label htmlFor="rest" style={styles.label}>Montant:</label>
              <input style={styles.input} type="number" id="rest" name="rest" value={editedProduct.reste} onChange={(e) => setEditedProduct({ ...editedProduct, rest: e.target.value })} />
              </div>
              <div style={styles.inputContainer}>
              <label htmlFor="montantavance" style={styles.label}>Avance:</label>
              <input style={styles.input} type="number" id="montantavance" name="montantavance" value={editedProduct.montantavance} onChange={(e) => setEditedProduct({ ...editedProduct, montantavance: e.target.value })} />
              </div>

          <div style={styles.buttonContainer}>
          <button style={styles.button} type="submit" >Submit</button>
          <button style={styles.button} onClick={handleClosePopup}>Close</button>
          
          </div>
        </form>
          
          </div>
        </div>
      )}
       
             {/* Popup for editing */}
             {showPopupView && (
        <div style={styles.popup}>
          <div style={styles.popupInner}>
            {/* Form for editing product */}
            {/* Form for editing product */}
            <form style={styles.forms}>
                <h1 style={{color:'rgb(19 35 19)'}}>SOLDER</h1>
            {/* {
            notifaction.message && (
              <div className={`notifaction ${notifaction.type}`}>
                {notifaction.message}
              </div>
            )
          }  */}
              {/* Example: */}
              <div style={styles.inputContainer}>
              <label htmlFor="nomclient" style={styles.label}>Nomclient:</label>
              <input style={styles.input} type="text" id="nomclient" name="nomclient" value={editedProducts.nomclient} onChange={(e) => setEditedProduct({ ...editedProduct, nomclient: e.target.value })} />
              </div>
              
              <div style={styles.inputContainer}>
              <label htmlFor="rest" style={styles.label}>Montant:</label>
              <input style={styles.input} type="number" id="rest" name="rest" value={editedProduct.reste} onChange={(e) => setEditedProduct({ ...editedProduct, rest: e.target.value })} />
              </div>
              <div style={styles.inputContainer}>
              <label htmlFor="montantavance" style={styles.label}>Avance:</label>
              <input style={styles.input} type="number" id="montantavance" name="montantavance" value={editedProduct.montantavance} onChange={(e) => setEditedProduct({ ...editedProduct, montantavance: e.target.value })} />
              </div>

          <div style={styles.buttonContainer}>
          <button style={styles.button} type="submit" >Submit</button>
          <button style={styles.button} onClick={handleClosePopups}>Close</button>
          
          </div>
        </form>
          
          </div>
        </div>
      )}
        </div>

    )
}
export default FactureAboner;