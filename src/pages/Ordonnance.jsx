import TableOrdonnance from "../components/tables/TableOrdonnance";
import MainFrame from "../components/MainFrame";
import Sidebar from "../components/Sidebar";
import React from 'react';
export default function Ordonnance() {

    let table = <TableOrdonnance/>

    
    return (
        <>
            <Sidebar active="ordonnance" />
            <MainFrame 
                title="Ordonnances" 
                tableComponent={table}
                />
        </>
    );

} 
