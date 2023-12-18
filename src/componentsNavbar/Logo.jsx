import React from 'react';
import imagePath from '../assets/react.svg';
//change image here                 ^

export const Logo = () => {
    return (
        <img className="logoimage" src={imagePath} alt="Image" width="170" height="41"/>
    );
};


