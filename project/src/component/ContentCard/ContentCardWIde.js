import React from 'react';
import styled from "styled-components";

import {GreenButton} from "../Button/Button";
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, Infotext, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
import {RatingBox} from "../RatingBox/RatingBox";
import prodPicDefault from './image/vegs.jpg';

let CardWide = styled.li`
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
@media (max-width:${props=> props.theme.smallPhone}) {
    flex-direction:column;
    margin-bottom:16px;
    padding-right:0px;
    padding-bottom:10px;
}
:nth-last-child(1) {
    margin-bottom:0;
}
`;
const Container = styled.div`
display:flex;
flex-wrap:wrap;
flex-grow:1;
align-items:flex-start;
justify-content:space-between;
@media (max-width:${props=> props.theme.smallPhone}) {
    padding:10px;
}
`;
const CardPictureContainerWide=styled(CardPictureContainer)`
max-width:268px;
height:280px;
margin-bottom:0;
padding:0;
box-shadow: none;
@media (max-width:${props=> props.theme.smallPhone}) {
    height:auto;
    max-width:none;
    margin-bottom:10px;
}
`;
const CardInfo = styled.div`
display:flex;
flex-direction:column;
margin-left:32px;
@media (max-width:${props=> props.theme.smallPhone}) {
    margin-left:0;
    margin-bottom:10px;
}
`;
const SecondaryInfoContainer = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
margin-top:12px;
grid-gap:12px 0px;
min-width:200px;
`;

const BuyingBox=styled.div`
display:flex;
flex-direction:column;
margin-left:auto;
@media (max-width:${props=> props.theme.smallPhone}) {
    flex-direction:row;
    margin-left:0;
    flex-grow:1;
    justify-content:space-between;
}
`;
const CardPriceBox=styled.div`
margin-bottom:20px;
@media (max-width:${props=> props.theme.smallPhone}) {
    margin:0;
}
`;

export const ContentCardWide = ({product}) => {
    let {
        salePercent:sale = 50, 
        name: title = "Product Title",
        description = "Space for a small product description",
        rating=5,
        priceUSD: price,
        freshness = "Extra fresh",
        deliveryArea: delivery = "Europe",
        farm = "Grocery Farm Fields"} = product;
        console.log("price", price)
    let pictureSrc = prodPicDefault;
    let saleText = sale ? `-${(sale)}%` : "";
    let prevPrice = sale>0 ? Math.ceil(price/(1 - sale/100)*100)/100 : "";
    let priceText = price===0 ? `FREE` : `${price} USD`;
    console.log("(sale/100)",(sale/100))
    console.log("price/(sale/100)",price/(sale/100))
    console.log("prevPrice", prevPrice)

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


