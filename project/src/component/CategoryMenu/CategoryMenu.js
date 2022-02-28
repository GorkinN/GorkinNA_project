import React, {useState} from 'react';
import Hlink from "../Hlink/Hlink";
import Heading from '../Text/Headings/Heading';
import "./CategoryMenu.css";

const CategoryMenu = ({categoriesMenuArray}) => {
    let [visibleCount, setVisibleCount] = useState(5);
    let categoryList = categoriesMenuArray.map(item =>(
        <li className="category-menu-list-item">
            <Hlink refURL={"#"}>
                {item}
            </Hlink>
        </li>));
            
    return (
        <div className="category-menu">
            <Heading headingTagUPPERCASE="H2" className="category-menu-caption">
                Category menu
            </Heading>
            <ul className="category-menu-list">
                {categoryList}
            </ul>
            <button className="category-menu-button btn btn-label" data-button-name="categories">
                More categories
            </button>
        </div>
    );
}

export default CategoryMenu;
