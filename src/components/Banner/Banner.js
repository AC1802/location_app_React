import React from "react";
import styles from "../../styles/Banner.module.css";

export default function Banner(props) {
  return (
    <div
      className={styles.img_container}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <p className={styles.p}>{props.title}</p>
    </div>
  );
}
