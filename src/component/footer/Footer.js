import React from "react";
import Styles from '../footer/footer.module.css';
import {BsWhatsapp,BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';

const Footer = () =>{
    return(
        <section id={Styles.footer}>
        <div className={Styles.footer_row}>
        <div className={Styles.footer_left_row}>
        <h2>GYM</h2>
        <p>879/1, ABC Road, XYZ City, 222001</p>
        <div className={Styles.social_links}>
        <BsWhatsapp className={Styles.social_icon} />
        <BsFacebook className={Styles.social_icon} />
        <BsInstagram className={Styles.social_icon} />
        <BsTwitter className={Styles.social_icon} />
        </div>
        </div>
        <div className={Styles.footer_right_row}>
        <ul>
        <h4>Healthy Living</h4>
        <li>One Item</li>
        <li>Two Item</li>
        <li>Three Item</li>
        <li>Four Item</li>
        <li>Five Item</li>
        </ul>
        <ul>
        <h4>Programs</h4>
        <li>One Item</li>
        <li>Two Item</li>
        <li>Three Item</li>
        <li>Four Item</li>
        <li>Five Item</li>
        </ul>
        <ul>
        <h4>Service</h4>
        <li>One Item</li>
        <li>Two Item</li>
        <li>Three Item</li>
        <li>Four Item</li>
        </ul>

        </div>
        </div>
        <p>Made with <AiOutlineHeart /> V.K Piplodiya</p>
        </section>
    )
}
export default Footer;