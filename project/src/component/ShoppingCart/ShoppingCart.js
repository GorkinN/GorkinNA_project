import React, {useContext, useState, useEffect} from 'react';
import styled from "styled-components";
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import { ShoppingCartContext } from '../Context/ShoppingCartContext';
import { ContentCardShoppingCart } from '../ContentCard/ContentCardShoppingCart';
import { ShoppingCartProductsContext } from '../Context/ShoppingCartContext';
import {GreenButtonStyled} from "../Button/Button.js";
import { mapReplacer } from '../common/CommonFunctions';

const ProductsList = styled.ul`
margin:10px 0;
padding:0;
`;
const ProductListItem = styled.li`
margin-bottom:16px;
padding-bottom:16px;
:nth-last-child(1) {
    margin-bottom:16px;
}
border-bottom:1px solid #F9F9F9;
`;
const TotalSum = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 18px;
margin:10px 0;
`;
const BuyCartButton = styled(GreenButtonStyled)`
align-self:flex-start;
padding:10px 30px;
`;

 const ShoppingCart = ({productsGeneralObj}) => {
    let {setShoppingCartVisibility} = useContext(ShoppingCartContext);
    let {cartProductsIds, setCartProductsIds} = useContext(ShoppingCartProductsContext);
    
    function formShoopingCartProductsArr (productsGeneralObj, setOfIds) {
        return productsGeneralObj.filter((item)=>(setOfIds.has(item.id)));
    }
    let productsArray = formShoopingCartProductsArr(productsGeneralObj, cartProductsIds);

    function showShoppingCartProducts (productsArray) {
        if (productsArray.length===0) {return <ProductListItem>Shopping cart is empty</ProductListItem>}
        return ( productsArray.map(product => (<ContentCardShoppingCart key={product.id} product={product}/>)) );
    }  

    function removeFromShoppingCart(event) {
        if (event.target.name==="delete-item")    {
            let id = event.target.dataset.productid;
            setCartProductsIds((prevState)=>{
                prevState.delete(+id)
                return new Map(prevState)});
        } 
    }

    //TotalSum content START
    const [totalSum, setTotalSum] = useState(countTotalSum(productsGeneralObj, cartProductsIds));
    
    function countTotalSum(productsGeneralObj, cartProductsIds){
        let sum = productsGeneralObj.reduce((acc, item)=>{
            if (cartProductsIds.has(item.id)) {
                return acc + item.priceUSD*cartProductsIds.get(item.id);
            }
            return acc;
        }, 0);
        sum = Math.ceil(sum*100)/100;
        return sum;
    }

    useEffect(()=>{
        setTotalSum(countTotalSum(productsGeneralObj, cartProductsIds));
    }, [productsGeneralObj, cartProductsIds]);
    //TotalSum content END

    return (
        <ModalWrapper 
        title="Shopping cart" 
        customOnCloseModal={()=>(setShoppingCartVisibility((prev)=>(!prev)))}
        top={2}>
                <ProductsList onClick={(event=>(removeFromShoppingCart(event)))}>
                    {showShoppingCartProducts(productsArray)}
                </ProductsList>

        {cartProductsIds.size === 0? null : 
        <>
        <TotalSum>
            Total: {totalSum} USD
        </TotalSum>

        <BuyCartButton productid={0} onClick={()=>(alert("JSON:", JSON.stringify(cartProductsIds, mapReplacer)))}>
            Buy products
        </BuyCartButton>
        </>}
       

        </ModalWrapper>
    );
}

export default ShoppingCart;