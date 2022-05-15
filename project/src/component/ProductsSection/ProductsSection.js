import React from 'react';
import styled from "styled-components";
import {SectionLayout} from "../SectionLayout/SectionLayout";
import { ContentCard } from '../ContentCard/ContentCard';
import { ContentCardWide } from '../ContentCard/ContentCardWide';
import CategoryMenu from "../CategoryMenu/CategoryMenu";

const GridLayout = styled.div`
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
const ListLayout = styled.div`
display:flex;
flex-direction:column;
flex-wrap:no-wrap;
`;


export const ProductsSection = ({productsList}) => {

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
          <ListLayout>
              <ContentCardWide/>
              <ContentCardWide/>
              <ContentCardWide/>
          </ListLayout>
        }>
         </SectionLayout>
    );
}

