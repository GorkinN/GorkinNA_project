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


function App() {
  const [isShoppingCartVisible, setShoppingCartVisibility] = useState(false);
  let shoppingCartItemsIDs = new Set();

  function addToShoppingCard(event) {
    console.log("click");
    console.log(event.target);
    if (event.target.name==="Buy-button")    {
      console.log('event.target.product-id: ',event.target.dataset.productID);
      shoppingCartItemsIDs.add(event.target.dataset.productID);
      console.log("shoppingCartItemsIDs", shoppingCartItemsIDs)
    } 
  }
  return (
    <ThemeProvider theme={theme}>
    <ShoppingCartContext.Provider value={{isShoppingCartVisible, setShoppingCartVisibility}}>
        <Wrapper onClick={()=>(console.log("hahahha"))}>
          <GlobalFonts/>
          <Header/>
          <Main addToShoppingCard={()=>addToShoppingCard()}/>
          <Footer/>
        </Wrapper>
    </ShoppingCartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
