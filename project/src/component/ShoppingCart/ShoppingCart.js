import React, {useContext} from 'react';
import styled from "styled-components";
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import { ShoppingCartContext } from '../Context/ShoppingCartContext';
import { ContentCardShoppingCart } from '../ContentCard/ContentCardShoppingCart';
import { ShoppingCartProductsContext } from '../Context/ShoppingCartContext';

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

export const ShoppingCart = ({productsGeneralObj}) => {
    let {setShoppingCartVisibility} = useContext(ShoppingCartContext);
    let {cartProductsIds, setCartProductsIds} = useContext(ShoppingCartProductsContext);

    function removeFromShoppingCart(event) {
        if (event.target.name==="delete-item")    {
            let id = event.target.dataset.productid;
            setCartProductsIds((prevState)=>{
                prevState.delete(+id)
                return new Map(prevState)});
        } 
    }


    function formShoopingCartProductsArr (productsGeneralObj, setOfIds) {
        return productsGeneralObj.filter((item)=>(setOfIds.has(item.id)));
    }
    let productsArray = formShoopingCartProductsArr(productsGeneralObj, cartProductsIds);

    function showShoppingCartProducts (productsArray) {
        if (productsArray.length===0) {return <ProductListItem>Shopping cart is empty</ProductListItem>}
        return ( productsArray.map(product => (<ContentCardShoppingCart key={product.id} product={product}/>)) );
    }  

    return (
        <ModalWrapper 
        title="Shopping cart" 
        customOnCloseModal={()=>(setShoppingCartVisibility((prev)=>(!prev)))}
        top={2}>
                <ProductsList onClick={(event=>(removeFromShoppingCart(event)))}>
                    {showShoppingCartProducts(productsArray)}
                </ProductsList>
        </ModalWrapper>
    );
}
