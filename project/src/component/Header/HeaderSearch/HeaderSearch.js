import React from 'react';
import "./HeaderSearch.css";

const HeaderSearch = () => {
    return (
        <div className="header__search _container">
                <div className="header__search-logo logo">
                    <img src='src/img/LogoFreshnesecom.png' height="18" width="177" alt="logo" />
                </div>
                <div className="header__search-field search-field">
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
                    <div className="search-field__search search">
                        <form className="search__search-form" action="" method="get">
                            <input className="search__input" type="search" name="product-search-field"
                                id="product-search-field"/>
                            <label className="search__label" for="product-search-field">
                                Search Products, categories...
                            </label>
                        </form>
                    </div>
                </div>
                <div className="header__user-field user-field">
                    <div className="user-field__account">
                        <a href="#"><img src="img\icons\user-account.svg" alt="login"/></a>
                    </div>
                    <div className="user-field__shopping-cart shopping-cart">
                        <div className="shopping-cart__icon">
                            <button id="shopping-cart-open-button"><img src="img/icons/shopping-cart.png" alt="shopping cart"/></button>
                        </div>
                        <div className="shopping-cart__counter">4</div>
                    </div>
                </div>
            </div>
    );
}

export default HeaderSearch;
