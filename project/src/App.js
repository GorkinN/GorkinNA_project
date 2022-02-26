import './App.css';
import Wrapper from './component/Wrapper/Wrapper';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Main from './component/Main/Main';
function App() {
  return (
    <Wrapper>
      <Header/>
      <Main></Main>
      <Footer/>
    </Wrapper>
  );
}

export default App;
