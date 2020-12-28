import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder, changeHandler }) => {
    return <input type='search' placeholder={placeholder} onChange={changeHandler} />
}