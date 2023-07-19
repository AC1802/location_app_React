import React from "react";
import styles from "../../styles/Banner.module.css";

export default function Banner(props) {
  return (
    <div
      className={`${styles.img_container} ${props.className}`}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <p className={styles.p}>{props.title}</p>
    </div>
  );
}
