import React from 'react';
import styled from 'styled-components';

const StylesSearchInput = styled.div`
    width: 32%;

    input { 
        height: 25px;
        width: 200px;
        background-color: #fafafa; 
        border-radius: 5px;
        text-align: center;
        font-size: 1.5rem;
        outline: 0;
    }
`;

function SearchInput(props) {
    return(
        <StylesSearchInput>
            <input 
            type="text"
            value={props.searchInput}
            onChange={props.searchValue}
            placeholder={` Search`}
            onKeyPress={props.searchNow}/>
        </StylesSearchInput> 
    );
}

export default SearchInput;