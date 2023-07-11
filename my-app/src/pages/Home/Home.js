import React from "react";
import Header from '../../layouts/Header';
import Banner from "../../components/Banner/Banner";
import Footer from '../../layouts/Footer';
import Card from '../../components/Card/Card';
import '../../styles/styles.css';


export default function Home() {
    return (
        <>
            <div className="main_container">
                <Header />
                <Banner />
                <div className="card_container">
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}