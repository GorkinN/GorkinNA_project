import React from 'react';
import "./ButtonText.css";

const Buttontext = ({children}) => {
    return (
        <p className='ButtonText'>
            {children}            
        </p>
    );
}

export default Buttontext;
