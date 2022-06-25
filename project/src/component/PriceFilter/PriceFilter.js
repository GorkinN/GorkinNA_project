import React from 'react';
import styled from "styled-components";
import { Legend } from '../FilterComponents/Legend';
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
const NumberInputBox = styled.div`
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
background: #f9f9f9;
width:110px;
`;
const NumberInputLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #151515;
`;

export const PriceFilter = ({minmax}) => {
    let min = minmax.min;
    let max = minmax.max;
    function validatePriceValue(event){
        let value = event.target.value;
        if (value<0) {event.target.value=min}
        if (value>max) {event.target.value=max}
    }

    return (
        <Fieldset>
        <Legend>Price</Legend>
        <PriceFilterContainer>
            <NumberInputBox>

                <NumberInputLabel for="minPriceNumberInput">
                    min
                    <NumberInput 
                        type="number" 
                        name="minPriceNumberInput" 
                        id="minPriceNumberInput" 
                        defaultValue={min} 
                        onChange={(e)=>(validatePriceValue(e))}
                    />
                </NumberInputLabel>

                <NumberInputLabel for="maxPriceNumberInput">
                    max
                    <NumberInput 
                        type="number" 
                        name="maxPriceNumberInput" 
                        id="maxPriceNumberInput" 
                        defaultValue={max} 
                        onChange={(e)=>(validatePriceValue(e))}
                    />
                </NumberInputLabel>
                
            </NumberInputBox>
        </PriceFilterContainer>
            
    </Fieldset>
    );
}
/*      
<RangeInputContainer>
            <MinInputRange type="range" defaultValue={0}></MinInputRange>
            <MaxInputRange type="range" defaultValue={20}></MaxInputRange>
        </RangeInputContainer>
*/