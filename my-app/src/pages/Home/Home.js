import React from "react";
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../styles/styles.css';
import BackgroundImage from '../../assets/images/banner.png'

let bannerTitle = "Chez vous, partout et ailleurs";

export default function Home() {
    return (
        <div className="main-container">
            <Banner title={bannerTitle} backgroundImage={BackgroundImage}/>
            <div className="card-container">
                <Card />
            </div>
        </div>
    )
}