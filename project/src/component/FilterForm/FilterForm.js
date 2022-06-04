import React from 'react';
import styled from "styled-components";

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
export const FilterForm = ({children}) => {
    return (
        <FilterFormStyled>
            {children}
            <InputButtonGreen type="submit" name="applyFilter" value="Apply"></InputButtonGreen>
        </FilterFormStyled>
    );
}

