import React, { useState } from "react";
import Styles from './singUp.module.css'

const SingUp  = () => {
    const[name,setName] = useState("");
    const[email,setEmail]= useState("")
    const[phone,setPhone] = useState("")
    const[password,setPassword] = useState("")
    const handelSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("Name",JSON.stringify(name));
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("Phone",JSON.stringify(phone));
        localStorage.setItem("Password",JSON.stringify(password));
    }
    return (
<form onSubmit={handelSubmit} className={`${Styles.inpute_group_register} ${Styles.signUp}`}>
<input type="text" className={Styles.input_field} onChange={(event) =>setName(event.target.value)} placeholder="Full Name" required />
<input type="email" className={Styles.input_field} onChange={(event) =>setEmail(event.target.value)} placeholder="Email Id" required />
<input type="number" className={Styles.input_field} onChange={(event) =>setPhone(event.target.value)} placeholder="Phone No." required />
<input type="password" className={Styles.input_field} onChange={(event) =>setPassword(event.target.value)} placeholder="Password" required />
<input type="password" className={Styles.input_field} placeholder="Confirm Password" />
<div className={Styles.checkbox}>
    <input type="checkbox" className={Styles.check_box} /><span>I agree the terms and condition</span>
</div>
<p style={{color:"#ccc",fontSize:"10px",marginBottom:"10px"}}> Click to login, if already have account</p>
<button type="submit" className={Styles.submit_btn}>Register</button>
</form>

);
}
export default SingUp;