import React from "react";
import styles from '../../styles/Card.module.css';

export default function Card(props) {
    return (
        <article key={props.id} className={styles.article}>
            <img src={props.cover} alt="logement" className={styles.img}/>
            <p className={styles.p}>{props.title}</p>
        </article>
    )
}