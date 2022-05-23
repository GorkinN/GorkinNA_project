import React from 'react';
import {useState} from 'react';
import BannerSection from '../BannerSection/BannerSection';
import { BestSellingSection } from '../BestSellingSection/BestSellingSection';
import { ProductsSection } from '../ProductsSection/ProductsSection';
import { LayoutButtons } from '../common/LayoutButtons/LayoutButtons';
import "./main.css";

const Main = () => {
    let [isGridLayout, setLayout] = useState(true);
    function layoutControl(e){
        if (e.target.dataset.layout==="grid" && !isGridLayout) {setLayout(true)} 
        else if (e.target.dataset.layout==="list" && isGridLayout) {setLayout(false)}           
    }
    
    let categories = [
        "Bakery",
        "Fruit and vegetables",
        "Meat and fish",
        "Drinks",
        "Kitchen",
        "Special nutrition",
        "Baby", 
        "Pharmacy"
    ];
    let products =[
        'Kitchen',
        'Meat and fish',
        'Special nutrition',
        'Pharmacy',
        'Baby',
        'Special nutrition',
        'Baby',
        'Pharmacy'
    ];
    return (
        <main className="main">
            <LayoutButtons isGrid={isGridLayout} onClick={(event)=>(layoutControl(event))}/>
            <BannerSection categories={categories}/>      
            <BestSellingSection productsList={products}></BestSellingSection>  
            <ProductsSection productsList={products}></ProductsSection>

            <section className="customers-reviews">
                <div className="customers-reviews__box">

                    <div className="customers-reviews__title-box section-title _container">
                        <h2 className="caption_h2">Our customers says</h2>
                        <button className="btn-transparent">View more</button>
                    </div>



                    <div className="customers-reviews__content-box">
                        <button className="customers-reviews__switcher customers-reviews__switcher_left">
                            <img src="img/buttons/review-switcher-button.png" height="52" width="34" alt="switch"/>
                        </button>
                        <div className="customers-reviews__card-box">



                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" height="49" width="48" alt="avatar"/>
                                </picture>
                            </div>


                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" height="49" width="48" alt="avatar"/>
                                </picture>
                            </div>


                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" alt="avatar"/>
                                </picture>
                            </div>


                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" height="49" width="48" />
                                </picture>
                            </div>



                        </div>
                        <button className="customers-reviews__switcher customers-reviews__switcher_right">
                            <img src="img/buttons/review-switcher-button.png" height="52" width="34" alt="switcher"/>
                        </button>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Main;
