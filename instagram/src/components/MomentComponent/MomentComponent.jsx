import React from 'react';
import './MomentComponent.css';
import moment from 'moment';

function MomentComponent(props) {
    const correctDate = () => {
        let newDate = props.date.split('').filter(el => el !== 't' && el !== 'h').join('');
        newDate = Date.parse(newDate);
        return newDate;
    }
    
    return(
        <p className="post-date">
            {
                moment(correctDate()).startOf('day').fromNow()
            }
        </p> 
    )
}

export default MomentComponent;
