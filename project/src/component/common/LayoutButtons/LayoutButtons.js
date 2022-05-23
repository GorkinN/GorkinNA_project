import styled from "styled-components";
import React from 'react';
import gridIcon from "./gridLayoutIcon.svg";
import listIcon from "./listLayoutIcon.svg";
import { Container } from "../Container";
 const LayoutButtonsStyled = styled(Container)`
 display:flex;
 justify-content:flex-end;
`;

const LayoutChangeButtonStyled = styled.button`
position:relative;
border:none;
background:none;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color:${props => props.isGrid? "#151515":"#A9A9A9"};
margin-right:32px;
padding:5px;
:nth-last-child(1) {
    margin-right:0;
}
:before {
    position:absolute;
    content:"";
    top:10%;
    left:-16px;
    display:block;
    width:16px;
    height:16px;
    background-image:url(${props => props.url});
    background-size: contain;
    border-radius:3px;
    box-shadow:${props => props.isGrid ? ` 0 0 3px 1px #6A983C` : "none"};
}
`;

export const LayoutButtons = ({isGrid=true, onClick}) => {
            
    return (
        <LayoutButtonsStyled onClick={onClick}>
            <LayoutChangeButtonStyled isGrid={isGrid} url={gridIcon} data-layout="grid">Grid</LayoutChangeButtonStyled>
            <LayoutChangeButtonStyled isGrid={!isGrid} url={listIcon} data-layout="list">List</LayoutChangeButtonStyled>
        </LayoutButtonsStyled>
    );
}


