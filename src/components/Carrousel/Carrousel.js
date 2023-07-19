import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Carrousel.module.css";
import Left from "../../assets/images/leftArrow.png";
import Right from "../../assets/images/rightArrow.png";

export default function Carrousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMoreThanOne, setHasMoreThanOne] = useState (false);

  useEffect(() => {
    if (props.images.length > 1) {
      setHasMoreThanOne(true)
    } 
  })

  console.log(currentIndex);
  const toPrevious = () => {
    const newIndex = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const toNext = () => {
    const newIndex = currentIndex === props.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.carrouselStyle}>
      <div>
        <div onClick={toPrevious} className={`${hasMoreThanOne ? "" : styles.hide}`}>
          <img src={Left} alt="précédent" className={styles.leftArrowStyles}/>
        </div>
        <div onClick={toNext} className={`${hasMoreThanOne ? "" : styles.hide}`}>
          <img src={Right} alt="suivant" className={styles.rightArrowStyles} />
        </div>
        <div>
          <p className={styles.p}>{currentIndex + 1}/{props.images.length}</p>
        </div>
      </div>
      <div
        style={{ backgroundImage:`url(${props.images[currentIndex]})`}}
        className={styles.pictureStyles}
      ></div>
    </div>
  );
}

Carrousel.propTypes = {
  images: PropTypes.array.isRequired
}
