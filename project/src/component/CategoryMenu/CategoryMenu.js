import React, {useState} from 'react';
import StyledAnchor from "../Hlink/Hlink";
import Heading from '../Text/Headings/Heading';
import "./CategoryMenu.css";
import {Button} from '../Button/Button.js';
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
let ButtonContainer = styled.div`
    margin-top:auto;
`;
const CategoryMenu = ({categoriesMenuArray}) => {
    let [visibleCount, setVisibleCount] = useState(5);
    let [buttonText, buttonTextChange] = useState('More');
    function setShownCategories() {
        (visibleCount===5)?setVisibleCount(categoriesMenuArray.length):setVisibleCount(5);
        (buttonText==="More")?buttonTextChange("Less") :buttonTextChange("More");    
    };  
    function makeCategoriesList(itemsArray, quantity) {
        let categoriesList = [];
        for (let i=0; i<quantity; i++) {
            categoriesList.push(
                <li key={itemsArray[i]} className="category-menu-list-item">
                    <StyledAnchor underline href={"#"}>
                        {itemsArray[i]}
                    </StyledAnchor>
                </li>
            );
        }
        return categoriesList;        
    };
                 
    return (
        <div className="category-menu">
            <MenuCaption>
                <Heading headingTagUPPERCASE={"H2"}>
                   Category menu
                </Heading>
            </MenuCaption>
            
            <MenuList>
                {makeCategoriesList(categoriesMenuArray, visibleCount)}
            </MenuList>
            
            <ButtonContainer>
                <Button data-button-name="categories" onClick={setShownCategories}>
                    {buttonText} categories
                </Button>
            </ButtonContainer>
        </div>
    );
}
export default CategoryMenu;