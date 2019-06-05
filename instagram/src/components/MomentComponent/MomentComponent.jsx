import React from 'react';
import './MomentComponent.css';
import moment from 'moment';

function MomentComponent(props) {

    let newDate = props.date.split('').filter((el, idx) => {
        if(idx !== '2' && idx !== '3' && idx !== '4') {
            return el !== 't' && el !== 'h'
        }
        return el
    }).join('');
    newDate = Date.parse(newDate);
    
    return(
        <p className="post-date">
            {
                moment(newDate).startOf('minute').fromNow()
            }
        </p> 
    )
}

export default MomentComponent;
