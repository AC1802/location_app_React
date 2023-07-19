import React from "react";
import Logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className="logo_container">
        <Link to="/">
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.list_items} ${isActive ? styles.active : ""}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.list_items} ${isActive ? styles.active : ""}`
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}
