import React from 'react';
import styled from "styled-components";
import { Legend } from '../FilterComponents/Legend';
import {LabelContainer} from '../FilterComponents/CheckBox';
import { Fieldset } from '../FilterComponents/Fieldset';
const PriceFilterContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
min-height:100px;
max-width:90%;
`;

const RangeInputContainer = styled.div`
position:relative;
display:flex;
justyfy-content:flex-start;`;
const InputRange = styled.input`
position:absolute;
top:0;
left:0;
width:100%;
`;
const MinInputRange = styled(InputRange)`
transform:rotate(180deg) translate(0, 10px);
`;
const MaxInputRange = styled(InputRange)`
transform: translate(0, 10px);
`;
const NubmerInputBox = styled.div`
display:flex;
justify-content:space-between;`;

const NumberInput = styled.input`
position:relative;
display:block;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #A9A9A9;
text-indent:21px;
padding:10px 0px;
border:1px solid #D1D1D1;
border-radius:12px;
background: #F9F9F9;
width:110px;
`;
const NumberInputLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #151515;
`;



export const PriceFilter = ({min, max}) => {
    if (!min) {min=0}
    if (!max) {max=120}

    return (
        <Fieldset>
        <Legend>Price</Legend>
        <PriceFilterContainer>
            <RangeInputContainer>
                <MinInputRange type="range" defaultValue={0}></MinInputRange>
                <MaxInputRange type="range" defaultValue={20}></MaxInputRange>
            </RangeInputContainer>

            <NubmerInputBox>
                <NumberInput type="number" defaultValue={0} id="minPriceNumberInput"></NumberInput>
                <NumberInput type="number" defaultValue={100} id="maxPriceNumberInput"></NumberInput>
            </NubmerInputBox>
        </PriceFilterContainer>
        
            
    </Fieldset>
    );
}