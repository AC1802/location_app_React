import React from "react";
import logo from "../assets/images/white_logo.png";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.white_logo_wrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.footer_text_container}>
        <p className={styles.white_text}>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
