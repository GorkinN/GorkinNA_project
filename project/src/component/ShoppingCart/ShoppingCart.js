import React, {useContext} from 'react';
import styled from "styled-components";
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import { ShoppingCartContext } from '../Context/ShoppingCartContext';

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
    let {setShoppingCartVisibility} =useContext(ShoppingCartContext);
        
    return (
        <ModalWrapper customOnCloseModal={()=>(setShoppingCartVisibility((prev)=>(!prev)))}>
                <ProductsList>
                    <ProductListItem>1</ProductListItem>
                    <ProductListItem>2</ProductListItem>
                </ProductsList>
        </ModalWrapper>
    );
}
