import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import styles from "../../styles/HousingSheet.module.css";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import "../../styles/styles.css";

export default function HousingSheet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`../logements.json`)
      .then((response) => response.json())
      .then((locationData) => {
        setLocationData(locationData);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const currentLocation = locationData.find((location) => location.id === id);

  if (isLoading === false && !currentLocation) {
    navigate("/not-found");
  }

  return (
    <div className="mainContainer">
      <div className={styles.carrouselContainer}>
        {currentLocation && <Carrousel images={currentLocation?.pictures} />}
      </div>
      <div className={styles.mainContainerInner}>
        <div>
          <h1 className={styles.h1}>{currentLocation?.title}</h1>
          <h2 className={styles.h2}>{currentLocation?.location}</h2>
          <div className={styles.tagContainer}>
            {currentLocation?.tags.map((tag, index) => {
              return <Tag key={index} tag={tag} />;
            })}
          </div>
        </div>
        <div className={styles.hostRatingContainer}>
          <div className={styles.hostContainer}>
            <p className={styles.hostName}>{currentLocation?.host?.name}</p>
            <div className={styles.hostPictureContainer}>
              <img
                className={styles.hostPicture}
                src={currentLocation?.host?.picture}
                alt="host profile"
              />
            </div>
          </div>
          <div>
            <Rating note={currentLocation?.rating} />
          </div>
        </div>
      </div>
      <div className={styles.dropdownContainer}>
        <Dropdown title="Description" text={currentLocation?.description} />
        <Dropdown
          title="Équipements"
          text={currentLocation?.equipments.map((equipment, index) => {
            return (
              <p className={styles.p} key={index}>
                {equipment} {"\n"}
              </p>
            );
          })}
        />
      </div>
    </div>
  );
}
