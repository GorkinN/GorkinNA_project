import React from 'react';
import styled from "styled-components";
import blackArrow from "../../img/buttons/arrow-black.svg";

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
`;

const Button = ({children}) => {
    return (
        <StyledButton>
            {children}         
        </StyledButton>
    );
}

export default Button;
