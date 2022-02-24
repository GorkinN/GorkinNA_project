import React from 'react';
import './Hlink.css';

const Hlink = ({children, refURL}) => {
    return (
        <a className='Hlink' href={refURL}>
            {children}
        </a>
    );
}

export default Hlink;
