import React from 'react';
import './SearchBox.css'

const SearchBox = ({ handleChange }) => {
    return(
        <div className='search-container'>
            <input 
            onChange={(e) => handleChange(e.target.value)}
            placeholder='Type KeyWords..'
            className='search-input'
             />
        </div>
    );

};

export default SearchBox;