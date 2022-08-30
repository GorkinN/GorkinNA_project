import React from 'react';
import "./HeaderCategories.css";

const HeaderCategories = () => {
    return (
        <div class="header__categories">
                <ul class="header__categories-menu categories-menu">
                    <li class="categories-menu__item sub-menu__bakery">
                        Bakery
                        <ul class="sub-menu__list_bakery">
                            <li class="sub-menu__item">
                                <input type="radio" name="bakery" value="bakeimry1" id="bakery1"/>
                                <label htmlFor="bakery1">Bakery1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="bakery" value="bakery2" id="bakery2"/>
                                <label htmlFor="bakery2">Bakery2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="bakery" value="bakery3" id="bakery3"/>
                                <label htmlFor="bakery3">Bakery3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__fruit-and-vegetables">
                        Fruit and vegetables
                        <ul class="sub-menu__list_fruit-and-vegetables">
                            <li class="sub-menu__item">
                                <input type="radio" name="fruit-and-vegetables" value="fruit-and-vegetables1"
                                    id="fruit-and-vegetables1"/>
                                <label htmlFor="fruit-and-vegetables1">Fruit and vegetables1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="fruit-and-vegetables" value="fruit-and-vegetables2"
                                    id="fruit-and-vegetables2"/>
                                <label htmlFor="fruit-and-vegetables2">Fruit and vegetables2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="fruit-and-vegetables" value="fruit-and-vegetables3"
                                    id="fruit-and-vegetables3"/>
                                <label htmlFor="fruit-and-vegetables3">Fruit and vegetables3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__meat-and-fish">
                        Meat and fish
                        <ul class="sub-menu__list_meat-and-fish">
                            <li class="sub-menu__item">
                                <input type="radio" name="meat-and-fish" value="meat-and-fish1" id="meat-and-fish1"/>
                                <label htmlFor="meat-and-fish1">Meat and fish1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="meat-and-fish" value="meat-and-fish2" id="meat-and-fish2"/>
                                <label htmlFor="meat-and-fish2">Meat and fish2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="meat-and-fish" value="meat-and-fish3" id="meat-and-fish3"/>
                                <label htmlFor="meat-and-fish3">Meat and fish3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__drinks">
                        Drinks
                        <ul class="sub-menu__list_drinks">
                            <li class="sub-menu__item">
                                <input type="radio" name="drinks" value="drinks1" id="drinks1"/>
                                <label htmlFor="drinks1">Drinks1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="drinks" value="drinks2" id="drinks2"/>
                                <label htmlFor="drinks2">Drinks2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="drinks" value="drinks3" id="drinks3"/>
                                <label htmlFor="drinks3">Drinks3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__kitchen">
                        Kitchen
                        <ul class="sub-menu__list_kitchen">
                            <li class="sub-menu__item">
                                <input type="radio" name="kitchen" value="kitchen1" id="kitchen1"/>
                                <label htmlFor="kitchen1">Kitchen1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="kitchen" value="kitchen2" id="kitchen2"/>
                                <label htmlFor="kitchen2">Kitchen2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="kitchen" value="kitchen3" id="kitchen3"/>
                                <label htmlFor="kitchen3">Kitchen3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__special-nutrition">
                        Special nutrition
                        <ul class="sub-menu__list_special-nutrition">
                            <li class="sub-menu__item">
                                <input type="radio" name="special-nutrition" value="special-nutrition1"
                                    id="special-nutrition1"/>
                                <label htmlFor="special-nutrition1">Special nutrition1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="special-nutrition" value="special-nutrition2"
                                    id="special-nutrition2"/>
                                <label htmlFor="special-nutrition2">Special nutrition2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="special-nutrition" value="special-nutrition3"
                                    id="special-nutrition3"/>
                                <label htmlFor="special-nutrition3">Special nutrition3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__baby">
                        Baby
                        <ul class="sub-menu__list_baby">
                            <li class="sub-menu__item">
                                <input type="radio" name="baby" value="baby1" id="baby1"/>
                                <label htmlFor="baby1">Baby1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="baby" value="baby2" id="baby2"/>
                                <label htmlFor="baby2">Baby2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="baby" value="baby3" id="baby3"/>
                                <label htmlFor="baby3">Baby3</label>
                            </li>
                        </ul>
                    </li>
                    <li class="categories-menu__item sub-menu__pharmacy">
                        Pharmacy
                        <ul class="sub-menu__list_pharmacy">
                            <li class="sub-menu__item">
                                <input type="radio" name="pharmacy" value="pharmacy1" id="pharmacy1"/>
                                <label htmlFor="pharmacy1">Pharmacy1</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="pharmacy" value="pharmacy2" id="pharmacy2"/>
                                <label htmlFor="pharmacy2">Pharmacy2</label>
                            </li>
                            <li class="sub-menu__item">
                                <input type="radio" name="pharmacy" value="pharmacy3" id="pharmacy3"/>
                                <label htmlFor="pharmacy3">Pharmacy3</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    );
}

export default HeaderCategories;
