import React from "react";
import Logo from  '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import HeaderCSS from '../styles/Header.module.css';

export default function Header() {
    return (
        <nav className={HeaderCSS.navbar}>
            <div className="logo_container">
                <img src={Logo} alt="logo" className={HeaderCSS.logo}/>
            </div>
            <div className="list">
                <Link to="/" className={HeaderCSS.list_items}>Accueil</Link>
                <Link to="/about" className={HeaderCSS.list_items}>A Propos</Link>
            </div>
        </nav>
    )
}