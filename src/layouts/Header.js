import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className="logo_container">
        <img src={Logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.list}>
        <Link to="/" className={styles.list_items}>
          Accueil
        </Link>
        <Link to="/about" className={styles.list_items}>
          A Propos
        </Link>
      </div>
    </nav>
  );
}
