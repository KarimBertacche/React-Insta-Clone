import React from 'react';
import SearchInput from 'react';
import HeaderLogos from './HeaderLogos';
import instaLogo from '../../insta-writing.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StylesSearchBar = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between; 
    border-bottom: 2px solid #515bd4;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 30px; 
    z-index: 10;
    text-align: center;

  section {
    width: 32%;
    display: flex;
    justify-content: flex-start;
    align-content: center;

    div {
      width: 50px;
      border-right: 2px solid #000;

      .insta-logo {
        font-size: 4rem;
        padding-right: 30px;
      }
    }
  }

  figure {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    margin-left: 0;

    img {
        display: flex;
        justify-content: flex-start;
        width: 60%;
        margin-left: 0;
    } 
  }
`;

function SearchBar(props) {
    return(
      <StylesSearchBar>
        <section className="logo-wrapper"> 
          <div className="insta-logo-wrapper">
            <FontAwesomeIcon className="insta-logo" icon={faInstagram} />
          </div>   
          <figure className="insta-writing">
            <img src={instaLogo} alt="insta writing"/>
          </figure>
        </section>
        <SearchInput 
          searchInput={props.searchInput}
          searchValue={props.searchValue}
          searchNow={props.searchNow}
        />
        <HeaderLogos />
      </StylesSearchBar>
    );
}

export default SearchBar;