import React from 'react';
import styled from "styled-components";
import { Legend } from '../FilterComponents/Legend';
import { Checkbox, CheckBoxLabel,  LabelContainer} from '../FilterComponents/CheckBox';
import { Fieldset } from '../FilterComponents/Fieldset';

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
            <Checkbox type="checkbox" name="categoryFilterCheckbox" id={entry[0]} value={entry[0]}/>
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

