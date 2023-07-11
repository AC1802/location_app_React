import React from "react";
import Logo from  '../assets/images/logo.png';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <div className="logo_container">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="list">
                <Link to="/" className="list__items">Accueil</Link>
                <Link to="/about" className="list__items">A Propos</Link>
            </div>
        </nav>
    )
}