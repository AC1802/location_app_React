import React from "react";
import styles from "../../styles/Tag.module.css";

export default function Tag(props) {
  return (
    <div className={styles.pContainer}>
      <p className={styles.p}>{props.tag}</p>
    </div>
  );
}
