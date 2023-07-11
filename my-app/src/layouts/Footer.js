import React from "react";
import logo from '../assets/images/white_logo.png';
import FooterCSS from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={FooterCSS.footer}>
            <div className="white_logo_wrapper">
                <img src={logo} alt="logo" className={FooterCSS.logo}/>
            </div>
            <div className="footer_text_container">
                <p className={FooterCSS.white_text}>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}