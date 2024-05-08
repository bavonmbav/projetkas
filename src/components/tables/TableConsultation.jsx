import React,{ useState } from "react";
import TableBody from "../TableBody";
import TableFooter from "../TableFooter";
import TableHeader from "../TableHeader";


let consultations = [

    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
    {
        nom_patient : 'KIBANGULA MUSUYU Prosper',
        date_consultation: '12/02/2024',
        adresse: 'Q/Hewa-bora',
        selected: false,
    },
];

//consultations = [];

let page=1,
    pages=1,
    hasNext=true,
    hasPrevious=true;


export default function TableConsultation() {


    const [selectAll] = useState(false);


    const handleCancel = () => {

    }

    const handleSelectAll = () => {

    }

    const handleManyDelete = () => {

    }

    const handleSingleSelect = () => {

    }

    const handleSingleDelete = () => {

    }

    const handleSelectPage = () => {

    }

    const handleNextPage = () => {

    }

    const handlePreviousPage = () => {

    }


    return (
        <div className="rounded" style={{border: "1px solid rgba(158, 158, 158, 0)"}}>

            <TableHeader
                items={consultations}
                title="Consultation"
                textWhereSelected=" consultation(s) selectionnées"
                onCancel={handleCancel}
                onManyDelete={handleManyDelete}
            />

            <TableBody
                items={consultations}
                keys={['nom_patient', 'date_consultation', 'adresse']}
                columns={['Nom du patient', 'date de consultation', 'Adresse']}
                selectAll={selectAll}
                onSelectAll={handleSelectAll}
                onSingleSelect={handleSingleSelect}  
                onSingleDelete={handleSingleDelete}
                descWhenEmpty="Aucunes consultations enregistrées"
            />

            <TableFooter
                items={consultations}
                onSelectPage={handleSelectPage}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                page={page}
                total={consultations.length}
                pages={pages}
                hasNext={hasNext}
                hasPrevious={hasPrevious}
            />
        </div>
    );

}
