import React, { useState } from 'react';

const StockManagementTable = () => {
    const [recherche, setRecherche] = useState('');
    const [stockma, setStockma] = useState([
        {
        id: 1,
        designation:'PARACE', 
        fournisseur:'DGM', 
        stock: 0, 
        stockmini: 4, 
        prix_achat: 500,
        status: 'disponible',
        inventaire:'+ -',
        },
        {
            id: 2,
            designation:'PAR', 
            fournisseur:'DGM', 
            stock: 1, 
            stockmini: 2, 
            prix_achat: 500,
            status: 'disponible',
            inventaire:'+ -',
            },
            {
                id: 3,
                designation:'close', 
                fournisseur:'DGM', 
                stock: 30, 
                stockmini: 2, 
                prix_achat: 500,
                status: 'disponible',
                inventaire:'+ -',
                },
                {
                    id: 4,
                    designation:'PARACETHAMOLE', 
                    fournisseur:'DGM', 
                    stock: 30, 
                    stockmini: 2, 
                    prix_achat: 500,
                    status: 'disponible',
                    inventaire:'+ -',
                    },
                    {
                        id: 5,
                        designation:'PARACETHAMOLE', 
                        fournisseur:'DGM', 
                        stock: 30, 
                        stockmini: 2, 
                        prix_achat: 500,
                        status: 'disponible',
                        inventaire:'+ -',
                        },
                        {
                            id: 6,
                            designation:'PARACETHAMOLE', 
                            fournisseur:'DGM', 
                            stock: 30, 
                            stockmini: 2, 
                            prix_achat: 500,
                            status: 'disponible',
                            inventaire:'+ -',
                            },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    const handleRecherche = (e) => {
        setRecherche(e.target.value);
    };

    const [showPopup, setShowPopup] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
          id: null,
          designation: '',
          stock: 0,
         
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
          designation: '',
          quantite: 0,
       
        });
      };
    







    const handleReapprovisionnement = (id) => {
        const produit = stockma.find((p) => p.id === id);
        if (produit.stock < produit.stockmini) {
            const updatedStock = stockma.map((p) =>
                p.id === id ? { ...p, stock: p.stock + 43 } : p
            );
            setStockma(updatedStock);
        }
    };

    const filteredProducts = stockma.filter((p) =>
        p.designation.toLowerCase().includes(recherche.toLowerCase()) ||
        p.fournisseur.toLowerCase().includes(recherche.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
        divs: {
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
          
    };

    return (
        <div style={styles.divs}>
            <h2 style={{ paddingLeft: "390px", fontFamily: "sans-serif", textJustify: "auto" }}> Gestionnaire de Stock</h2>
            <input type="text" style={styles.inputs} placeholder='Recherche' value={recherche} onChange={handleRecherche} />
            <table style={styles.tables}>
                <thead>
                    <tr>
                        <th style={styles.ths}>Designation</th>
                        <th style={styles.ths}>Fournisseur</th>
                        <th style={styles.ths}>Stock</th>
                        <th style={styles.ths}>Stock Mini</th>
                        <th style={styles.ths}>Prix D'achat</th>
                        <th style={styles.ths}>Status</th>
                        <th style={styles.ths}>Inventaire</th>
                        <th style={styles.ths}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((stocks) => (
                        <tr key={stocks.id}>
                            <td style={styles.tds}>{stocks.designation}</td>
                            <td style={styles.tds}>{stocks.fournisseur}</td>
                            <td style={styles.tds}>{stocks.stock}</td>
                            <td style={styles.tds}>{stocks.stockmini}</td>
                            <td style={styles.tds}>{stocks.prix_achat}</td>
                            <td style={styles.tds}>{stocks.status}</td>
                            <td style={styles.tds}>{stocks.inventaire}</td>
                            <td style={styles.tds}>
                                <button style={{background:'rgb(48 172 193)', border:'none'}} onClick={() => handleEditClick(stocks.id)}>Commande</button>
                                {/* onClick={() => handleReapprovisionnement(stocks.id)} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <footer>
                <ul className="pagination">
                    {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
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
                <h1 style={{color:'rgb(19 35 19)'}}> passer la commande</h1>
            {/* {
            notifaction.message && (
              <div className={`notifaction ${notifaction.type}`}>
                {notifaction.message}
              </div>
            )
          }  */}
              {/* Example: */}
              <div style={styles.inputContainer}>
              <label htmlFor="designation" style={styles.label}>Designation:</label>
              <input style={styles.input} type="text" id="designation" name="designation" value={editedProduct.designation} onChange={(e) => setEditedProduct({ ...editedProduct, designation: e.target.value })} />
              </div>
              
              <div style={styles.inputContainer}>
              <label htmlFor="stock" style={styles.label}>quantite:</label>
              <input style={styles.input} type="number" id="stock" name="stock" value={editedProduct.quantite} onChange={(e) => setEditedProduct({ ...editedProduct, stock: e.target.value })} />
              </div>

          <div style={styles.buttonContainer}>
          <button style={styles.button} type="submit" >Submit</button>
          <button style={styles.button} onClick={handleClosePopup}>Close</button>
          
          </div>
        </form>
          
          </div>
        </div>
      )}
       
        </div>
    );
};

export default StockManagementTable;
