import React, {useState, useEffect} from "react";

const [editProductId, setEditProductId] = useState(null);
const [showPopup, setShowPopup] = useState(false);
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

const Popup = () =>{
    return(
        <div>
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
    )
}
export default Popup;