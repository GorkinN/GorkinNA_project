import React from 'react';
import styled from "styled-components";
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';

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
        <ModalWrapper title="Shopping cart">
                <ProductsList>
                    <ProductListItem>1</ProductListItem>
                    <ProductListItem>2</ProductListItem>
                </ProductsList>
        </ModalWrapper>
    );
}
