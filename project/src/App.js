import './App.css';
import React, {useState} from 'react';
import Wrapper from './component/Wrapper/Wrapper';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import GlobalFonts from "./component/Text/fonts/GlobalFonts.js";
import {ThemeProvider} from "styled-components";
import theme from "./component/common/themes/theme";
import { ShoppingCartContext, shoppingCartContextValue } from './component/Context/ShoppingCartContext';


function App() {
  const [isShoppingCartVisible, setShoppingCartVisibility] = useState(false)
  return (
    <ThemeProvider theme={theme}>
    <ShoppingCartContext.Provider value={{isShoppingCartVisible, setShoppingCartVisibility}}>
        <Wrapper>
          <GlobalFonts/>
          <Header/>
          <Main/>
          <Footer/>
        </Wrapper>
    </ShoppingCartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
