
import { useRef, useEffect } from "react";
import Id, { calItemsSize, calPages, disableElement } from "../utils/functions";
import React from 'react';

let classPrevious = 'btn btn-icon border-0 shadow-none bg-white me-2 btn-hover-box-shadow btn-hover-border btn-active shadow-default';
let classNext = 'btn btn-icon border-0 shadow-none bg-white btn-hover-box-shadow btn-hover-border btn-active shadow-default';


export default function TableFooter({ 
    items,  
    onSelectPage,
    onNextPage, 
    onPreviousPage, 
    page,
    total, 
    pages, 
    hasNext, 
    hasPrevious }) {

    let itemsSize = calItemsSize(total);
    let lstPages = calPages(pages);

    classNext = disableElement(classNext, hasNext);
    classPrevious = disableElement(classPrevious, hasPrevious);

    const pageSizeEle = useRef();
    const rangeBeginEle = useRef();
    const rangeEndEle = useRef();

    const calBegin = () => {
        if(pageSizeEle.current === null)
            return 0;
        let pageSize, begin;
        if(pageSizeEle.current.value)
            pageSize = parseInt(pageSizeEle.current.value);
        else
            pageSize = 0;
        begin = (page - 1) * pageSize;
        return begin !== 0 ? begin : 0;
    }

    useEffect(() => {
        pageSizeEle.current = Id('select-page-size');
        rangeBeginEle.current = Id('range-begin');
        rangeEndEle.current = Id('range-end');
        
        let begin = calBegin();
        if(rangeBeginEle.current)
            rangeBeginEle.current.textContent = begin === 0 ? 1 : begin;
        if(rangeEndEle.current)
            rangeEndEle.current.textContent = items.length + begin;
    });

    return (

        <div className="d-flex justify-content-end align-items-center p-3 rounded-bottom" style={{backgroundColor : 'white', borderTop: "1px solid rgba(0, 0, 0, 0.05)"}}>
            {items.length > 0 && (
                <>
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <span className="text-nowrap me-2">
                                <span id="range-begin"></span> à <span id="range-end"></span> sur {total}
                            </span>
                            <select className="form-select me-2 pt-1 border-0 shadow-none shadow-default" style={{ minHeight: "0px", height: "32px" }}
                            onChange={onSelectPage}>
                                {lstPages.map((numPage, index) => (
                                    <option key={index}>{numPage}</option>
                                ))}
                            </select>
                        </div>
                        <button data-page={parseInt(page) - 1} className={classPrevious} style={{ minHeight: "0px", minWidth: "0px", height: "32px", width: "32px" }}
                        onClick={onPreviousPage}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
                        </button>
                        <button data-page={parseInt(page) + 1} className={classNext} style={{ minHeight: "0px", minWidth: "0px", height: "32px", width: "32px" }}
                        onClick={onNextPage}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                        </button>
                    </div>
                </>
            )}
            {items.length == 0 &&
                <div style={{ height: "36px" }}></div>
            }
        </div>
    );

}
