
import React from 'react';
import '../assets/styles/Sidebar.css'
//import { Link } from 'react-router-dom'


const styles = {

    text_hopital: {
        fontSize: "2.6rem",
        fontWeight: "bolder",
        fontFamily: "Bariol",
        lineHeight: "40px",
        color: "#003e7c",
        textShadow: "0 0 0px #fff, 0 0 50px #fff, 0 0 50px #fff, 0 0 50px #e5e7eb, 0 0 5px #d5d5d5, 0 0 5px #dbdce6, 0 0 5px #dbdce6, 0 0 5px #dbdce6",
    },

    text_name: {
        fontSize: "0.82rem",
        position: "relative",
        top: "-0.5rem",
    },
};


// Base component for items
function NavItem({ title, active, value, to }) {

    return (
        <li className="li">
            {/*<Link to={to} className={ active === value ? "link sr-nav-item active" : "link sr-nav-item" }>
                {title}
            </Link>*/}
            <a className={active === value ? "link sr-nav-item active" : "link sr-nav-item"}>
                {title}
            </a>
        </li>
    );

}

/* Component sidebar */
export default function Sidebar({ active }) {


    return (

        <ul className="sidebar-navbar">
            <div className="sidebar-navbar-header mt-5 mb-6 flex-column d-flex align-items-center justify-content-center">
                <span style={styles.text_hopital}>HOPITAL</span>
                <span style={styles.text_name}>Notre dames de londres</span>
            </div>

            <li className="li">
                <a href="#" className={active === "ordonnance" ? "link sidebar-nav-item active" : "link sidebar-nav-item"}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon-nav-item" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21v-2a4 4 0 0 1 4 -4h2" /><path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /></svg>
                    </span>
                    <span>
                        Patients
                    </span>
                </a>
            </li>
            <li className="li">
                <a href="#" className={active === "consultation" ? "link sidebar-nav-item active" : "link sidebar-nav-item"}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon-nav-item" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 17l0 .01" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M7 7l0 .01" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M17 7l0 .01" /><path d="M14 14l3 0" /><path d="M20 14l0 .01" /><path d="M14 14l0 3" /><path d="M14 20l3 0" /><path d="M17 17l3 0" /><path d="M20 17l0 3" /></svg>
                    </span>
                    <span>
                        Consultations
                    </span>
                </a>
            </li>
            <li className="li">
                <a href="#" className={active === "ordonnance" ? "link sidebar-nav-item active" : "link sidebar-nav-item"}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon-nav-item" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21v-2a4 4 0 0 1 4 -4h2" /><path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /></svg>
                    </span>
                    <span>
                        Ordonnances
                    </span>
                </a>
            </li>
            <li className="li">
                <a href="#" className={active === "redez_vous" ? "link sidebar-nav-item active" : "link sidebar-nav-item"}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon-nav-item" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="5" width="16" height="14" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <line x1="12" y1="15" x2="12" y2="19" />
                            <line x1="9" y1="18" x2="15" y2="18" />
                        </svg>
                    </span>
                    <span>
                        Rendez-vous
                    </span>
                </a>
            </li>
            <li className="li">
                <a href="#" className={active === "pharmacie" ? "link sidebar-nav-item active" : "link sidebar-nav-item"}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icon-nav-item" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="4" x2="8" y2="20" />
                            <line x1="16" y1="4" x2="16" y2="20" />
                            <line x1="4" y1="8" x2="8" y2="8" />
                            <line x1="4" y1="16" x2="8" y2="16" />
                            <line x1="16" y1="8" x2="20" y2="8" />
                            <line x1="16" y1="16" x2="20" y2="16" />
                        </svg>
                    </span>
                    <span>
                        Pharmacies
                    </span>
                </a>
            </li>
        </ul>
    );
}


