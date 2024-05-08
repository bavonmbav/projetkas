
import EmptyImage from '../assets/img/empty.svg';
import React from 'react';



const styles = {

    checkbox: {
        width: "16px",
        height: "16px",
        marginTop: "3px",
        backgroundSize: "17px"
    },

    tableContainer: {
        overflowX: "scroll",
        height: "81%",
        minWidth: "100px",
    },

    btnDots: {
        minHeight: "0px",
        minWidth: "0px",
        height: "32px",
        width: "32px",
        border: "none",
        boxShadow: "none",
    },

    trHead : {
        height: "42px", 
        backgroundColor: "#f9fafd",
        borderTop: "1px solid rgba(0, 0, 0, 0.02)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)"
        
    },

    trBody : {
        height: "52px", 
        borderBottom: "1px solid rgba(0, 0, 0, 0.01)", 
        backgroundColor: "white",
        fontSize: "0.848rem",
    }
}



export default function TableBody({items, keys, columns, selectAll, onSelectAll, onSingleSelect, onSingleDelete, descWhenEmpty}) {

    return (
        <>
            {items.length > 0 ? (
                <div className="" style={styles.tableContainer}>
                    <table className="w-100">
                        <thead>
                            <tr className='' style={styles.trHead}> 
                                <th className="text-center" style={{paddingRight:"15px"}}>
                                    <input type="checkbox" style={styles.checkbox} className="form-check-input" onChange={onSelectAll} checked={selectAll} />
                                </th>
                                
                                {columns.map((column, index) => (
                                    <th key={index}>{column}</th>
                                ))}

                                <th className="text-end pe-6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} id={index} style={styles.trBody} className={item.selected === true ? "tr-selected tr-hover" : "tr-hover"} >
                                    <td className="text-center" style={{paddingRight:"15px"}}>
                                        <input className="form-check-input" style={styles.checkbox} type="checkbox" checked={item.selected} 
                                        onChange={onSingleSelect} />
                                    </td>
                                    
                                    {keys.map((key, index) => (
                                        <td key={index}>{item[key]}</td>
                                    ))}

                                    <td className="text-end" style={{ paddingRight: "20px" }}>
                                        <button className="btn btn-icon text-danger me-2" style={styles.btnDots}
                                        onClick={onSingleDelete}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                        </button>
                                        <button className="btn btn-icon" style={styles.btnDots}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>) : (
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "48px", height: "364px", borderBottom: "1px solid rgba(0, 0, 0, 0.02)", borderTop: "1px solid rgba(0, 0, 0, 0.02)", backgroundColor: 'rgb(253, 253, 255)' }}>
                    <span>
                        <img src={EmptyImage} width="110" height="110" alt="Empty"/>
                    </span>
                    <span style={{ fontSize:"1.25rem", fontWeight:"600" }}>
                        {descWhenEmpty}
                    </span>
                    <span className="text-muted">Cliquer ci dessous pour ajouter.</span>
                    <button className="btn btn-primary mt-5" style={{height: "32px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                        ajouter
                    </button>
                </div>
            )}
        </>
    );

}
