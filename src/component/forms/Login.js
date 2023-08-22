import React from "react";
import Styles from './singUp.module.css'

const Login  = () => {
    return (
        <div className={`${Styles.inpute_group_register} ${Styles.login}`}>
        <input type="email" className={Styles.input_field} placeholder="Email Id" required />
        <input type="password" className={Styles.input_field} placeholder="Password" required />
        <div className={Styles.checkbox}>
            <input type="checkbox" className={Styles.check_box} /><span>Remember Password</span>
        </div>
        <button type="submit" className={Styles.submit_btn}>Login</button>
        
    </div>
    );
}
export default Login;