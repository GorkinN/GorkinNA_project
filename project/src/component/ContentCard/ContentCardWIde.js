import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import {GreenButton} from "../Button/Button";
import prodPicDefault from './image/vegs.jpg';
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, Infotext, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
import {RatingBox} from "../RatingBox/RatingBox";

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
    padding-top:10px;
    padding-bottom:10px;
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
padding-left:10px;
overflow:clip;
@media (max-width:${props=> props.theme.phone}) {
    justify-content:flex-start;
}
@media (max-width:${props=> props.theme.smallPhone}) {
    padding:10px;
}
`;
const CardPictureContainerWide=styled(CardPictureContainer)`
max-width:400px;
height:280px;
margin-bottom:0;
padding:0;
box-shadow: none;
@media (max-width:${props=> props.theme.tablet}) {
    height:auto;
    max-width:300px;
    margin-bottom:10px;
}
@media (max-width:${props=> props.theme.smallPhone}) {
    height:auto;
    max-width:none;
    margin-bottom:10px;
}
`;
const CardInfo = styled.div`
display:flex;
flex-direction:column;
margin-left:0;
max-width:200px;
@media (max-width:${props=> props.theme.smallPhone}) {
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
@media (max-width:${props=> props.theme.phone}) {
    flex-direction:row;
    margin-left:0;
    margin-top:10px;
    flex-grow:1;
}
`;
const CardPriceBox=styled.div`
margin-bottom:20px;

@media (max-width:${props=> props.theme.smallPhone}) {
    margin:0;
}
@media (max-width:${props=> props.theme.phone}) {
    margin:0 10px;
}
`;

const ContentCardWide = ({product, isInCart}) => {
    let {
        salePercent:sale = 50, 
        name: title = "Product Title",
        description = "Space for a small product description",
        rating=5,
        priceUSD: price,
        picture,
        freshness = "Extra fresh",
        deliveryArea: delivery = "Europe",
        farm = "Grocery Farm Fields"} = product;
    let saleText = sale ? `-${(sale)}%` : "";
    let prevPrice = sale>0 ? Math.ceil(price/(1 - sale/100)*100)/100 : "";
    let priceText = price===0 ? `FREE` : `${price} USD`;
    let [buttontext, setButtontext] = useState("Buy now");
    let [buttonDisableStatus, setButtonDisableStatus] = useState(false);
    useEffect(()=>{
        if (isInCart) {
            setButtontext("in cart");
            setButtonDisableStatus(true);
        } else {
            setButtonDisableStatus(false);
            setButtontext("Buy now");

        }
    },[isInCart]);
    return (
        <CardWide  id={product.id}>
            <CardPictureContainerWide>
                <CardPicture src={`${picture || prodPicDefault}`} alt={title} loading='lazy'/>
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

                    <GreenButton 
                    name="Buy-button" 
                    productid={product.id}
                    disabled ={buttonDisableStatus}
                    onClick={()=>{
                        setButtontext("in cart");
                        setButtonDisableStatus(true);
                    }}>
                        {buttontext}
                    </GreenButton>
                </BuyingBox>
            </Container>
            

        </CardWide>
    );
}


export default ContentCardWide;