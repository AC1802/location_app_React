import React from "react";
import styles from "../../styles/Card.module.css";

export default function Card(props) {
  return (
    <article
      key={props.id}
      className={styles.article}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%), url(${props.cover})`,
      }}
    >
      <p className={styles.p}>{props.title}</p>
    </article>
  );
}
