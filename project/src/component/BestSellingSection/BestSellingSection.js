import React from 'react';
import styled from "styled-components";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import {ContentCard} from '../ContentCard/ContentCard';
import {SectionLayout} from "../SectionLayout/SectionLayout";

let ContentCardsBox = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:32px;
@media (max-width:${props=>props.theme.laptop}) {
  grid-gap:20px;
}
@media (max-width:${props=>props.theme.tablet}) {
  grid-template-columns:repeat(2, 1fr);
  grid-gap:10px;
}
@media (max-width:${props=>props.theme.smallPhone}) {
  grid-template-columns:repeat(1, 1fr);
}
`;
  
  export const BestSellingSection = ({productsList}) => {
      return (
          
            <SectionLayout
            left={
              <CategoryMenu 
                categoriesMenuArray={productsList} 
                itemsName={`products`}
                titleText={`Best selling products`}
                />
            }
            rigth={
              <ContentCardsBox>
                  <ContentCard/>
                  <ContentCard/>
                  <ContentCard/>
              </ContentCardsBox>
            }>
             </SectionLayout>
          
      );
  }
  
  
  