import React from 'react';
import {useState, useContext, useLayoutEffect, useMemo} from 'react';
import {SectionLayout} from "../SectionLayout/SectionLayout";
import { ContentCard } from '../ContentCard/ContentCard.js';
import { ContentCardWide } from '../ContentCard/ContentCardWide';
import { FilterForm } from '../FilterForm/FilterForm';
import { SearchbarContext } from '../Context/SearchbarContext';
import { ShoppingCartProductsContext } from '../Context/ShoppingCartContext';
import { GridLayout } from './GridLayout';
import { ListLayout } from './ListLayout';

export const ProductsSection = ({isGridLayout, productsGeneralObj}) => {
  console.log("ProductsSection render")
  let [productsCardsList, setProductsCardList] = useState(productsGeneralObj); 
  let [filteredIds, setFilteredIds] = useState(new Set(productsGeneralObj.map(item=>item.id)));

  function formComparedFilteredIdsSet(filteredIdsSet, filteredIdsToCompareArr) {
    filteredIdsSet.forEach(item => {
      if (filteredIdsToCompareArr.includes(item)) {return}
      filteredIdsSet.delete(item);
    })
    console.log("compared set", filteredIdsSet)
    return new Set(filteredIdsSet);
  }
  
  let {cartProductsIds} = useContext(ShoppingCartProductsContext);
  //FILTERS

  //filter for searchbar
  let {searchText} = useContext(SearchbarContext);

  useLayoutEffect( ()=>{
    function formFilterSearchbarProducts (searchText){
      let filteredArr=productsGeneralObj;
      if (searchText) {
        let searchTextUppercase = searchText.toUpperCase();

        filteredArr = productsGeneralObj.filter((item) => {
          let name = item.name.toUpperCase();
          return ~name.indexOf(searchTextUppercase);        
        })
      }
      let searchBarFilteredIds = filteredArr.map(item => item.id);
      console.log("searchBarFilteredIds", searchBarFilteredIds)
      formComparedFilteredIdsSet(filteredIds, searchBarFilteredIds);
      return filteredArr;
    } 
    setProductsCardList(formFilterSearchbarProducts(searchText))
   } , [searchText, productsGeneralObj] )
  //END filter for searchbar

   //collect info for filters values
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
  let filtersInfo = useMemo(()=>formFiltersInfo(productsGeneralObj),[productsGeneralObj]);
  //END collect info for filters values
  //collect filter data from checkboxes and price range

  function collectCheckboxFilterData (inputName) {
    let selectedCheckboxes = document.querySelectorAll(`input[name='${inputName}']`);
    let conditionsArr =[];
    for (let item of selectedCheckboxes) {
        if (item.checked===true) {conditionsArr.push(item.value)}            
    }
    return conditionsArr;
  };

  function filterFunc (obj, searchingProp, chosenCategoriesArr){
    if (chosenCategoriesArr.length===0) {return true;}
    return chosenCategoriesArr.includes(String(obj[searchingProp]));               
  }

  function formSideFilterArray(){
    let chosenCategoriesArr = collectCheckboxFilterData(`categoryFilterCheckbox`);
    let chosenRatingArr = collectCheckboxFilterData(`ratingCheckBox`);
    let minPrice = document.querySelector("input[name='minPriceNumberInput']").value;
    let maxPrice = document.querySelector("input[name='maxPriceNumberInput']").value;

    let filteredProductsArr = productsGeneralObj.filter((item)=>{ 
      let isFitsFilters = (
        filterFunc(item, "category", chosenCategoriesArr) && 
        filterFunc(item, "rating", chosenRatingArr) &&
        item.priceUSD>=minPrice &&
        item.priceUSD<=maxPrice);
        
      if (isFitsFilters) {return true;} 
       return false;
    });
    return filteredProductsArr;
  }

  function onChangeFilter(){
    setProductsCardList(formSideFilterArray());
  };
   //END collect filter data from checkboxes and price range
  //END FILTERS
   
  //Products render func
  function formFilteredProductsList (checkboxFilterIdsArr, searchbarFilterIdsArr, productsGeneralObj){
    let smallerArr, biggerArr;
    if (checkboxFilterIdsArr.length > searchbarFilterIdsArr.length) {
      smallerArr = searchbarFilterIdsArr;
      biggerArr = checkboxFilterIdsArr;
    } else {
      smallerArr = checkboxFilterIdsArr;
      biggerArr = searchbarFilterIdsArr;
    }
    let filteredProductsIds = smallerArr.filter(item => {
      if (biggerArr.includes(item)) return true;
      return false;
    });
    return productsGeneralObj.filter(item => filteredProductsIds.includes(item.id))
  }  

  function isInCart (idsMap, item) {
    if (idsMap.has(item.id)) {return true;}
    return false;
  }
 
  function showProductCards(productsList){
  if (productsList.length===0) {return (<p>There's no products</p>);}
      if (isGridLayout) {
        return (
          <GridLayout>
            { productsList.map((item)=>(<ContentCard product={item} key={item.id*100} isInCart={isInCart(cartProductsIds, item)}/>)) }
          </GridLayout>
          );
      }
      else {
        return (
          <ListLayout>
            { productsList.map((item)=>(<ContentCardWide product={item} key={item.id}  isInCart={isInCart(cartProductsIds, item)}/>)) }
          </ListLayout>
          );
      }
  }

const products = useMemo(()=>(showProductCards(productsCardsList)), [productsCardsList]);
//END Products render func
  
    return (
      <SectionLayout
          left={
            <FilterForm 
            filtersInfo={filtersInfo} 
            productsGeneralObj={productsGeneralObj}
            onChangeFunction={onChangeFilter}
            />
          }
          rigth={products}>
         </SectionLayout>
    );
}