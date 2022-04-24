import React from 'react';
import styled from "styled-components";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import {Container} from "../common/Container";
let ProductsSectionContainer = styled.section`
    padding-top: 64px;
    padding-bottom: 64px;
 @media (max-width:${props=>props.theme.desktop}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (max-width:${props=>props.theme.tablet}) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  `;
  
  export const ProductsSection = ({productsList}) => {
      return (
          <Container>
            <ProductsSectionContainer>
                <CategoryMenu 
                categoriesMenuArray={productsList} 
                itemsName={`products`}
                titleText={`Best selling products`}
                />
            </ProductsSectionContainer>
          </Container>
      );
  }
  
  
  