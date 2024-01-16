import React, {useState, useContext} from 'react';
import styled from "styled-components";
import prodPicDefault from './image/vegs.jpg';
import trashcan from "../common/trash-can.png";
import {CardPictureContainer, CardPicture, CardSale, CardTitle, CardDescription, CardPrice, CardPriceOff} from "./ContentCardCommonJSX";
import {ShoppingCartProductsContext} from "../Context/ShoppingCartContext";

let ShoppingCartCard = styled.li`
position: relative;
display:flex;
align-items:center;
box-sizing: border-box;
margin-bottom:32px;
padding-right:32px;
border: 1px solid #D1D1D1;
border-radius: 12px;
@media (max-width:${props=> props.theme.tablet}) {
    margin-bottom:16px;
}
@media (max-width:${props=> props.theme.smallPhone}) {
    flex-direction:column;
    margin-bottom:16px;
    padding-right:0px;
    padding-bottom:10px;
}
:nth-last-child(1) {
    margin-bottom:0;
}
`;
const Container = styled.div`
display:flex;
align-self:flex-start;
flex-direction:column;
padding:10px;
@media (max-width:${props=> props.theme.smallPhone}) {
   
}
`;
const CardPictureContainerWide=styled(CardPictureContainer)`
max-width:350px;
height:280px;
margin-bottom:0;
padding:0;
box-shadow: none;
@media (max-width:${props=> props.theme.smallPhone}) {
    height:auto;
    max-width:none;
    margin-bottom:10px;
}
`;
const CardInfo = styled.div`
display:flex;
flex-direction:column;
margin-left:32px;
@media (max-width:${props=> props.theme.smallPhone}) {
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    margin-left:0;
    margin-bottom:10px;
}
`;
const CardPriceBox=styled.div`
margin:5px 0;
@media (max-width:${props=> props.theme.smallPhone}) {
    margin:0;
    margin-left:15px;
}
`;
const CounterButton=styled.button`
background:none;
border:none;
padding:5px 5px;
font-size:1.5rem;
margin:0 auto;
width:3rem;
box-shadow:0 0 2px gray;
border-radius:50%;
transition: 0.1s ease-in-out;
:hover {
    box-shadow:0 0 4px ${props => props.theme.secondaryColor};
}
:active {
    box-shadow:inset 0 0 4px ${props => props.theme.secondaryColor};
}
`;
const NumberInputLabel = styled.div`
display:flex;
flex-direction:column;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 26px;
max-width:8rem;
color: #151515;
@media (max-width:${props => props.theme.laptop}) {
    :nth-last-child(1) {
        margin-top:10px;
    }
}
`;
const TrashcanButton=styled.button`
display:block;
position:relative;
transition:0.1s ease-in-out;
width:30px;
height:30px;
margin:15px;
margin-left:0;
border:none;
border-radius:12px;
background:none;
background-image: url(${trashcan});
background-size: contain;
background-repeat:no-repeat;
background-position:50% 50%;
:hover {
    box-shadow: 
    0 0 3px 5px pink,
    inset 0 0 5px 1px red;
    ::after {
        content:"delete";
        position:absolute;
        top:25%;
        left:115%;
        @media (max-width:${props=> props.theme.smallPhone}) {
            top:110%;
            left:-10%;
        }
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color:#A9A9A9;
    }
}
`;
const TotalValue = styled.p`
margin-top:10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
min-width:9rem;
color: ${props =>props.theme.baseColor};
overflow:hidden;
text-overflow:ellipsis;
max-width:10rem;
@media (max-width:${props => props.theme.smallPhone}) {
    width:80%;
}
`;


export const ContentCardShoppingCart = ({product}) => {
    console.log("sh cart render:", product.id)
    let {
        salePercent:sale = 50, 
        name: title = "Product Title",
        description = "Space for a small product description",
        priceUSD: price,
        picture,
        } = product;
    let saleText = sale ? `-${(sale)}%` : "";
    let prevPrice = sale>0 ? Math.ceil(price/(1 - sale/100)*100)/100 : "";
    let priceText = price===0 ? `FREE` : `${price} USD`;

    let {cartProductsIds, setCartProductsIds} = useContext(ShoppingCartProductsContext);
    let [quantity, setQuantity] = useState(cartProductsIds.get(product.id));
/*
    function changeQuantity (event){
        console.log('changeQuantity')
        if (event.target.value<0) {event.target.value=1}

        setQuantity(event.target.value);
        setCartProductsIds((prevState)=>{
            prevState.set(+product.id, +event.target.value);
            let newMap = new Map(prevState)
            return new Map(newMap);
        });
    }
*/
    return (
        <ShoppingCartCard id={product.id} key={`ShoppingCartCardKey=${product.id}`}>
            <CardPictureContainerWide>
                <CardPicture src={`${picture || prodPicDefault}`} alt="product picture"/>
                <CardSale>
                    {saleText}
                </CardSale>
            </CardPictureContainerWide>

            <Container>
                <CardInfo>
                    <div>
                        <CardTitle bigLetters>
                            {title}
                        </CardTitle>

                        <CardDescription>
                            {description}
                        </CardDescription>
                    </div>

                    <CardPriceBox>
                        <CardPrice>
                            {priceText}
                        </CardPrice>
                        <CardPriceOff>
                            {prevPrice}
                        </CardPriceOff>
                    </CardPriceBox>
                    
                    <NumberInputLabel>
                        Set quantity
                        <div style={{display:'flex', flexDirection:'column', flexGrow:'1', justifyContent:'center', alignContent:'center', padding:'5px'}}>
                        <CounterButton
                        onClick={(e)=>{
                            setQuantity(prev => prev+1);
                            setCartProductsIds((prevState)=>{
                                let newVal = +prevState.get(+product.id) + 1;
                                prevState.set(+product.id, +newVal);
                                let newMap = new Map(prevState)
                                return new Map(newMap);
                            });
                        }}>+</CounterButton>

                        <p style={{textAlign:'center', fontSize:`1.3rem`, padding:'5px 5px'}}>{quantity}</p>

                        <CounterButton 
                        onClick={()=>{
                            setQuantity((prev) => {
                                let newVal = +prev-1;
                                console.log("!!prev: ",prev)
                                console.log("!!newVal: ",newVal)
                                console.log("!!prev-1<=0: ",(+prev-1)<=0)
                                if (newVal<=0) {newVal=1}
                                return newVal;
                            });
                            setCartProductsIds((prevState)=>{
                                let newVal = +prevState.get(+product.id) - 1;
                                newVal = (newVal<=0) ? 1 : newVal;
                                prevState.set(+product.id, +newVal);
                                let newMap = new Map(prevState)
                                return new Map(newMap);
                            });
                            }}>-</CounterButton>
                        </div>
                    </NumberInputLabel>
                    
                    <TotalValue>
                        Total: {Math.ceil(quantity*price*100)/100} USD
                    </TotalValue>

                    <TrashcanButton 
                    name="delete-item" 
                    data-productid={+product.id}
                    />

                </CardInfo>

            </Container>
            

        </ShoppingCartCard>
    );
}
