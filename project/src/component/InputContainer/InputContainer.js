import React from 'react';
import "./InputContainer.css";

const InputContainer = ({children}) => {
    return (
        <div className="InputContainer">
            {children}            
        </div>
    );
}

export default InputContainer;
