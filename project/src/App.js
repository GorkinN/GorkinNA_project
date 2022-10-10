import './App.css';
import React, {useState} from 'react';
import Wrapper from './component/Wrapper/Wrapper';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import GlobalFonts from "./component/Text/fonts/GlobalFonts.js";
import {ThemeProvider} from "styled-components";
import theme from "./component/common/themes/theme";
import { ShoppingCartContext} from './component/Context/ShoppingCartContext';
import { ShoppingCartProductsContext } from './component/Context/ShoppingCartContext';
import {SearchbarContext} from './component/Context/SearchbarContext';

function App() {
  const [isShoppingCartVisible, setShoppingCartVisibility] = useState(false);
  let [cartProductsIds, setCartProductsIds] = useState(new Map());
  let [searchText, setSearchText] = useState("");
  
  async function formCurrencyData (){
    try {
      let currencyData = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
      let currencyJSON = await currencyData.json();
      let USD = await currencyJSON.Valute.USD.Value;
      let EUR = await currencyJSON.Valute.EUR.Value;
      let curr = {
        "USD":USD, 
        "EUR":EUR
        };
      return curr;
   } catch(error) {
      console.error(error);
   }
  }
  let usdCurrency;

  formCurrencyData()
  .then(currencyData => {
    usdCurrency = currencyData.USD;
  })
  .catch(err => console.error(err));


  

  
  return (
    <ThemeProvider theme={theme}>
    <ShoppingCartContext.Provider value={{isShoppingCartVisible, setShoppingCartVisibility}}>
    <ShoppingCartProductsContext.Provider value={{cartProductsIds, setCartProductsIds}}>
        <Wrapper>
          <GlobalFonts/>
          
          <SearchbarContext.Provider value={{searchText, setSearchText}}>
            <Header/>
            <Main/>
          </SearchbarContext.Provider>

          <Footer/>
        </Wrapper>
      </ShoppingCartProductsContext.Provider>
    </ShoppingCartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
