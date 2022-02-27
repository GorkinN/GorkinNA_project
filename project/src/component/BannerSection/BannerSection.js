import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import "./BannerSection.css";


const BannerSection = ({categories}) => {
    return (
        <section className="banner-section _container">
                <div className="banner-section__box">
                    <div className="banner-section__menu section__menu">
                        <CategoryMenu categoriesMenuArray={categories}></CategoryMenu>
                    </div>


                    <div className="banner-section__banner">
                        <div className="banner-section__banner-subfocus">Banner subfocus</div>
                        <div className="banner-section__banner-heading">Space for heading</div>
                        <button className="banner-section__banner-button btn-label-green btn-banner">Read recepies</button>
                    </div>


                    <div className="banner-section__banner">
                        <div className="banner-section__banner-subfocus">Banner subfocus</div>
                        <div className="banner-section__banner-heading">Space for heading</div>
                        <button className="banner-section__banner-button btn-label-green btn-banner">Read recepies</button>
                    </div>


                </div>
            </section>
    );
}

export default BannerSection;
