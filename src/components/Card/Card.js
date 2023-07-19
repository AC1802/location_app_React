import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Card.module.css";

export default function Card({ title, cover }) {
  return (
    <article
      className={styles.article}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%), url(${cover})`,
      }}
    >
      <p className={styles.p}>{title}</p>
    </article>
  );
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
