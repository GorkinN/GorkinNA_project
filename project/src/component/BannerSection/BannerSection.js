import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import "./BannerSection.css";
import {Banner} from "../Banner/Banner.js";


const BannerSection = ({categories}) => {
    return (
        <section className="banner-section _container">
                <div className="banner-section__box">
                    <div className="banner-section__menu section__menu">
                        <CategoryMenu categoriesMenuArray={categories}></CategoryMenu>
                    </div>
                   <Banner subfocusText={"hello"} headingText={"azaza"}/>
                   <Banner subfocusText={"hello"} headingText={"azaza"}/>
                </div>
            </section>
    );
}

export default BannerSection;
