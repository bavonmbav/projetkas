
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

function HistoriqueFacture(){
    const [recherche, setRecherche] = useState('');
    const [stockma, setStockma] = 
    useState([
        {id:1, numfacture:'002-01-2024', nomclient:"gaston", montantavance:600,date:'12-01-2024'},
        {id:2, numfacture:'003-03-2024', nomclient:"bavon", montantavance:500,date:'31-03-2024'}
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
             
             
             <h2 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}> HISTORIQUE DES PAYEMENTS DE FACTURES CLIENT</h2>
             <input type="text"  style={styles.inputs} placeholder='Recherche' value={recherche} onChange={handleRecherche}/>
            <table style={styles.tables}>
                <thead>
                    <tr>
                        <th style={styles.ths}>NUM-FACTURE</th>
                        <th style={styles.ths}>NOM-CLIENT</th>
                        <th style={styles.ths}>MONTANT AVANCE</th>
                        <th style={styles.ths}>DATE</th>
                        <th style={styles.ths}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {produitsAffiches.map((stocks) => (
                    <tr key={stocks.id}>
                        <td style={styles.tds}>{stocks.numfacture}</td>
                        <td style={styles.tds}>{stocks.nomclient}</td>
                        <td style={styles.tds}>{stocks.montantavance}</td>
                        <td style={styles.tds}>{stocks.date}</td>
                        <td style={styles.tds}>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{color:"blue"}} className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
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
export default HistoriqueFacture;