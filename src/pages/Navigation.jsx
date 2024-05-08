import React, { useState } from 'react';
// produit
import Produit from "../components/pharmacie/produit/Addproduit";
import Produite from "../components/pharmacie/produit/AllCommande";
import Produites from "../components/pharmacie/produit/Allproduit";
import Produits from "../components/pharmacie/produit/ConsulterStock";
// operation
import Operation from '../components/pharmacie/operation/Entrer';
import Operations from '../components/pharmacie/operation/Sortie';
//fournisseur
import Fournisseurs from "../components/pharmacie/Fournisseurs/NouveauFournisseur";
import Fournisseur from "../components/pharmacie/Fournisseurs/AllFournisseur";
import Fournisseuress from "../components/pharmacie/Fournisseurs/AllVersement";
import Fournisseurese from "../components/pharmacie/Fournisseurs/SaveFacture";
import Fournisseuresse from "../components/pharmacie/Fournisseurs/AllFacture";
// facture
import AutreFacture from '../components/pharmacie/facture/Autrefacture';
import FactureAboner from '../components/pharmacie/facture/FactureAboner';
import HistoriqueFacture from '../components/pharmacie/facture/ConsulterHistorique';
//panier
import Parent from '../components/pharmacie/operation/panier/Parent';
import Paiement from '../components/pharmacie/operation/panier/GestionPaiement';
//VENTE 
import Journalier from '../components/pharmacie/vente/Journalier';
import Allvente from '../components/pharmacie/vente/AllVentes';
import VenteProduitaboner from '../components/pharmacie/operation/aboner';
// boutons Menu
import ProduitMenu from './dorp/Produitbtn';
import OperationMenu from './dorp/Operabtn';
import FactureMenu from './dorp/Facturebtn';
import FournisseurMenu from './dorp/Fournbtn';
import VenteMenu from './dorp/Ventbtn';



import { Routes,Route} from 'react-router-dom';

const styles = {
    uls:{
        listStyleType: "none",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        backgroundColor: "#333;"
    },
    lis:{
        float: "left",
        display:"inline-block",
        color:"rgb(255, 255, 255)",
        textAlign:"center",
        padding:"10px 12px",
        textDecoration:"none"
    }
}


function Navigation () {
        return (
            
            <div style={{paddingLeft: "230px", backgroundColor: "#f7f7f7"}}>
                <div className="d-flex align-items-center justify-content-between pt-3 ms-6 me-6">
                  <div>
                    <nav>
                        <ul style={styles.uls}>
                            <li style={styles.lis}><ProduitMenu/></li>
                            <li style={styles.lis}><OperationMenu/></li>
                            <li style={styles.lis}><FactureMenu/></li>
                            <li style={styles.lis}><FournisseurMenu/></li>
                            <li style={styles.lis}><VenteMenu/></li>
                        </ul>
                    </nav>
                  </div>
                 
                  
                    <button className="btn btn-icon btn-primary shadow-default" style={{ minHeight: "0px", height: "32px",minWidth: "0px", width: "32px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
                    </button>
            </div>
            <div className="ms-6 me-6 pt-3">
            <Routes>
            {/* redirection de produit*/}
            <Route path='produit' element={ <Produit/>}/>
            <Route path='allcommande' element={ <Produite/>}/>
            <Route path='allproduit' element={ <Produites/>}/>
            <Route path='stocks' element={ <Produits/>}/>

            {/* redirection d'operation */}
            <Route path='entrer' element={<Operation/>}/>
            <Route path='sortie' element={<Operations/>}/>
            {/*  redirection fournisseur */}
            <Route path='nouveau' element={<Fournisseurs/>}/>
            <Route path='allfournisseur' element={ <Fournisseur/>}/> 
            <Route path='allversement' element={<Fournisseuress/>}/>
            <Route path='enregistrefacture' element={ <Fournisseurese/>}/> 
            <Route path='allfacture' element={<Fournisseuresse/>}/>
            {/* autrefacture */}
            <Route path='autrefacture' element={<AutreFacture/>}/>
            <Route path='factureabonne' element={<FactureAboner/>}/>
            <Route path='historique' element={<HistoriqueFacture/>}/>
            <Route path='panier' element={<Parent/>}/>
            <Route path='VenteProduitaboner' element={<VenteProduitaboner/>}/>
            <Route path='paiement' element={<Paiement/>}/>
            {/* VENTE */}
            <Route path='journalier' element={<Journalier/>}/>
            <Route path='allvente' element={<Allvente/>}/>
            </Routes>
            </div>
        </div>
        );
}

export default Navigation;