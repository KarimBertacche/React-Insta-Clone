import React from 'react';
import './MomentComponent.css';
import moment from 'moment';

let newDate = Date.parse("July 17 2017, 12:42:40 pm");


function MomentComponent(props) {
    return(
        <p className="post-date">
            {
                moment(newDate).startOf('day').fromNow()
            }
        </p> 
    )
}

export default MomentComponent;
