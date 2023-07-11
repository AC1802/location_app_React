import React from "react";
import CardCSS from "../../styles/Card.module.css";

export default function Card() {
    return (
        <article className={CardCSS.article}>
            <img src="" alt="logement" className={CardCSS.img}/>
            <p className={CardCSS.p}>Titre de la location</p>
        </article>
    )
}