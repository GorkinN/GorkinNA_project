import React from 'react';
import styled from "styled-components";
import Heading from "../Text/Headings/Heading";
const CartBackground = styled.div`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%, -50%);
z-index:9999;
width:100%;
height:100%;
background-color:rgba(80, 80, 80, 0.5);
`;
const ShoppingCartSection = styled.section`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%, -50%);
z-index:9999;
display:flex;
flex-direction:column;
padding:20px;
background:white;
border: 1px solid #D1D1D1;
border-radius:12px;
min-width:300px;
`;
const ProductsList = styled.ul`
margin:10px 0;
padding:0;`;
const ProductListItem = styled.li`
margin-bottom:16px;
padding-bottom:16px;
:nth-last-child(1) {
    margin-bottom:16px;
}
border-bottom:1px solid #F9F9F9;
`;

export const ShoppingCart = () => {
    
    return (
        <CartBackground name="CartBackground">
            <ShoppingCartSection>
                <Heading headingTagUPPERCASE={"H2"}>Shopping cart</Heading>
                <ProductsList>
                    <ProductListItem>1</ProductListItem>
                    <ProductListItem>2</ProductListItem>
                </ProductsList>
            </ShoppingCartSection>
        </CartBackground>
     
    );
}
