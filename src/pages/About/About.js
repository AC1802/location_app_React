import React from "react";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import "../../styles/styles.css";
import backroundImage from "../../assets/images/aboutBanner.png";

const reliabilityText =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const respectText =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const serviceText =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const securityText =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

const dropdownContent = [
  {
    title: "Fiabilité",
    text: reliabilityText,
  },
  {
    title: "Respect",
    text: respectText,
  },
  {
    title: "Service",
    text: serviceText,
  },
  {
    title: "Sécurité",
    text: securityText,
  },
];

export default function About() {
  return (
    <div className="mainContainer">
      <Banner backgroundImage={backroundImage} />
      <div className="dropdown-list">
        {dropdownContent.map((content, index) => {
          return <Dropdown key={index} title={content.title} text={content.text} />;
        })}
      </div>
    </div>
  );
}
