import React from 'react';
import styled from "styled-components";

import {GreenButton} from "../Button/Button";
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, Infotext, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
import {RatingBox} from "../RatingBox/RatingBox";
import prodPicDefault from './image/vegs.jpg';

let CardWide = styled.div`
position: relative;
display:flex;
align-items:center;
box-sizing: border-box;
margin-bottom:32px;
padding-right:32px;
border: 1px solid #D1D1D1;
border-radius: 12px;
@media (max-width:${props=> props.theme.tablet}) {
    margin-bottom:16px;
}
:nth-last-child(1) {
    margin-bottom:0;
}
`;
const Container = styled.div`
display:flex;
flex-grow:1;
align-items:flex-start;
justify-content:space-between;
`;
const CardPictureContainerWide=styled(CardPictureContainer)`
max-width:268px;
height:280px;
margin-bottom:0;
padding:0;
box-shadow: none;
`;
const CardInfo = styled.div`
display:flex;
flex-direction:column;
margin-left:32px;
`;
const SecondaryInfoContainer = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
margin-top:12px;
grid-gap:12px 0px;
`;

const BuyingBox=styled.div`
display:flex;
flex-direction:column;
align-self: flex-start;
margin-left:auto;
`;
const CardPriceBox=styled.div`
margin-bottom:20px`;

export const ContentCardWide = ({
    pictureSrc = prodPicDefault, 
    sale = 50, 
    title = "Product Title",
    description = "Space for a small product description",
    rating=5,
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
            <Container>
                <CardInfo>
                    <CardTitle>
                        {title}
                    </CardTitle>

                    <CardDescription>
                        {description}
                    </CardDescription>

                    <RatingBox rate={rating}/>
                    
                    <SecondaryInfoContainer>
                        {freshness && (
                            <>
                            <Infotext>Freshness:</Infotext>
                            <Infotext>{freshness}</Infotext>
                            </>
                        )}
                        {delivery && (
                            <>
                            <Infotext>Delivery:</Infotext>
                            <Infotext>{delivery}</Infotext>
                            </>
                                
                        )}
                        {farm && (
                            <>
                            <Infotext>Farm:</Infotext>
                            <Infotext>{farm}</Infotext>
                            </>
                        )} 
                    </SecondaryInfoContainer>

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
            </Container>
            

        </CardWide>
    );
}


