import React,{useState} from "react";
import { NavLink } from "react-router-dom";
const DropdownMenu = () =>{
const[isOpen, setIsOpen] = useState(false);
const toggleMenu=()=>{setIsOpen(!isOpen);};
const styles={
    list:{
        backgroundColor: "#d9dadb",
        padding: "auto",
        textDecoration: "none",
        display: "block",
        textAlign: "left",
        color:"black"
    },
    hrs:{
        width:"80%",
        height:"2px",
        backgroundColor:"#333",
        margin:"1px auto"
    },
    but:{
        background: "none",
        border: "none",
        textDecoration: "none",
    }
}
return(
    <div className="dropdwon">
        <button style={styles.but} onClick={toggleMenu}>Fournisseur</button>
        {isOpen && (
            <ul>
                 <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/nouveau"} onClick={toggleMenu}>Nouveau fournisseur</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/allfournisseur"} onClick={toggleMenu}>table fourniseur</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/enregistrefacture"} onClick={toggleMenu}>factureFournisseur</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/allfacture"} onClick={toggleMenu}>All facture</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/allversement"} onClick={toggleMenu}>All versement</NavLink>
                </li>
            </ul>
        )}

    </div>
)
}
export default DropdownMenu;