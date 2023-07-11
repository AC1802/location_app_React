import React from "react";
import styles from "../../styles/Card.module.css";

export default function Card() {
    return (
        <article className={styles.article}>
            <img src="" alt="logement" className={styles.img}/>
            <p className={styles.p}>Titre de la location</p>
        </article>
    )
}