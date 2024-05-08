
import TableConsultation from "../components/tables/TableConsultation";
import MainFrame from "../components/MainFrame";
import Sidebar from "../components/Sidebar";

export default function Consultation() {

    let table = <TableConsultation/>


    return (
        <>
            <Sidebar active="consultation" />
            <MainFrame title="Fiche de consultation" tableComponent={table} />
        </>
    );

} 
