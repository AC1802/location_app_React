import React from "react";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import "../../styles/styles.css";
import BackroundImage from "../../assets/images/aboutBanner.png";

const bannerTitle = "";
const reliabilityText =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const respectText =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const serviceText =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const securityText =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

export default function About() {
  return (
    <div className="mainContainer">
      <Banner title={bannerTitle} backgroundImage={BackroundImage} />
      <Dropdown title="Fiabilité" text={reliabilityText} />
      <Dropdown title="Respect" text={respectText} />
      <Dropdown title="Service" text={serviceText} />
      <Dropdown title="Sécurité" text={securityText} />
    </div>
  );
}
