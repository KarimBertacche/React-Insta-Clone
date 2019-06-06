import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StylesPostDate = styled.p`
    width: 100%;
    height: 20px;
    margin: 0 auto;
    border-bottom: 3px solid #515bd4;
    padding-bottom: 5px;
    font-size: 1.4rem;
    text-align: left;
    color: rgb(150, 150, 150);
`;

function MomentComponent(props) {

    let newDate = props.date.split('').filter((el, idx) => {
        if(idx !== '2' && idx !== '3' && idx !== '4') {
            return el !== 't' && el !== 'h'
        }
        return el
    }).join('');
    newDate = Date.parse(newDate);
    
    return(
        <StylesPostDate>
            {
                moment(newDate).startOf('minute').fromNow()
            }
        </StylesPostDate> 
    )
}

export default MomentComponent;
