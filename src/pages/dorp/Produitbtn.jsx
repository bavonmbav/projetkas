
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
        <button  style={styles.but} onClick={toggleMenu}>Produit</button>
        {isOpen && (
            <ul>
                <hr style={styles.hrs}/>
                <li style={styles.list} >
                    <NavLink style={styles.list} to={"/produit"} onClick={toggleMenu}>Ajouter produit</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink  style={styles.list} to={"/allproduit"} onClick={toggleMenu}>All produit</NavLink>
                </li>
                <hr  style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/stocks"} onClick={toggleMenu}>stock</NavLink>
                </li>
                <hr style={styles.hrs} />
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/allcommande"} onClick={toggleMenu}>Commande</NavLink>
                </li>
            </ul>
        )}
        <ul></ul>
    </div>
)
}
export default DropdownMenu;