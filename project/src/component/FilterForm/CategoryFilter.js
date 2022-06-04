import React from 'react';
import styled from "styled-components";
import { Legend } from './Legend';
const Fieldset = styled.fieldset`
display:flex;
flex-direction:column;`;

const CheckBoxLabel = styled.label`

`;

export const CategoryFilter = ({categoriesMap, legend}) => {
    for (let i=0; i<categoriesMap.size; i++) {
        
    }    
    return (
        <Fieldset>
            <Legend>Categories</Legend>
                                    
        </Fieldset>
    );
}

