import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder, changeHandler }) => {
    return <input  className='search' type='search' placeholder={placeholder} onChange={changeHandler} />
}