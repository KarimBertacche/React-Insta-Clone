import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StylesHeaderLogos = styled.section`
    width: 32%;
    display: flex;
    justify-content: flex-end;

    .nav-logo {
        font-size: 3.5rem;
        margin-right: 30px;
        cursor: pointer;
    }
`;

function HeaderLogos() {
    return(
        <StylesHeaderLogos>
          <FontAwesomeIcon className="nav-logo" icon={faCompass} />
          <FontAwesomeIcon className="nav-logo" icon={faHeart} />
          <FontAwesomeIcon className="nav-logo" icon={faUser} />      
        </StylesHeaderLogos>
    );
}

export default HeaderLogos;