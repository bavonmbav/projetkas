
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
 

}

function Journalier(){
    const [recherche, setRecherche] = useState('');
    const [stockma, setStockma] = 
    useState([
        {id:1, IDMVT:129, IDPRODUIT:44, DESINATION:"PARACETAMOL", QUANTITE:30, PRIXUNITAIRE:500,PRIXTOTAL:15000, NOMCLIENT:'GABRIEL', DATE:'02-01-2024',VENDEUR:'BAVON'  },
        {id:2, IDMVT:209, IDPRODUIT:32, DESINATION:"dolipram", QUANTITE:2, PRIXUNITAIRE:400,PRIXTOTAL:2400, NOMCLIENT:'gaston', DATE:'02-01-2024',VENDEUR:'BAVON'  },
        {id:3, IDMVT:19, IDPRODUIT:388, DESINATION:"quinin", QUANTITE:18, PRIXUNITAIRE:1200,PRIXTOTAL:40500, NOMCLIENT:'patrick', DATE:'02-01-2024',VENDEUR:'BAVON'  },
        {id:4, IDMVT:90, IDPRODUIT:54, DESINATION:"maloxine", QUANTITE:24, PRIXUNITAIRE:600,PRIXTOTAL:12300, NOMCLIENT:'youssef', DATE:'02-01-2024',VENDEUR:'BAVON'  },
        

]);
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

    return(
        <div style={styles.divs}>
             
             
             <h2 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}> VENTE JOURNALIER</h2>
             <input type="text"  style={styles.inputs} placeholder='Recherche' value={recherche} onChange={handleRecherche}/>
            <table style={styles.tables}>
                <thead>
                    <tr>
                        <th style={styles.ths}>IDMVT</th>
                        <th style={styles.ths}>IDPRODUIT</th>
                        <th style={styles.ths}>DESINATION</th>
                        <th style={styles.ths}>QUANTITE</th>
                        <th style={styles.ths}>PRIX UNITAIRE</th>
                        <th style={styles.ths}>PRIX TOTAL</th>
                        <th style={styles.ths}>NOM CLIENT</th>
                        <th style={styles.ths}>DATE</th>
                        <th style={styles.ths}>VENDEUR</th>
                        <th style={styles.ths}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {produitsAffiches.map((stocks) => (
                    <tr key={stocks.id}>
                        <td style={styles.tds}>{stocks.IDMVT}</td>
                        <td style={styles.tds}>{stocks.IDPRODUIT}</td>
                        <td style={styles.tds}>{stocks.DESINATION}</td>
                        <td style={styles.tds}>{stocks.QUANTITE}</td>
                        <td style={styles.tds}>{stocks.PRIXUNITAIRE}</td>
                        <td style={styles.tds}>{stocks.PRIXTOTAL}</td>
                        <td style={styles.tds}>{stocks.NOMCLIENT}</td>
                        <td style={styles.tds}>{stocks.DATE}</td>
                        <td style={styles.tds}>{stocks.VENDEUR}</td>
                        <td style={styles.tds}>   
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{color:"red"}} className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
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
        </div>

    )
}
export default Journalier;