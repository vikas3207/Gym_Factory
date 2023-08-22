import React, { useState } from "react";
import Styles from './singUp.module.css'
import Image from '../../assests/form_side_bg.jpg'
import Login from "./Login";
import SingUp from './SingUp';

function Form() {
    const [login, setLogin] = useState(false);
    const openSingUp = () => {
        setLogin(false)
       
    }
    const OpenLogin = () => {
        setLogin(true)
    }

    return (
        <section id="form" className={Styles.form}>
            <div className={Styles.form_row}>
                <div className={Styles.form_img}></div>
                <div className={Styles.form_box} >
                    <div className={Styles.button_box}>
                        <div id={Styles.btn} style={{ left: login ? "110px" : "0" }}></div>
                        <button type="button" className={Styles.toggle_btn} onClick={openSingUp} >Sing Up</button>
                        <button type="button" className={Styles.toggle_btn} onClick={OpenLogin} >Log In</button>
                    </div>

                    {login ? (<Login />) : (<SingUp />)}

                </div>
            </div>
        </section>
    );

}
export default Form;