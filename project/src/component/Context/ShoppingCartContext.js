import React from "react";

export const shoppingCartContextValue = {
    isVisible:false,
    toggleVisibility () {
        console.log("prv",this.isVisible)
        this.isVisible=!this.isVisible;
        console.log("aftr", this.isVisible) 
    }
};
export const ShoppingCartContext = React.createContext(false);