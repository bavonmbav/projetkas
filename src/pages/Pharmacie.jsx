// import MedecinList from "../components/pharmacie/MedecinList";
import MainFrame from "../components/MainFrame";
import Sidebar from "../components/Sidebar";
import React from "react";
import Bouton from "../pages/Navigation";

function Pharmacie() {
    return (
        <>
            <Sidebar active="pharmacie" />
            <Bouton/> 
            {/* <MainFrame title="Pharamac" tableComponent={table} /> */}
        </>
    );

} 
export default Pharmacie;