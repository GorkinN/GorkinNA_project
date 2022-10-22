import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {GreenButton} from "../Button/Button";
import prodPicDefault from './image/vegs.jpg';
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
import starGoldenFilled from "../RatingBox/starGoldenFilled.svg";

let Card = styled.li`
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
let RatingContainer=styled.div`
position:absolute;
top:0px;
right:5px;
padding:15px 15px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
background: url('${starGoldenFilled}') no-repeat;
background-position:50% 30%;
background-size:110%;
color: ${props => props.theme.secondaryColor};
`;
export const ContentCard = ({product, isInCart}) => {
    const {
        salePercent : sale , 
        name : title = "Product Title",
        description = "Space for a small product description",
        priceUSD: price,
        picture,
        rating} = product; 
        
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
        <Card id={product.id}>
            
            <CardPictureContainer>
                <CardPicture src={`${picture || prodPicDefault}`} alt="product picture"/>
                <CardSale>
                    {saleText}
                </CardSale>
                <RatingContainer>
                    {rating}
                </RatingContainer>
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

                    <GreenButton 
                    name="Buy-button" 
                    disabled ={buttonDisableStatus}
                    onClick={()=>{
                        setButtontext("in cart");
                        setButtonDisableStatus(true);
                    }}
                    productid={product.id}>
                        {buttontext}
                    </GreenButton>
            </BuyingBox>
        </Card>
    );
}


