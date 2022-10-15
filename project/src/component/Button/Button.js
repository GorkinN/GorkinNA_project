import React from 'react';
import styled from "styled-components";
import blackArrow from "./img/arrow-black.svg";
import greenArrow from "./img/arrow-green.svg";

const StyledButton = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 0.93rem;
line-height: 22px;

position: relative;
box-sizing: border-box;
border-radius: 12px;
border: none;
padding:12.5px 38px 12.5px 16px;
background-color: #F5F5F5;
    &:after {
        position: absolute;
        content: "";
        top: 35%;
        right: 10%;
        width: 16px;
        height: 16px;
        background: url("${blackArrow}") no-repeat;
    }
    &:hover {
        filter: brightness(90%);
        transition: 0.1s ease-in-out;
    }
    &:disabled {
        background:gray;
        background-shadow:none;
        border-color:gray;
    }
    &:hover:disabled {
        filter: brightness(100%);
    }
    &:active:disabled {
        filter:saturate(100%);
    }
`;
const TransparentButtonStyled=styled(StyledButton)`
    border: 2px solid #92C064;
    background:none;
        &:after {
            background: url("${greenArrow}") no-repeat;
        }
`;
export const GreenButtonStyled=styled(StyledButton)`
    color:white;
    border: 2px solid #46760A;
    padding:6.5px 12px;
    background:${props => props.theme.secondaryColor};
    &:after {
        background-image:none;
    }
    &:active {
        filter:saturate(180%);
    }

`;
export const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}         
        </StyledButton>
    );
}

export const TransparentButton = ({children, onClick}) => {
    return (
        <TransparentButtonStyled onClick={onClick}>
            {children} 
        </TransparentButtonStyled>
    );
}

export const GreenButton = ({children, name, productid, onClick})=>{
    return (
        <GreenButtonStyled name={name} data-productid={+productid} onClick={onClick}>
            {children}
        </GreenButtonStyled>
    );
}
