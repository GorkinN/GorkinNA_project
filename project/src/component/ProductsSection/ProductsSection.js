import React from 'react';
import {useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import {SectionLayout} from "../SectionLayout/SectionLayout";
import { ContentCard } from '../ContentCard/ContentCard.js';
import { ContentCardWide } from '../ContentCard/ContentCardWide';
import { FilterForm } from '../FilterForm/FilterForm';
import { SearchbarContext } from '../Context/SearchbarContext';

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

export const ProductsSection = ({isGridLayout, productsGeneralObj}) => {
  let [productsCardsList, setProductsCardList] = useState(productsGeneralObj); 
  //filter for searchbar
  let {searchText} = useContext(SearchbarContext);
  useEffect( ()=>{

    function formFilterSearchbarProducts (searchText){
      let filteredArr=productsGeneralObj;
      if (searchText) {
        let searchTextUppercase = searchText.toUpperCase();

        filteredArr = productsGeneralObj.filter((item) => {
          let name = item.name.toUpperCase();
          return ~name.indexOf(searchTextUppercase);        
        })
      }
      return filteredArr;
    } 

    setProductsCardList(formFilterSearchbarProducts(searchText))
   } , [searchText, productsGeneralObj] )
   
  
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

  function formFiltersInfo(productsArray) {
    //PriceRangeFilter info
    let minMaxPrice = {
        min: productsArray[0].priceUSD, 
        max:productsArray[0].priceUSD
    }
    //CategoriesFilter info
    let categoriesMap = new Map();

    productsArray.forEach((item)=>{
        //PriceRangeFilter info
        if (minMaxPrice.min > item.priceUSD) {minMaxPrice.min = item.priceUSD}             
        if (minMaxPrice.max < item.priceUSD) {minMaxPrice.max = item.priceUSD}             
        //CategoriesFilter info
        if (categoriesMap.has(item.category)) {
            let current = categoriesMap.get(item.category);
            categoriesMap.set(item.category, current+1);
        } else {
            categoriesMap.set(item.category, 1);
        }
    });
    
    //PriceRangeFilter -> integer
    minMaxPrice.min = Math.floor(minMaxPrice.min);
    minMaxPrice.max = Math.ceil(minMaxPrice.max);

    return {categoriesMap:categoriesMap, minMaxPrice: minMaxPrice};
  }
  let filtersInfo = formFiltersInfo(productsGeneralObj);

  function collectCheckboxFilterData (inputName) {
    let selectedCheckboxes = document.querySelectorAll(`input[name='${inputName}']`);
    let conditionsArr =[];
    for (let item of selectedCheckboxes) {
        if (item.checked===true) {conditionsArr.push(item.value)}            
    }
    return conditionsArr;
  };
  function onSubmitFilter(e){
    e.preventDefault();
    
    let chosenCategoriesArr = collectCheckboxFilterData(`categoryFilterCheckbox`);
    let chosenRatingArr = collectCheckboxFilterData(`ratingCheckBox`);

    let minPrice = document.querySelector("input[name='minPriceNumberInput']").value;
    let maxPrice = document.querySelector("input[name='maxPriceNumberInput']").value;

    function filterFunc (obj, searchingProp, chosenCategoriesArr){
      if (chosenCategoriesArr.length===0) {return true;}
      return chosenCategoriesArr.includes(String(obj[searchingProp]));               
    }

    let filteredProductsArr = productsGeneralObj.filter((item)=>{ 
      let isFitsFilters = (
        filterFunc(item, "category", chosenCategoriesArr) && 
        filterFunc(item, "rating", chosenRatingArr) &&
        item.priceUSD>=minPrice &&
        item.priceUSD<=maxPrice);
        
      if (isFitsFilters)
       {return true;} 
       return false;
    });
    setProductsCardList(filteredProductsArr);
  };
    return (
        <SectionLayout
        left={
          <FilterForm 
          filtersInfo={filtersInfo} 
          productsGeneralObj={productsGeneralObj}
          onSubmitFunction={onSubmitFilter}
          />
        }
        rigth={showProductCards(productsCardsList)}>
         </SectionLayout>
    );
}