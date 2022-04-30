import React from 'react';
import styled from "styled-components";
import {TransparentButton} from "../Button/Button";
let Card = styled.div`
position: relative;
display:flex;
flex-direction:column;
box-sizing: border-box;
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
justify-content:space-between;
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
    return (
        <Card>
            <CardPicture url={picture}>
                <CardSale>
                    {`-${(sale || "")}%`}
                </CardSale>
            </CardPicture>
            <CardTitle>
                {title}
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
            <BuyingBox>
                <div>
                    <CardPrice>
                        {`${price} USD`}
                    </CardPrice>
                    <br/>
                    <CardPriceOff>
                        {`${price*sale}`}
                    </CardPriceOff>
                </div>
                <TransparentButton>Buy now</TransparentButton>

            </BuyingBox>
        </Card>
    );
}

