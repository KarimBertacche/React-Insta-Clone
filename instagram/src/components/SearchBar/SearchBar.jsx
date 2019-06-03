import React from 'react';
import './SearchBar.css';
import instaLogo from '../../insta-writing.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';


function SearchBar(props) {
    return(
      <header>
        <div className="logo-wrapper"> 
          <div className="insta-logo-wrapper">
            <FontAwesomeIcon className="insta-logo" icon={faInstagram} />
          </div>   
          <figure className="insta-writing">
            <img src={instaLogo} alt="insta writing"/>
          </figure>
        </div>
        <div className="search-wrapper">
          <input 
            className="search-bar"
            type="text"
            value={props.searchValue}
            placeholder={` Search`}/>
        </div> 
        <div className="nav-icons">
          <FontAwesomeIcon className="nav-logo" icon={faCompass} />
          <FontAwesomeIcon className="nav-logo" icon={faHeart} />
          <FontAwesomeIcon className="nav-logo" icon={faUser} />      
        </div>
      </header>
  
    );
}

export default SearchBar;