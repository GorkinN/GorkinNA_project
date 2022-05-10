import React from 'react';
import styled from "styled-components";
let ListLayoutItemStyled = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
border: 1px solid #D1D1D1;
border-radius: 12px;
box-sizing:border-box;
max-width:869px;
max-height:280px;
`;
let ImageBox = styled.img``;
let InfoBox = styled.div``;
let BuyingBox = styled.div``;



export const ListLayoutItem = () => {
    return (
        <ListLayoutItemStyled>
            <ImageBox/>

            <InfoBox>

            </InfoBox>

            <BuyingBox>

            </BuyingBox>
        </ListLayoutItemStyled>
    );
}

