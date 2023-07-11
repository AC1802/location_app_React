import React from "react";
import BannerCSS from '../../styles/Banner.module.css';

export default function Banner() {
    return (
        <div className={BannerCSS.img_container}>
            <p className={BannerCSS.p}>Chez vous, partout et ailleurs</p>
        </div>
) 
}