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



function App() {
  const [isShoppingCartVisible, setShoppingCartVisibility] = useState(false);
  let [cartProductsIds, setCartProductsIds] = useState(new Map());
  
  return (
    <ThemeProvider theme={theme}>
    <ShoppingCartContext.Provider value={{isShoppingCartVisible, setShoppingCartVisibility}}>
    <ShoppingCartProductsContext.Provider value={{cartProductsIds, setCartProductsIds}}>
        <Wrapper onClick={()=>(console.log("hahahha"))}>
          <GlobalFonts/>
          <Header/>
          <Main/>
          <Footer/>
        </Wrapper>
      </ShoppingCartProductsContext.Provider>
    </ShoppingCartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
