import React, { useState } from "react";
import styles from './nav.module.css'
import Logo_img from '../../assests/Gym_logo_1.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Styles from '../forms/singUp.module.css'
// import {Link} from 'react-router-dom'
import Form from "../forms/Form";
const Nav = () => {
    const [navbar, setNavbar] = useState(false)
    const[loginForm,setLoginForm] = useState(false)

   
    const openNav = () => {
        setNavbar(true)
    }
    const closeNav = () => {
        setNavbar(false)
    }
  
  
    return (
        <nav >
            {/* <p>GYM</p> */}
            <div className={Styles.logo_div}>
            <img src={Logo_img} alt="logo" style={{width:"150px", height:"4vh"}} />
            </div>
            <ul className={navbar ? styles.nav_mobile_links : styles.nav_links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Classes</a></li>
                <li><a href="#">Blogs</a></li>
            <a href="#form"><button className="btn">Join Us</button></a>

            </ul>
            {navbar ?
                (<AiOutlineClose className={styles.nav_icon} onClick={closeNav} />) :
                (<FaBars className={styles.nav_icon} onClick={openNav} />)}

        </nav>
        
    );
}
export default Nav;