import React from 'react';
import Href from "../Hlink/Hlink";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer _container">
            <div className="footer__links">
                <div className="footer__get-in-touch">
                    <h2 className="footer__links-caption caption_h2">Get in touch</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><Href href="#">About Us</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Careers</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Press Releases</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Blog</Href></li>
                    </ul>
                </div>
                <div className="footer__connections">
                    <h2 className="footer__links-caption caption_h2">Connections</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><Href href="#">Facebook</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Twitter</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Instagram</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Youtube</Href></li>
                        <li className="footer__links-list-item"><Href href="#">LinkedIn</Href></li>
                    </ul>
                </div>
                <div className="footer__earnings">
                    <h2 className="footer__links-caption caption_h2">Earnings</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><Href href="#">Become an Affiliate</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Advertise your product</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Sell on Market</Href></li>
                    </ul>
                </div>
                <div className="footer__account">
                    <h2 className="footer__links-caption caption_h2">Account</h2>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><Href href="#">Your account</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Returns Centre</Href></li>
                        <li className="footer__links-list-item"><Href href="#">100% purchase protection</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Chat with us</Href></li>
                        <li className="footer__links-list-item"><Href href="#">Help</Href></li>
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

        </footer>
    );
}

export default Footer;
