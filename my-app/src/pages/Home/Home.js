import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from '../../components/Card/Card';
import '../../styles/styles.css';


export default function Home() {
    return (
        <div className="main_container">
            <Banner />
            <div className="card_container">
                <Card />
            </div>
        </div>
    )
}