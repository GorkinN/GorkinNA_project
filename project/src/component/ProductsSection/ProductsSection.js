import React from 'react';
import styled from "styled-components";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import {Container} from "../common/Container";
import {ContentCard} from '../ContentCard/ContentCard';
let ProductsSectionContainer = styled.section`
display:flex;
justify-content:space-between;
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
let ConentCardsBox = styled.div`
display:flex;
justify-content:space-between;
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
                <ConentCardsBox>
                  <ContentCard/>
                  <ContentCard/>
                  <ContentCard/>
                </ConentCardsBox>
            </ProductsSectionContainer>
          </Container>
      );
  }
  
  
  