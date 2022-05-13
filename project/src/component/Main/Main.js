import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import { BestSellingSection } from '../BestSellingSection/BestSellingSection';
import { ProductsSection } from '../ProductsSection/ProductsSection';
import "./main.css";

const Main = () => {
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



            <section className="headline-section _container">
                <div className="headline-section__title-box section-title">
                    <h2 className="caption_h2">Section Headline</h2>
                    <button className="btn-transparent">View more</button>
                </div>
                <div className="section__box">

                    <div className="headline-section__content section__content">
                        <div className="section__content-card">
                            <div className="section__content-card-picture">
                                <img className="section__content-card-picture-img" src="img/product-title.jpg"
                                    alt="product"/></div>
                            <div className="section__content-card-sale">- 36 %</div>
                            <div className="section__content-card-title">Product Title</div>
                            <div className="section__content-card-description">Space for a small product description</div>
                            <div className="section__content-card-price-box">
                                <div className="section__content-card-price">
                                    <span>0.28 USD</span><br/>
                                    <span className="section__content-card-priceoff">48.56</span>
                                </div>
                                <div className="section__content-card-button">
                                    <button className="btn-buy-now">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="headline-section__content section__content">
                        <div className="section__content-card">
                            <div className="section__content-card-picture">
                                <img className="section__content-card-picture-img" src="img/product-title.jpg"
                                    alt="product"/></div>
                            <div className="section__content-card-sale">- 36 %</div>
                            <div className="section__content-card-title">Product Title</div>
                            <div className="section__content-card-description">Space for a small product description</div>
                            <div className="section__content-card-price-box">
                                <div className="section__content-card-price">
                                    <span>0.28 USD</span><br/>
                                    <span className="section__content-card-priceoff">48.56</span>
                                </div>
                                <div className="section__content-card-button">
                                    <button className="btn-buy-now">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="headline-section__content section__content">
                        <div className="section__content-card">
                            <div className="section__content-card-picture">
                                <img className="section__content-card-picture-img" src="img/product-title.jpg"
                                    alt="product"/></div>
                            <div className="section__content-card-sale">- 36 %</div>
                            <div className="section__content-card-title">Product Title</div>
                            <div className="section__content-card-description">Space for a small product description</div>
                            <div className="section__content-card-price-box">
                                <div className="section__content-card-price">
                                    <span>0.28 USD</span><br/>
                                    <span className="section__content-card-priceoff">48.56</span>
                                </div>
                                <div className="section__content-card-button">
                                    <button className="btn-buy-now">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="headline-section__content section__content">
                        <div className="section__content-card">
                            <div className="section__content-card-picture">
                                <img className="section__content-card-picture-img" src="img/product-title.jpg"
                                    alt="product"/></div>
                            <div className="section__content-card-sale">- 36 %</div>
                            <div className="section__content-card-title">Product Title</div>
                            <div className="section__content-card-description">Space for a small product description</div>
                            <div className="section__content-card-price-box">
                                <div className="section__content-card-price">
                                    <span>0.28 USD</span><br/>
                                    <span className="section__content-card-priceoff">48.56</span>
                                </div>
                                <div className="section__content-card-button">
                                    <button className="btn-buy-now">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="blog-section _container">
                <div className="blog-section__title-box section-title">
                    <h2 className="caption_h2">Read our Blog posts</h2>
                    <button className="btn-transparent">Go to Blog</button>
                </div>
                <div className="blog-section__content-box">

                    <div className="blog-article blog-article__big-section">
                        <div className="blog-article__tag">
                            Dinner tips
                        </div>
                        <h1 className="blog-article__big-section-title">
                            <a className="caption_h1" href="#">Our chef tips for a great and tasty dinner ready in 20
                                minutes</a>
                        </h1>
                        <div className="blog-article__big-section-info blog-article__info">
                            <div className="blog-article__avatar">
                                <img src="img/blog-section/blog-article__big-section/avatar.jpg" alt="author-avatar"/>
                            </div>
                            <div className="blog-article__info-text">
                                Author
                            </div>
                            <time dateTime="17-06-2020" className="blog-article__info-text">
                                17. 6. 2020
                            </time>
                        </div>
                    </div>


                    <div className="blog-article blog-article__medium-section">
                        <picture className="blog-article__medium-section-picture">
                            <img src="img/blog-section/blog-article__medium-section/article_medium.jpg"
                                alt="food"/>
                        </picture>
                        <div className="blog-article__medium-section-tag blog-article__tag">
                            Vegetable
                        </div>
                        <h2 className="blog-article__medium-section-caption caption_h2">
                            <a href="#">
                                Which vegetable your family will love and want’s eat each day
                            </a>
                        </h2>
                        <div className="blog-article__info">
                            <div className="blog-article__info-text">
                                Author
                            </div>
                            <time dateTime="15-06-2020" className="blog-article__info-text">
                                15. 6. 2020
                            </time>
                        </div>
                    </div>


                    <div className="blog-article blog-article__small-section">


                        <div className="blog-article__small-section-post">
                            <div className="blog-article__small-section-text">
                                <h3 className="blog-article__small-section-caption">
                                    <a className="caption_h3" href="#">
                                        Salat is kinda good start to your morning routines
                                    </a>
                                </h3>
                                <div className="blog-article__small-section-info blog-article__info">
                                    <div className="blog-article__info-text">
                                        Author
                                    </div>
                                    <time dateTime="14-01-2020" className="blog-article__info-text">
                                        14. 1. 2020
                                    </time>
                                </div>
                            </div>
                            <picture className="blog-article__small-section-picture">
                                <img src="img/blog-section/blog-article__small-section/article__small_1.jpg"
                                    alt="food"/>
                            </picture>
                        </div>


                        <div className="blog-article__small-section-post">
                            <div className="blog-article__small-section-text">
                                <h3 className="blog-article__small-section-caption caption_h3">
                                    <a className="caption_h3" href="#">
                                        Our chef tips for a great and healthy breakfast
                                    </a>
                                </h3>
                                <div className="blog-article__small-section-info blog-article__info">
                                    <div className="blog-article__info-text">
                                        Author
                                    </div>
                                    <time dateTime="14-01-2020" className="blog-article__info-text">
                                        14. 1. 2020
                                    </time>
                                </div>
                            </div>
                            <picture className="blog-article__small-section-picture">
                                <img src="img/blog-section/blog-article__small-section/article__small_2.jpg"
                                    alt="food"/>
                            </picture>
                        </div>


                        <div className="blog-article__small-section-post">
                            <div className="blog-article__small-section-text">
                                <h3 className="blog-article__small-section-caption caption_h3">
                                    <a className="caption_h3" href="#">Prepare a simple and delicious breads
                                    </a>
                                </h3>
                                <div className="blog-article__small-section-info blog-article__info">
                                    <div className="blog-article__info-text">
                                        Author
                                    </div>
                                    <time dateTime="14-01-2020" className="blog-article__info-text">
                                        14. 1. 2020
                                    </time>
                                </div>
                            </div>
                            <picture className="blog-article__small-section-picture">
                                <img src="img/blog-section/blog-article__small-section/article__small_3.jpg"
                                    alt="food"/>
                            </picture>
                        </div>

                    </div>



                </div>

            </section>

        </main>
    );
}

export default Main;
