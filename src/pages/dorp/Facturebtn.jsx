import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import '../../assets/styles/btn.css';

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
        <button style={styles.but} className="buton" onClick={toggleMenu}>Facture</button>
        {isOpen && (
            <ul>
                 <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/autrefacture"} onClick={toggleMenu}>Autre facture</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/factureabonne"} onClick={toggleMenu}>Facture Abones</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/historique"} onClick={toggleMenu}>Historique</NavLink>
                </li>
            </ul>
        )}
    </div>
)
}
export default DropdownMenu;