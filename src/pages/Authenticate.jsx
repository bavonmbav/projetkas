

import React, { useEffect, useRef } from 'react';
import Id  from '../utils/functions';
import '../assets/styles/Authenticate.css';
import ValidateInput from '../utils/ValidateInput';
import DoctorImage from '../assets/img/undraw_doctor.svg';

const styles = {

    extra_container: {
        width:"750px", 
        height:"550px", 
        boxShadow: "rgba(0, 0, 0, 0.2) 0 1px 20px 0", 
        borderRadius:"12px", 
        paddingLeft: "14px", 
        paddingRight: "19px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backgroundColor: "white",
    },

    right_content: {
        height: "526px", 
        width: "50%",
        borderRadius: "12px", 
        marginTop: "10px",
        backgroundColor: '#2e312d', //"#003e7c",
    },

    text_hopital: {
        fontSize: "3.5rem",
        fontWeight: "bolder",
        fontFamily: "Bariol",
        lineHeight: "50px",
        marginTop: "0.7rem",
    },

    text_name: {
        fontWeight: "bolder",
        fontSize: "1.1rem",
        fontFamily: "Bariol",
    },

    welcome : {
        fontFamily: "Bariol",
        fontSize: "1.1rem",
        fontWeight: "700",
        marginBottom: "1.2rem",
        borderBottom: "1px solid white",
    },

    wrong_input: {
        color : "#ad0a0a",
        borderRadius: "3px",
        backgroundColor: "#fbebeb",
        transition: "all linear 0.2s",
    }

}



export default function Authenticate() {

    let eyeOff = useRef();
    let eyeOn = useRef();
    let switchElm = useRef();
    let usernameElm = useRef();
    let passwordElm = useRef();
    let buttonConnElm = useRef();

    let validateUsername = useRef();
    let validatePassword = useRef();

    const closeWrongInput = (ev) => {

        ev.target.parentNode.style.visibility = "hidden";
        ev.target.parentNode.style.opacity = "0";

    }


    useEffect(() => {

        eyeOff.current = document.querySelector(".eye-off");
        eyeOn.current = document.querySelector(".eye-on");
        switchElm.current = Id('switch-password');
        passwordElm.current = Id('password');
        usernameElm.current = Id('username')
        buttonConnElm.current = Id('btn-conn');

        validateUsername.current = new ValidateInput(
            usernameElm.current,
            Id('error-username')
        );

        validatePassword.current = new ValidateInput(
            passwordElm.current,
            Id('error-password')
        );

        switchElm.current.onclick = () => {
            
            if(eyeOff.current.style.display === 'none') {
                eyeOff.current.style.display = "";
                eyeOn.current.style.display = "none";
                    passwordElm.current.type = "text";
            }
            else {
                eyeOn.current.style.display = "";
                eyeOff.current.style.display = "none";
                passwordElm.current.type = "password";
            }
        }

        buttonConnElm.current.onclick = () => {
            validateUsername.current.validate();
            validatePassword.current.validate();
        }
        

    }, []);


    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor: "#fdfdff"}}>
            <div className="container" style={styles.extra_container}>
                <div className="row">
                    <div className="col col-7 pe-4 ps-4" style={{marginTop: "6px"}}>

                        <h1 style={{marginTop:"2.5rem"}}>Authentification</h1>

                        <div className="w-100 mt-2 d-flex justify-content-between pe-1 ps-1" style={styles.wrong_input}>
                            <span className="ps-2">
                                informations fournies incorrectes
                            </span>
                            <button className="btn-close" onClick={closeWrongInput}></button>
                        </div>

                        <div className="mb-3" style={{marginTop: "0.9rem"}}>
                            <label className="form-label">Nom d'utilisateur</label>
                            <input type="text" id="username" className="form-control" name="" placeholder="Nom d'utilisateur" />
                            <div className='error' id="error-username">Nom d'utilisateur incorrect</div>
                        </div>
                        
                        <div className="mt-md-2 mb-3">
                            <label className="form-label">Mot de passe</label>
                            <div className="input-icon invalid-blk">
                                <input type="password" id="password" className="form-control" placeholder="Mot de passe" />
                                <span className="input-icon-addon" id="switch-password">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-dark eye-on" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-dark eye-off" style={{ display: "none" }} width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" />
                                    </svg>
                                </span>
                            </div>
                            <div className='error' id="error-password">Mot de passe incorrect</div>
                        </div>

                        <div className="mt-md-2">
                            <div className="form-label">Spécialité</div>
                            <select className="form-select">
                                <option value="Admission">Médecin</option>
                                <option value="Fac-1">Infirmier(e)</option>
                                <option value="Fact-2">Caissier</option>
                            </select>
                        </div>

                        <div className="" style={{ marginTop: "3.69rem" }}>
                            <button className="btn btn-primary btn-pill w-100" id="btn-conn" style={{height: '32px'}}>Connexion</button>
                        </div>
                    </div>

                    <div className="col d-flex flex-column align-items-center justify-content-center" id='logo-col' style={styles.right_content}>
                        <img src={DoctorImage} width={200} height={200}/>
                        <div className='d-flex flex-column'>
                            <span className='text-white' style={styles.welcome}>Bienvennue</span>
                            <span className="text-white" style={styles.text_hopital}>HOPITAL</span>
                            <span className="text-white" style={styles.text_name}>NOTRE DAME DE LONDRES</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
