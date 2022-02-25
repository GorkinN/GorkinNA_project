import React from 'react';
import "./RegularText.css";

const Regulartext = ({children}) => {
    return (
        <p className="regular-text">
            {children}            
        </p>
    );
}

export default Regulartext;
