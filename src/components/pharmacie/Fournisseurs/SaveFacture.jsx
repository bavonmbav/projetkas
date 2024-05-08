import React,{useState} from "react";
import '../../../assets/styles/interface.css';
import { NavLink } from "react-router-dom";

function Savefacture(){

    //
    const[idfacture, setIdfacture] = useState('');

    return[
        <div className="contenaire">
            <h1 style={{paddingLeft: "390px", fontFamily:"sans-serif", textJustify:"auto"}}>ENREGISTRER UNE FACTURE</h1>
            <form className="form" action="">
                <label htmlFor="">
                    Numero Facture :
                    <input className="input" type="text" name="" id=""  value={idfacture} onChange={(e)=>setIdfacture(e.target.value)} required/>
                </label>
                <label htmlFor="">
                    Nom Fournisseur 
                    <select className="select" name="" id="">
                        <option value="franck">Franck</option>
                        <option value="Gabriel">Gabriel</option>
                        <option value="Bavon">Bavon</option>
                    </select>
                </label>
                <NavLink className="btna" to={"/nouveau"} >ajouter un fournisseur</NavLink>
                <label htmlFor="">
                    Montant Facture
                    <input className="input" type="number"  required/>
                </label>
                <label htmlFor="">Avance
                    <input className="input" type="number" required />
                </label>
                <label htmlFor="">
                    date facturation
                    <input className="input"  type="date" required/>
                </label>
                <label htmlFor="">
                     date echeance
                     <input className="input" type="date" required />
                </label>
                <input className="btnajoute" type="submit" value={"Ajouter"} />
            </form>
            <div>  
            </div>
        </div>
    ]
}
export default Savefacture;