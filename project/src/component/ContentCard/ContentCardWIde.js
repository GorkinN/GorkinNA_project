import React from 'react';
import styled from "styled-components";

import {GreenButton} from "../Button/Button";
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
import prodPicDefault from './image/vegs.jpg';

let CardWide = styled.div`
position: relative;
display:flex;
align-items:center;
box-sizing: border-box;
margin-bottom:32px;
border: 1px solid #D1D1D1;
border-radius: 12px;
@media (max-width:${props=> props.theme.tablet}) {
    margin-bottom:16px;
}
:nth-last-child(1) {
    margin-bottom:0;
}
`;
const CardPictureContainerWide=styled(CardPictureContainer)`
max-width:268px;
height:280px;
margin-bottom:0;
padding:0;
box-shadow: none;
`;
const CardInfo = styled.div`
margin-left:32px;
`;
const BuyingBox=styled.div`
margin-left:auto;`;
const CardPriceBox=styled.div``;



export const ContentCardWide = ({
    pictureSrc = prodPicDefault, 
    sale = 50, 
    title = "Product Title",
    description = "Space for a small product description",
    price = 100,
    freshness = "Extra fresh",
    delivery = "Europe",
    farm = "Grocery Farm Fields"}) => {

    let saleText = sale ? `-${(sale)}%` : "";
    let prevPrice = sale ? (price/(sale/100)) : "";
    let priceText = price===0 ? `FREE` : `${price} USD`;

    return (
        <CardWide>
            <CardPictureContainerWide>
                <CardPicture src={pictureSrc}/>
                <CardSale>
                    {saleText}
                </CardSale>
            </CardPictureContainerWide>
            
            <CardInfo>
                <CardTitle>
                    {title}
                </CardTitle>

                <CardDescription>
                    {description}
                </CardDescription>
            </CardInfo>

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

        </CardWide>
    );
}


