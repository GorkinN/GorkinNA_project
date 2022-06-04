import React from 'react';
import styled from "styled-components";
import {SectionLayout} from "../SectionLayout/SectionLayout";
import { ContentCard } from '../ContentCard/ContentCard.js';
import { ContentCardWide } from '../ContentCard/ContentCardWide';
import { FilterForm } from '../FilterForm/FilterForm';
import { CategoryFilter } from '../FilterForm/CategoryFilter';
//import CategoryMenu from "../CategoryMenu/CategoryMenu";

const GridLayout = styled.ul`
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
const ListLayout = styled.ul`
display:flex;
flex-direction:column;
flex-wrap:no-wrap;
`;

export const ProductsSection = ({isGridLayout, productsList, filtersInfo}) => {
 
  function showProductCards(productsList){
    if (productsList.length===0) {return (<p>There's no products</p>);}
        if (isGridLayout) {
          return (
            <GridLayout>
              { productsList.map((item)=>(<ContentCard product={item} key={item.id*100}/>)) }
            </GridLayout>
            );
        }
        else {
          return (
            <ListLayout>
              { productsList.map((item)=>(<ContentCardWide product={item} key={item.id}/>)) }
            </ListLayout>
            );
        }
  }
    return (
        <SectionLayout
        left={
        <FilterForm>
          <CategoryFilter 
          categoriesMap={filtersInfo.categoriesMap}></CategoryFilter>

        </FilterForm>
        }
        rigth={showProductCards(productsList)}>
         </SectionLayout>
    );
}