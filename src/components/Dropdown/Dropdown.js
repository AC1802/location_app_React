import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Dropdown.module.css";

export default function Dropdown({ title, text }) {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className={styles.dropdownContainer}>
      <div 
        className={styles.divTitle}
        onClick={() => setIsToggle((currentToggle) => !currentToggle)}
      >
        <div>
          <p className={styles.title}>{title}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`${styles.svg} ${isToggle ? styles.active : ""}`}
          />
        </div>
      </div>
      {isToggle && (
        <div className={styles.pContainer}>
          <p className={styles.p}>{text}</p>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}