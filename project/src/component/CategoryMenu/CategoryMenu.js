import React, {useState} from 'react';
import Hlink from "../Hlink/Hlink";
import Heading from '../Text/Headings/Heading';
import "./CategoryMenu.css";

const CategoryMenu = ({categoriesMenuArray}) => {
    let [visibleCount, setVisibleCount] = useState(5);
            
    return (
        <div className="section__menu">
            <Heading headingTagUPPERCASE="H2" value="Category menu" className="section__menu-caption"></Heading>
            <h2 className="section__menu-caption caption_h2">Category menu</h2>
            <ul className="section__menu-list">
                <li className="section__menu-list-item"><a href="#">Bakery</a></li>
                <li className="section__menu-list-item"><a href="#">Fruit and vegetables</a></li>
                <li className="section__menu-list-item"><a href="#">Meat and fish</a></li>
                <li className="section__menu-list-item"><a href="#">Drinks</a></li>
                <li className="section__menu-list-item"><a href="#">Kitchen</a></li>
                <li className="section__menu-list-item hidden"><a href="#">Special nutrition</a></li>
                <li className="section__menu-list-item hidden"><a href="#">Baby</a></li>
                <li className="section__menu-list-item hidden"><a href="#">Pharmacy</a></li>
            </ul>
            <button className="section__menu-button btn btn-label" data-button-name="categories">More
                categories</button>
        </div>
    );
}

export default CategoryMenu;
