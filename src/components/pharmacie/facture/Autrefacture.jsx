import React, { useState } from "react";

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
    textAlign: "left"
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
  divs: {
    backgroundColor: "#fff"
  }
};

function AutreFacture() {
  const [recherche, setRecherche] = useState("");
  const [stockma, setStockma] = useState([
    { id: 1, idpayement: 12, montant: 2400, montantremis: 600, montantrendu: 3000, numfacture: '002-01-2024' },
    { id: 2, idpayement: 23, montant: 2500, montantremis: 500, montantrendu: 3000, numfacture: '003-01-2024' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const handlePrint = (idFacture) => {
    const facture = stockma.find((facture) => facture.id === idFacture);

    const content = `
      <h1>Facture</h1>
      <p>ID Payement: ${facture.idpayement}</p>
      <p>Montant: ${facture.montant}</p>
      <p>Montant Remis: ${facture.montantremis}</p>
      <p>Montant Rendu: ${facture.montantrendu}</p>
      <p>Numéro de Facture: ${facture.numfacture}</p>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  const handleRecherche = (e) => {
    setRecherche(e.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = stockma.slice(indexOfFirstProduct, indexOfLastProduct);

  const filteredProduits = stockma.filter((stocks) =>
    Object.values(stocks)
      .join(' ')
      .toLowerCase()
      .includes(recherche.toLowerCase()));

  const produitsAffiches = recherche ? filteredProduits : currentProducts;

  return (
    <div style={styles.divs}>
      <h2 style={{ paddingLeft: "390px", fontFamily: "sans-serif", textJustify: "auto" }}> IMPRIMER LES FACTURES</h2>
      <input type="text" style={styles.inputs} placeholder='Recherche' value={recherche} onChange={handleRecherche} />
      <table style={styles.tables}>
        <thead>
          <tr>
            <th style={styles.ths}>IDPAYEMENT</th>
            <th style={styles.ths}>MONTANT</th>
            <th style={styles.ths}>MONTANT REMIS</th>
            <th style={styles.ths}>MONTANT RENDU</th>
            <th style={styles.ths}>NUM-FACTURE</th>
            <th style={styles.ths}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {produitsAffiches.map((stocks) => (
            <tr key={stocks.id}>
              <td style={styles.tds}>{stocks.idpayement}</td>
              <td style={styles.tds}>{stocks.montant}</td>
              <td style={styles.tds}>{stocks.montantremis}</td>
              <td style={styles.tds}>{stocks.montantrendu}</td>
              <td style={styles.tds}>{stocks.numfacture}</td>
              <td style={styles.tds}>
                <a href="#" onClick={() => handlePrint(stocks.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon print-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9h6v-4h6v4h6v6h-6v4h-6v-4h-6v-6" />
                    <circle cx="12" cy="16" r="2" />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(stockma.length / productsPerPage) }).map((_, index) => (
            <li key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default AutreFacture;
