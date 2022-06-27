import './App.css';
import Wrapper from './component/Wrapper/Wrapper';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
import GlobalFonts from "./component/Text/fonts/GlobalFonts.js";
import {ThemeProvider} from "styled-components";
import theme from "./component/common/themes/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalFonts/>
        <Header/>
        <Main/>
        <Footer/>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
