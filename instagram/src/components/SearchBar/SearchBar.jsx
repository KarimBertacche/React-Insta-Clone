import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return(
      <header>
        <div className="logo-wrapper">    
          {/* <i className="fab fa-instagram"></i> */}
          <h3>Instagram</h3>
        </div>
        <div className="search-wrapper">
          <input 
            className="search-bar"
            type="text"
            value={props.searchValue}
            placeholder="Search"/>
        </div> 
        <div className="nav-icons">
  
        </div>
      </header>
  
    );
}

export default SearchBar;