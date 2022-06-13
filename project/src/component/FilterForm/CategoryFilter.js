import React from 'react';
import styled from "styled-components";
import { Legend } from './Legend';
const Fieldset = styled.fieldset`
display:flex;
flex-direction:column;
width:100%;
`;
const CheckBoxLabel = styled.label`
position:relative;
font-family: 'Open Sans';
font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 19px;
color: #151515;
cursor:pointer;
flex-grow:1;
border-radius:12px;
padding:2px 5px;
margin-right:5px;
:before {
    content:"";
    position:absolute;
    top:50%;
    left:-10px;
    transform:translate(-50%, -50%);
    width:15px;
    height:15px;
    border-radius:5px;
    border: 2px solid #6A983C;
    transition: 0.3s ease-in-out;
}

:after {
    content:"";
    position:absolute;
    top:50%;
    left:-10px;
    transform:translate(-50%, -50%);
    width:10px;
    height:10px;
    transition: 0.3s ease-in-out;
}
`;
const Checkbox=styled.input`
display:none;
:checked ~ label:after {
    width:5px;
    transform:rotate(220deg) translate(110%, 30%);
    border-top: 3px solid white;
    border-left:3px solid white;
    transition: 0.3s ease-in-out;
}
:checked ~ label:before {
    background-color:#6A983C;
}
`;
const LabelContainer = styled.div`
display:flex;
justify-content:space-between;
margin:5px 0;
`;
const QuantityTag = styled.div`
border-radius:12px;
padding:2px 10px;
margin-right:20px;
background-color:#F4F8EC;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height:20px;
color: #6A983C;
text-align:center;
vertical-align:baseline;
`;
export const CategoryFilter = ({categoriesMap}) => {
   let categoriesFilterArr = [];

   for (let entry of categoriesMap.entries()) {
    categoriesFilterArr.push(
        <LabelContainer key={entry[0]}>
            <Checkbox type="checkbox" id={entry[0]}/>
            <CheckBoxLabel for={entry[0]}>{entry[0]}</CheckBoxLabel>
            <QuantityTag>{entry[1]}</QuantityTag>
        </LabelContainer>
    );

   }   
    return (
        <Fieldset>
            <Legend>Categories</Legend>
            {categoriesFilterArr}
        </Fieldset>
    );
}

