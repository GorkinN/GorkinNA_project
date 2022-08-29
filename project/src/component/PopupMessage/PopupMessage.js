import styled from "styled-components";
import { getCoords } from "../common/CommonFunctions";
import React from 'react';

const PopupMessageDiv = styled.div`
position:absolute;
top:${props => props.top}px;
left:${props => props.left}px;
z-index:99999;
background-color:#D1D1D1;
border-radius:12px;
max-width:400px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: black;
`;
function createPopupMessage(event, message) {
    let target = event.target;
    let coords = getCoords(target);
    return (
    <PopupMessageDiv top={coords.top + target.heigth} left={coords.left}>
        {message}
    </PopupMessageDiv>
    );
}


