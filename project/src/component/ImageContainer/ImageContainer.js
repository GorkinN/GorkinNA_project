import React from 'react';

const ImageContainer = ({url, alt}) => {
    return (
        <img src={url} alt={alt}/>
    );
}

export default ImageContainer;
