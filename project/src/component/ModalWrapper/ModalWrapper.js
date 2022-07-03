import React, {useState} from 'react';
import styled from "styled-components";
import Heading from "../Text/Headings/Heading";

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
top:50%;
left:50%;
transform:translate(-50%, -50%);
z-index:9998;
display:flex;
flex-direction:column;
padding:20px;
background:white;
border: 1px solid #D1D1D1;
border-radius:12px;
min-width:300px;
`;
const TopBox = styled.div`
display:flex;
justify-content:space-between;`;
const CloseButton = styled.button`
`;

export const ModalWrapper = ({children, title, customOnCloseModal}) => {
    let [isVisible, setVisibility] = useState(true);
    function hideModal (e) {
        if (e.target.dataset.isvisible==="closeModal") {
            setVisibility(false);
            if (customOnCloseModal != undefined) {customOnCloseModal()}
        }
    }

    return (
        isVisible? (
        <ModalBackground data-isvisible="closeModal" onClick={(e)=>hideModal(e)}>
            <ModalSection>
                <TopBox>
                    <Heading headingTagUPPERCASE={"H2"}>{title}</Heading>
                    <CloseButton name="closeModalButton" data-isvisible="closeModal">Close</CloseButton>
                </TopBox>
                {children}
            </ModalSection>
        </ModalBackground>
        ) : null
        
    );
}

