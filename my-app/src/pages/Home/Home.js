import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Card from "../../components/Card/Card";
import '../../styles/styles.css';


export default function Home() {
    return (
        <div>
            <Header />
            <h1>Homepage</h1>
            <Card />
            <Footer />
        </div>
    )
}