import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from "styled-components";
import {TransparentButton} from "../Button/Button";
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
    padding:5px;
}
`;
let CardPicture = styled.div`
border-radius: 12px;
width: 100%;
height: 100%;
overflow: hidden;
margin-bottom: 16px;
background: url('${props => props.url}') no-repeat;
background-color:#F9F9F9;
background-position: 50% 50%;
background-clip:content-box;
background-size:cover;
`;
let CardSale = styled.div`
padding-top:12px;
padding-left:20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: ${props => props.theme.secondaryColor};
`;
let CardTitle = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
color: ${props =>props.theme.baseColor};
`;
let CardDescription = styled.div`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #575757;
`;
let BuyingBox = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
let CardPriceBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;
let CardPrice = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: ${props =>props.theme.baseColor};
`;
let CardPriceOff = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
text-decoration-line: line-through;
color: #A9A9A9;
`;

export const ContentCard = ({
    picture="./image/vegs.jpg", 
    sale=0, 
    title="Product Title",
    description="Space for a small product description",
    price=99.99}) => {

    let saleText = sale ? `-${(sale)}%` : "";
    let prevPrice = sale ? (price*sale) : "";

    return (
        <Card>
            <CardPicture url={picture}>
                <CardSale>
                    {saleText}
                </CardSale>
            </CardPicture>
            <CardTitle>
                {title}
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
            <BuyingBox>

                <CardPriceBox>
                    <CardPrice>
                        {`${price} USD`}
                    </CardPrice>
                    <CardPriceOff>
                        {prevPrice}
                    </CardPriceOff>
                </CardPriceBox>

                <View>
                    <TransparentButton>Buy now</TransparentButton>
                </View>

            </BuyingBox>
        </Card>
    );
}

