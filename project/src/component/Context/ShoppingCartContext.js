import React from "react";

export const shoppingCartContextValue = {
    isVisible:false,
};
export const ShoppingCartContext = React.createContext(false);
export const ShoppingCartProductsContext = React.createContext();