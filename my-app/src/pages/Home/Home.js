import React from "react";
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../styles/styles.css';
import BackgroundImage from '../../assets/images/banner.png'
import Locations from '../../back/logements.json'

let bannerTitle = "Chez vous, partout et ailleurs";

export default function Home() {
    return (
        <div className="main-container">
            <Banner title={bannerTitle} backgroundImage={BackgroundImage}/>
            <div className="card-container">
                {
                    Locations.map( location => {
                        return(
                            <Link to="">
                                <Card id={location.id} cover={location.cover} title={location.title} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}