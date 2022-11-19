import React, {useState} from 'react';
import styled from "styled-components";
import Heading from "../Text/Headings/Heading";
import closeIcon from "./closeIcon.png";

const ModalBackground = styled.div`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%, -50%);
z-index:9999;
width:100%;
height:100%;
background-color:rgba(80, 80, 80, 0.5);
`;
const ModalSection = styled.section`
position:fixed;
top:${props => props.top? props.top : 50}%;
left:${props => props.left? props.left : 50}%;
transform:translate(-50%, 0);
z-index:9998;
display:flex;
flex-direction:column;
padding:20px;
background:white;
border: 1px solid #D1D1D1;
border-radius:12px;
min-width:600px;
@media (max-width:${props =>props.theme.phone}) {
    min-width:0;
    width:380px;
}
@media (max-width:${props =>props.theme.smallPhone}) {
    min-width:0;
    width:280px;
}
max-height:${props => props.top? (90 - props.top) : 50}%;
overflow-y: scroll;
overflow:auto;
scrollbar-width: thin;
scrollbar-color: ${props=> props.theme.secondaryColor} #D1D1D1;
::-webkit-scrollbar {
    width:10px;
    background: #D1D1D1;
    border-radius:12px;
}
scrollbar {
    width:10px;
    background: #D1D1D1;
    border-radius:12px;
}
::-webkit-scrollbar-thumb {
    background-color: ${props=> props.theme.secondaryColor}; 
    border-radius: 20px; 
    border: 2px solid #D1D1D1; 
}
scrollbar-thumb {
    background-color: ${props=> props.theme.secondaryColor}; 
    border-radius: 20px; 
    border: 2px solid #D1D1D1; 
}
`;
const HeaderBox = styled.header`
display:flex;
justify-content:space-between;
`;
const CloseButton = styled.button`
position:relative;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #D1D1D1;
background:none;
border:none;
padding-right:24px;
border-radius:8px;
transition: 0.1s ease-in;
:after {
    position:absolute;
    content:"";
    top:10%;
    right:0px;
    width:24px;
    height:24px;
    background-image:url('${closeIcon}');
}
:hover {
    color:black;
    box-shadow:0 0 8px 0 #D1D1D1;
    font-weight: 600;
}
:active {
    background-color:#D1D1D1;
}
`;

export const ModalWrapper = ({children, title, customOnCloseModal, top, left}) => {
    let [isVisible, setVisibility] = useState(true);
    function hideModal (e) {
        if (e.target.dataset.isvisible==="closeModal") {
            setVisibility(false);
        // eslint-disable-next-line
            if (customOnCloseModal != undefined) {customOnCloseModal()}
        }
    }

    return (
        isVisible? (
        <ModalBackground data-isvisible="closeModal" onClick={(e)=>hideModal(e)}>
            <ModalSection top={top} left={left}>
                <HeaderBox>
                    <Heading headingTagUPPERCASE={"H2"}>{title}</Heading>
                    <CloseButton name="closeModalButton" data-isvisible="closeModal">Close</CloseButton>
                </HeaderBox>
                {children}
            </ModalSection>
        </ModalBackground>
        ) : null
        
    );
}

