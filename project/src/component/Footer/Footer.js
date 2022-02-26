import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer _container">
            <div className="footer__links">
                <div className="footer__get-in-touch">
                    <h2 className="footer__links-caption caption_h2">Get in touch</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><a href="#">About Us</a></li>
                        <li className="footer__links-list-item"><a href="#">Careers</a></li>
                        <li className="footer__links-list-item"><a href="#">Press Releases</a></li>
                        <li className="footer__links-list-item"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer__connections">
                    <h2 className="footer__links-caption caption_h2">Connections</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><a href="#">Facebook</a></li>
                        <li className="footer__links-list-item"><a href="#">Twitter</a></li>
                        <li className="footer__links-list-item"><a href="#">Instagram</a></li>
                        <li className="footer__links-list-item"><a href="#">Youtube</a></li>
                        <li className="footer__links-list-item"><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer__earnings">
                    <h2 className="footer__links-caption caption_h2">Earnings</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><a href="#">Become an Affiliate</a></li>
                        <li className="footer__links-list-item"><a href="#">Advertise your product</a></li>
                        <li className="footer__links-list-item"><a href="#">Sell on Market</a></li>
                    </ul>
                </div>
                <div className="footer__account">
                    <h2 className="footer__links-caption caption_h2">Account</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><a href="#">Your account</a></li>
                        <li className="footer__links-list-item"><a href="#">Returns Centre</a></li>
                        <li className="footer__links-list-item"><a href="#">100 % purchase protection</a></li>
                        <li className="footer__links-list-item"><a href="#">Chat with us</a></li>
                        <li className="footer__links-list-item"><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__product-tags">
                <h2 className="footer__product-tags-caption caption_h2">Product tags</h2>
                <ul className="footer__product-tags-list product-tags-list">
                    <li className="product-tags-list__item">Beans</li>
                    <li className="product-tags-list__item">Carrots</li>
                    <li className="product-tags-list__item">Apples</li>
                    <li className="product-tags-list__item">Garlic</li>
                    <li className="product-tags-list__item">Mushrooms</li>
                    <li className="product-tags-list__item">Tomatoes</li>
                    <li className="product-tags-list__item">Chilli peppers</li>
                    <li className="product-tags-list__item">Broccoli</li>
                    <li className="product-tags-list__item">Watermelons</li>
                    <li className="product-tags-list__item">Oranges</li>
                    <li className="product-tags-list__item">Bananas</li>
                    <li className="product-tags-list__item">Grapes</li>
                    <li className="product-tags-list__item">Cherries</li>
                    <li className="product-tags-list__item">Meat</li>
                    <li className="product-tags-list__item">Seo tag</li>
                    <li className="product-tags-list__item">Fish</li>
                    <li className="product-tags-list__item">Seo tag</li>
                    <li className="product-tags-list__item">Fresh food</li>
                    <li className="product-tags-list__item">Lemons</li>
                </ul>

            </div>
            <div className="footer__copyright">Copyright © 2020 petrbilek.com</div>

        </footer>
    );
}

export default Footer;
