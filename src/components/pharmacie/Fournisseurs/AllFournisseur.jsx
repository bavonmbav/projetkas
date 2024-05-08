import React, { useState, useEffect } from "react";
import "../../../assets/styles/panier.css";
 function Allcomande() {
  const [recherche, setRecherche] = useState("");
  const [stockma, setStockma] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données depuis le backend
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8000/items/");
    //     if (!response.ok) {
    //       throw new Error("Erreur lors de la récupération des données");
    //     }
    //     const data = await response.json();
    //     setStockma(data);
      
    //     console.log("voici le donne"+stockma);


    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // // Appel de la fonction fetchData
    // fetchData();
    fetch("http://localhost:8000/items/").then((data)=>data.json()).then((val)=>setStockma(val))

  }, []);
{
  console.log(stockma,"avec succes")
}
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Logic to get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = stockma.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleRecherche = (e) => {
    setRecherche(e.target.value);
  };
  // filtrage de donnees de la table
  const filteredProduits = stockma.filter((stocks) =>
    Object.values(stocks)
      .join(" ")
      .toLowerCase()
      .includes(recherche.toLowerCase())
  );

  const produitsAffiches = recherche ? filteredProduits : currentProducts;

  const styles = {
    tables: {
      width: "100%",
      borderCollapse: "collapse",
    },

    ths: {
      border: "1px solid #dddddd",
      padding: "8px",
      textAlign: "left",
      backgroundColor: "#f2f2f2",
    },

    tds: {
      border: "1px solid #dddddd",
      padding: "8px",
      textAlign: "left",
    },
    inputs: {
      width: "40%",
      padding: "10px",
      marginBottom: "10px",
    },
    button: {
      padding: "5px 10px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      borderRadius: "3px",
    },
    divs: {
      backgroundColor: "#fff",
    },
  };

  return (
    <div style={styles.divs}>
      <h2 style={{ paddingLeft: "390px", fontFamily: "sans-serif", textJustify: "auto" }}>
        {" "}
        GESTIONNAIRE DE FOURNISSEUR
      </h2>
      <input
        type="text"
        style={styles.inputs}
        placeholder="Recherche"
        value={recherche}
        onChange={handleRecherche}
      />
      <table style={styles.tables}>
        <thead>
          <tr>
            <th style={styles.ths}>ID</th>
            <th style={styles.ths}>nom fournisseur</th>
            <th style={styles.ths}>Adresse</th>
            <th style={styles.ths}>Contact</th>
            <th style={styles.ths}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {produitsAffiches.map((stocks, index) => (
            <tr key={index}>
            <td style={styles.tds}>{stocks.idfournisseur}</td>
            <td style={styles.tds}>{stocks.nom}</td>
            <td style={styles.tds}>{stocks.adresse}</td>
            <td style={styles.tds}>{stocks.telephone}</td>
              <td style={styles.tds}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "blue" }}
                    className="icon"
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
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "red" }}
                    className="icon"
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
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </a>
              </td>
            </tr>
            
          ))}
        </tbody>
        {console.log(stockma)}
      
      </table>
      <footer>
        {/* la pagination de les elements du tableau*/}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(stockma.length / productsPerPage) }).map((_, index) => (
            <li
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Allcomande;
