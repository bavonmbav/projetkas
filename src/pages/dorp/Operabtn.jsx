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
        <button style={styles.but} onClick={toggleMenu}>Operation</button>
        {isOpen && (
            <ul>
                 <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/entrer"} onClick={toggleMenu}>Entrer</NavLink>
                </li>
                <hr style={styles.hrs}/>
                <li style={styles.list}>
                    <NavLink style={styles.list} to={"/sortie"} onClick={toggleMenu}>Sortie</NavLink>
                </li>
            </ul>
        )}
    </div>
)
}
export default DropdownMenu;