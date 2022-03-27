import React, {useState} from 'react';
import StyledAnchor from "../Hlink/Hlink";
import Heading from '../Text/Headings/Heading';
import "./CategoryMenu.css";
import Button from '../Button/Button.js';
import styled from "styled-components";

let MenuCaption = styled.div`
    padding-bottom: 16px;
`;
let MenuList= styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: auto;
`;



const CategoryMenu = ({categoriesMenuArray}) => {
    let [visibleCount, setVisibleCount] = useState(5);
    let categoryList = categoriesMenuArray.map(item =>(
        <li className="category-menu-list-item">
            <StyledAnchor underline href={"#"}>
                {item}
            </StyledAnchor>
        </li>));
            
    return (
        <div className="category-menu">
            <MenuCaption>
                <Heading headingTagUPPERCASE="H2">
                   Category menu
                </Heading>
            </MenuCaption>
            
            <MenuList>
                {categoryList}
            </MenuList>
            
            <Button data-button-name="categories">
                More categories
            </Button>
        </div>
    );
}

export default CategoryMenu;
