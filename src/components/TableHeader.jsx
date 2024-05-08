import React from 'react';
import { countNumSelected } from '../utils/functions';

const styles = {

  btnIcon: {
    minHeight: "0px",
    minWidth: "0px",
    height: "27px",
    width: "34px"
  },
  
  inputCheckbox: {
    height: "16px",
    width: "16px"
  }

}

function TableHeader({ items, title, textWhereSelected, onCancel, onManyDelete }) {
  return (
    <>
      {countNumSelected(items) > 0 ? (
        <div className="d-flex align-items-center">
          <button className="btn btn-icon ms-2 me-2 text-danger" style={styles.btnIcon}
          onClick={onManyDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" /></svg>
          </button>
          <button className="btn btn-icon me-2 shadow-none-force bg-active-force" style={styles.btnIcon}
          onClick={onCancel}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </button>
          <span style={{ fontWeight: "500", lineHeight: "1.42", fontSize: "0.875rem" }}>
            {countNumSelected(items)} {textWhereSelected}
          </span>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center p-3 rounded-top" style={{backgroundColor:'white'}}>
          <div className="w-100 d-flex justify-content-between">
            <div className="w-50">
              {items.length > 0 &&
              <div className="input-icon">
                <span className="input-icon-addon" style={styles.btnIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
                </span>
                <input type="text" className="form-control border" placeholder="Chercher…"  style={{ minHeight: "0px", height: "32px" }}/>
              </div>
              }
            </div>
            <div className="d-flex">
                <label className='form-label text-nowrap me-1 d-flex h-100 align-items-center'>Médecin : </label>
                <select className='form-select me-2 pt-1' style={{ minHeight: "0px", height: "32px" }}>
                    <option value="">Bruno</option>
                    <option value="">Marcel</option>
                </select>
                <button className="btn me-2" style={{ minHeight: "0px", height: "32px" }}>
                    Trier
                </button>
                <button className="btn btn-primary shadow-default" style={{ minHeight: "0px", height: "32px" }}>
                    Ajouter
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableHeader;
