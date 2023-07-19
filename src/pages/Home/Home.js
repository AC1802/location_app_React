import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "../../styles/styles.css";
import BackgroundImage from "../../assets/images/banner.png";

export default function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetch(`./logements.json`)
      .then((response) => response.json())
      .then((locationData) => setLocationData(locationData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mainContainer">
      <Banner className="homeBanner" title={bannerTitle} backgroundImage={BackgroundImage} />
      <div className="cardContainer">
        <ul className="cardContainer_ul">
          {locationData.map((location) => {
            return (
              <li key={location.id}>
                <Link to={{pathname: "/housing/" + location.id}}>
                  <Card
                    cover={location.cover}
                    title={location.title}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
