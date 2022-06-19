import React from 'react';
import styled from "styled-components";
import { CategoryFilter } from '../CategoryFilter/CategoryFilter';
import { RatingFilter } from '../RatingFilter/RatingFilter';
import { PriceFilter } from '../PriceFilter/PriceFilter';

const FilterFormStyled = styled.form`
display:flex;
flex-direction:column;
justufy-content:flex-start;
align-items:flex-start;
`;
const InputButtonGreen = styled.input`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 0.93rem;
line-height: 22px;

position: relative;
box-sizing: border-box;
border-radius: 12px;
background-color: #F5F5F5;
    &:hover {
        filter: brightness(90%);
        transition: 0.1s ease-in-out;
    }
    color:white;
    border: 2px solid #46760A;
    padding:12.5px 16px;
    background:${props => props.theme.secondaryColor};
    
    &:active {
        filter:saturate(180%);
    }
`;
const InputButtonGray = styled(InputButtonGreen)`
background:none;
color:#A9A9A9;
border-color:#A9A9A9;
&:hover {
    filter: brightness(80%);
    transition: 0.1s ease-in-out;
}
&:active {
    filter:saturate(180%);
}
`;
const ButtonBox = styled.div`
display:flex;
justify-content:space-evenly;
width:100%;
margin-top:30px;
@media(max-width:${props => props.theme.laptop}) {
    width:30%;
    margin-top:15px;
}
@media(max-width:${props => props.theme.smallPhone}) {
    width:100%;
}
`;

export const FilterForm = ({filtersInfo, productsGeneralObj}) => {
    let collectFilterData = (inputName) => {
        let selectedCheckboxes = document.querySelectorAll(`input[name='${inputName}']`);
        let conditionsArr =[];
        for (let item of selectedCheckboxes) {
            if (item.checked==true) {conditionsArr.push(item.value)}            
        }
        console.log(`conditionsArr ${inputName}`, conditionsArr);
        return conditionsArr;
    };
    

    function onSubmitFilter(e){
        e.preventDefault();
        console.log("event prevented");
        collectFilterData(`categoryFilterCheckbox`);
        collectFilterData(`ratingCheckBox`);
    };
    return (
        <FilterFormStyled onSubmit={ (e) => (onSubmitFilter(e))}>
            <CategoryFilter categoriesMap={filtersInfo.categoriesMap}/>
            <RatingFilter/>
            <PriceFilter/>

            <ButtonBox>
                <InputButtonGreen 
                type="submit" 
                name="applyFilter" 
                value="Apply" 
                id="applyFilter" 
                 />
                
                <InputButtonGray 
                type="reset" 
                name="resetFilter" 
                value="Reset"/>
            </ButtonBox>
            
        </FilterFormStyled>
    );
}

