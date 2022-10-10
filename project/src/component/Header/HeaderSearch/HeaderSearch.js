import React, {useContext, useRef, useLayoutEffect} from 'react';
import "./HeaderSearch.css";
import logoImg from "../../../img/LogoFreshnesecom.png";
import UserAccImg from "../../../img/icons/user-account.svg";
import ShoppingCartImg from "../../../img/icons/shopping-cart.png";
import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import { ShoppingCartProductsContext } from '../../Context/ShoppingCartContext';
import { SearchbarContext } from '../../Context/SearchbarContext';

const HeaderSearch = () => {
    const {setShoppingCartVisibility} = useContext(ShoppingCartContext);
    const {cartProductsIds} = useContext(ShoppingCartProductsContext);
    const {searchText, setSearchText} = useContext(SearchbarContext);
    
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

    let usdCurrency=useRef(0);
       useLayoutEffect(()=>{
    formCurrencyData()
      .then(currencyData => {
        usdCurrency.current = currencyData.USD;
      })
      .catch(err => {
        console.error(err);
        usdCurrency.current = 0;
      });
      });
    
    return (
<div className="header__search _container">
                <div className="header__search-logo logo">
                    <img src={logoImg} alt="logo"/>
                </div>
                <div className="header__search-field search-field">
                    <div className="search-field__search search">
                        <form className="search__search-form" onSubmit={(e)=>(e.preventDefault())}>
                            <input 
                            className="search__input" 
                            type="search" 
                            name="product-search-field"
                            id="product-search-field"
                            onChange={ (e)=>{
                                setSearchText(e.target.value)
                            } }
                            defaultValue=""
                            />
                            <label className="search__label" htmlFor='product-search-field'>
                                {searchText? "" : "Enter product name to search for"}
                            </label>
                        </form>
                    </div>
                </div>
                <p className='header__currency'>
                    1 USD = {Math.ceil(usdCurrency.current*100)/100} RUB
                </p>
                <div className="header__user-field user-field">

                    <div className="user-field__account">
                        <div>
                            <img src={UserAccImg} alt="login"/>
                        </div>
                    </div>

                    <div className="user-field__shopping-cart shopping-cart">
                        <div className="shopping-cart__icon">
                            <button 
                                id="shopping-cart-open-button" 
                                onClick={()=>{setShoppingCartVisibility(prev => !prev)}}>
                                <img src={ShoppingCartImg} alt="shopping cart"/>
                            </button>
                        </div>
                        <div className="shopping-cart__counter">{cartProductsIds.size}</div>
                    </div>

                </div>
            </div>
        
    );
}

export default HeaderSearch;
/*
 <div className="search-field__category-set">
                        <p className="search-field__category-set_chosen">
                            <span>All categories</span>
                        </p>
                        <form className="category-set" name="category-set" action="#" method="post">
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item" checked/>
                                <span className="category-set__item_checked">All categories</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Bakery</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Fruit and vegetables</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Meat and fish</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Drinks</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Special nutrition</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Baby</span>
                            </label>
                            <label className="category-set__item">
                                <input type="radio" name="category-set__item"/>
                                <span className="category-set__item_checked">Pharmacy</span>
                            </label>
                        </form>
                    </div>
*/