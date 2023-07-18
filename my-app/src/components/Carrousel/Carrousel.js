import React, { useState } from "react";
import styles from "../../styles/Carrousel.module.css";

export default function Carrousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const toPrevious = () => {
    const newIndex = currentIndex === 0 ? props.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const toNext = () => {
    const newIndex = currentIndex === props.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.carrouselStyle}>
      <div>
        <div onClick={toPrevious}>
          <svg
            className={styles.leftArrowStyles}
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </div>
        <div onClick={toNext}>
          <svg
            className={styles.rightArrowStyles}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <p className={styles.p}>{currentIndex + 1}/{props.length - 1}</p>
        </div>
      </div>
      <div
        style={{ backgroundImage:`url(${props.pictures[currentIndex]})`}}
        className={styles.pictureStyles}
      ></div>
    </div>
  );
}
