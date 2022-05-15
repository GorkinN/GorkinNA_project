import React from 'react';
import styled from "styled-components";
import {GreenButton} from "../Button/Button";
import prodPicDefault from './image/vegs.jpg';
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
let Card = styled.div`
position: relative;
display:flex;
flex-direction:column;
box-sizing: border-box;
min-height:323px;
padding: 16px;
border: 1px solid #D1D1D1;
border-radius: 12px;
@media (max-width:${props=> props.theme.tablet}) {
    padding:10px;
}
`;
let BuyingBox = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:${props=> props.theme.tablet}) {
    justify-content:flex-start;
}
`;
let CardPriceBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
@media (max-width:${props=> props.theme.tablet}) {
    margin-right:26px;
}
`;

export const ContentCard = ({
    pictureSrc=prodPicDefault, 
    sale=50, 
    title="Product Title",
    description="Space for a small product description",
    price=100}) => {

    let saleText = sale ? ` -${(sale)}% ` : "";
    let prevPrice = sale ? (price/(sale/100)) : "";
    let priceText = price===0 ? `FREE` : `${price} USD`;

    return (
        <Card>

            <CardPictureContainer >
                <CardPicture src={pictureSrc} alt="product picture"/>
                <CardSale>
                    {saleText}
                </CardSale>
            </CardPictureContainer>

            <CardTitle>
                {title}
            </CardTitle>

            <CardDescription>
                {description}
            </CardDescription>

            <BuyingBox>

                <CardPriceBox>
                    <CardPrice>
                        {priceText}
                    </CardPrice>
                    <CardPriceOff>
                        {prevPrice}
                    </CardPriceOff>
                </CardPriceBox>

                    <GreenButton>Buy now</GreenButton>
            </BuyingBox>
        </Card>
    );
}


