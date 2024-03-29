import React, {lazy, Suspense} from 'react';
import {useState, useContext} from 'react';
import { ProductsSection } from '../ProductsSection/ProductsSection';
import { LayoutButtons } from '../common/LayoutButtons/LayoutButtons';
import "./main.css";

//import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { ShoppingCartContext } from '../Context/ShoppingCartContext';
import { ShoppingCartProductsContext } from '../Context/ShoppingCartContext';

const Main = () => {
    console.log("main render")
    //shopping cart START
    const ShoppingCart = lazy(()=>import('../ShoppingCart/ShoppingCart'))
    let {isShoppingCartVisible} = useContext(ShoppingCartContext);
    let {setCartProductsIds} = useContext(ShoppingCartProductsContext);

    function addToShoppingCart(event) {
      if (event.target.name==="Buy-button")    {
        let id = event.target.dataset.productid;

        setCartProductsIds((prevState)=>{
            return new Map(prevState).set(+id, 1)});
      } 
    }
    //shopping cart END

    //going to fetch productsGeneralObj
    let productsGeneralObj = [
        {id:6,name:"Tomato",description:"Tasty Tomato",priceUSD:1.45,salePercent:21,measure:"kg",category:"Vegetables",rating:1,freshness:"Rotten",farm:"Albuquerque11111111111",deliveryArea:"Any",isBestSelling:false,picture:`./img/6.webp`},
        {id:7,name:"Carrot",description:"Tasty Carrot",priceUSD:1.68,salePercent:22,measure:"kg",category:"Vegetables",rating:2,freshness:"Fresh",farm:"Antananarivu",deliveryArea:"Europe",isBestSelling:true,picture:`./img/7.webp`},
        {id:8,name:"Cucumber",description:"Tasty Cucumber",priceUSD:2.32,salePercent:10,measure:"kg",category:"Vegetables",rating:3,freshness:"Test youself",farm:"Osaka",deliveryArea:"Brasil",isBestSelling:false,picture:`./img/8.webp`},
        {id:9,name:"Cabbage",description:"Tasty Cabbage",priceUSD:0.32,salePercent:12,measure:"kg",category:"Vegetables",rating:4,freshness:"Extra fresh",farm:"Hogwarts",deliveryArea:"Germany",isBestSelling:true,picture:`./img/9.webp`},
        {id:10,name:"Eggplant",description:"Tasty Eggplant",priceUSD:11.23,salePercent:15,measure:"kg",category:"Vegetables",rating:5,freshness:"Rotten",farm:"Barrens",deliveryArea:"Asia",isBestSelling:false,picture:`./img/10.webp`},
        {id:11,name:"Hazelnuts",description:"Tasty Hazelnuts",priceUSD:40.00,salePercent:17,measure:"kg",category:"Nuts",rating:1,freshness:"Fresh",farm:"Thousand Needles",deliveryArea:"Russia",isBestSelling:true,picture:`./img/11.webp`},
        {id:12,name:"Coconut",description:"Tasty Coconut",priceUSD:20.00,salePercent:20,measure:"pcs",category:"Nuts",rating:2,freshness:"Eatable",farm:"Gravity Falls",deliveryArea:"Any",isBestSelling:false,picture:`./img/12.webp`},
        {id:13,name:"Cashews",description:"Tasty Cashews",priceUSD:30.00,salePercent:21,measure:"kg",category:"Nuts",rating:3,freshness:"Extra fresh",farm:"Amitville",deliveryArea:"Europe",isBestSelling:true,picture:`./img/13.webp`},
        {id:14,name:"Frying pan",description:"Tasty Frying pan",priceUSD:99.99,salePercent:22,measure:"pcs",category:"Kitchen",rating:4,freshness:"",farm:"",deliveryArea:"Europe",isBestSelling:true,picture:`./img/14.webp`},
        {id:15,name:"Blender",description:"Tasty Blender",priceUSD:99.99,salePercent:10,measure:"pcs",category:"Kitchen",rating:5,freshness:"",farm:"",deliveryArea:"Brasil",isBestSelling:false,picture:`./img/15.webp`},
        {id:16,name:"Toaster",description:"Tasty Toaster",priceUSD:66.79,salePercent:12,measure:"pcs",category:"Kitchen",rating:1,freshness:"",farm:"",deliveryArea:"Germany",isBestSelling:true,picture:`./img/16.webp`},
        {id:17,name:"Spoon",description:"Tasty Spoon",priceUSD:1.30,salePercent:15,measure:"pcs",category:"Kitchen",rating:2,freshness:"",farm:"",deliveryArea:"Asia",isBestSelling:false,picture:`./img/17.webp`},
        {id:18,name:"Fork",description:"Tasty Fork",priceUSD:1.30,salePercent:17,measure:"pcs",category:"Kitchen",rating:3,freshness:"",farm:"",deliveryArea:"Russia",isBestSelling:true,picture:`./img/18.webp`},
        {id:19,name:"Pineapple",description:"Tasty Pineapple",priceUSD:5.99,salePercent:20,measure:"pcs",category:"Fruits",rating:4,freshness:"Test youself",farm:"Amitville",deliveryArea:"Any",isBestSelling:false,picture:`./img/19.webp`},
        {id:20,name:"Pear",description:"Tasty Pear",priceUSD:3.45,salePercent:21,measure:"kg",category:"Fruits",rating:5,freshness:"Extra fresh",farm:"Black Rock",deliveryArea:"Europe",isBestSelling:true,picture:`./img/20.webp`},
        {id:21,name:"Mango",description:"Tasty Mango",priceUSD:30.00,salePercent:22,measure:"kg",category:"Fruits",rating:2,freshness:"Rotten",farm:"Elwyn forest",deliveryArea:"Brasil",isBestSelling:false,picture:`./img/21.webp`},
        {id:22,name:"Plum",description:"Tasty Plum",priceUSD:6.42,salePercent:10,measure:"kg",category:"Fruits",rating:3,freshness:"Fresh",farm:"Duskwood",deliveryArea:"Germany",isBestSelling:true,picture:`./img/22.webp`},
        {id:23,name:"Apple",description:"Tasty Apple",priceUSD:5.40,salePercent:12,measure:"kg",category:"Fruits",rating:4,freshness:"Test youself",farm:"Albuquerque",deliveryArea:"Asia",isBestSelling:false,picture:`./img/23.webp`},
        {id:24,name:"Sponge",description:"Tasty Sponge",priceUSD:0.30,salePercent:15,measure:"pcs",category:"Miscellaneous",rating:4,freshness:"",farm:"",deliveryArea:"Brasil",isBestSelling:false,picture:`./img/24.webp`},
        {id:25,name:"Brush",description:"Tasty Brush",priceUSD:0.30,salePercent:17,measure:"pcs",category:"Miscellaneous",rating:5,freshness:"",farm:"",deliveryArea:"Germany",isBestSelling:true,picture:`./img/25.webp`},
        {id:26,name:"Pipe",description:"Tasty Pipe",priceUSD:3.95,salePercent:20,measure:"pcs",category:"Miscellaneous",rating:1,freshness:"",farm:"",deliveryArea:"Asia",isBestSelling:false,picture:`./img/26.webp`},
        {id:27,name:"Table",description:"Tasty Table",priceUSD:150.00,salePercent:21,measure:"pcs",category:"Furniture",rating:2,freshness:"",farm:"",deliveryArea:"Russia",isBestSelling:true,picture:`./img/27.webp`},
        {id:28,name:"Chair",description:"Tasty Chair",priceUSD:50.00,salePercent:22,measure:"pcs",category:"Furniture",rating:3,freshness:"",farm:"",deliveryArea:"Any",isBestSelling:false,picture:`./img/28.webp`},
        {id:1,name:"Duck",description:"Tasty Duck",priceUSD:10.00,salePercent:10,measure:"kg",category:"Meat",rating:1,freshness:"Extra fresh",farm:"Gravity Falls",deliveryArea:"Europe",isBestSelling:true, picture:`./img/1.webp`},
        {id:2,name:"Beef",description:"Tasty Beef",priceUSD:20.00,salePercent:12,measure:"kg",category:"Meat",rating:2,freshness:"Rotten",farm:"Amitville",deliveryArea:"Brasil",isBestSelling:false,picture:`./img/2.webp`},
        {id:3,name:"Pork",description:"Tasty Pork",priceUSD:7.60,salePercent:15,measure:"kg",category:"Meat",rating:3,freshness:"Fresh",farm:"Black Rock",deliveryArea:"Germany",isBestSelling:true,picture:`./img/3.webp`},
        {id:4,name:"Venison",description:"Tasty Venison",priceUSD:40.00,salePercent:17,measure:"kg",category:"Meat",rating:4,freshness:"Test youself",farm:"Elwyn forest",deliveryArea:"Asia",isBestSelling:false,picture:`./img/4.webp`},
        {id:5,name:"Chicken",description:"Tasty Chicken",priceUSD:5.23,salePercent:20,measure:"kg",category:"Meat",rating:5,freshness:"Extra fresh",farm:"Duskwood",deliveryArea:"Russia",isBestSelling:true,picture:`./img/5.webp`},
    ];
    
    let [isGridLayout, setLayout] = useState(true);
    function layoutControl(e){
        if (e.target.dataset.layout==="grid" && !isGridLayout) {setLayout(true)} 
        else if (e.target.dataset.layout==="list" && isGridLayout) {setLayout(false)}           
    }

  
    return (
        <main className="main" onClick={(event)=>addToShoppingCart(event)}>
            {isShoppingCartVisible && 
            <Suspense fallback={<p style={{position:'absolute'}}>Loading...</p>}>
                <ShoppingCart productsGeneralObj={productsGeneralObj}/>
            </Suspense>
            }
            <LayoutButtons isGrid={isGridLayout} onClick={(event)=>(layoutControl(event))}/>
            <ProductsSection 
            
            isGridLayout={isGridLayout} 
            productsGeneralObj={productsGeneralObj}
            ></ProductsSection>
        </main>
    );
}

export default Main;
//<BannerSection categories={categories}/>  
//<BestSellingSection productsList={products}></BestSellingSection> 
 /*<section className="customers-reviews">
                <div className="customers-reviews__box">

                    <div className="customers-reviews__title-box section-title _container">
                        <h2 className="caption_h2">Our customers says</h2>
                        <button className="btn-transparent">View more</button>
                    </div>



                    <div className="customers-reviews__content-box">
                        <button className="customers-reviews__switcher customers-reviews__switcher_left">
                            <img src="img/buttons/review-switcher-button.png" height="52" width="34" alt="switch"/>
                        </button>
                        <div className="customers-reviews__card-box">



                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" height="49" width="48" alt="avatar"/>
                                </picture>
                            </div>


                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" height="49" width="48" alt="avatar"/>
                                </picture>
                            </div>


                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" alt="avatar"/>
                                </picture>
                            </div>


                            <div className="customers-reviews__content-card">
                                <blockquote className="customers-reviews__content-card-text">
                                    “ This is an super space for your customers qoute. Don’t worry it works smooth as
                                    pie. You will get all what you need by writiing a text here “
                                </blockquote>
                                <cite className="customers-reviews__content-card-username">
                                    Name and Surname
                                </cite>
                                <picture className="customers-reviews__content-card-avatar">
                                    <img src="img/avatars/avatar1.jpg" height="49" width="48" />
                                </picture>
                            </div>



                        </div>
                        <button className="customers-reviews__switcher customers-reviews__switcher_right">
                            <img src="img/buttons/review-switcher-button.png" height="52" width="34" alt="switcher"/>
                        </button>
                    </div>

                </div>
            </section>
*/