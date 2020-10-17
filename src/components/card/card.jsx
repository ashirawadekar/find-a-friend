import React from 'react';

import './card.css';

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="friend" src={`https://robohash.org/${props.friend.id}?set=set5&size=180x180`} />
            <h2> {props.friend.name}</h2>
            <p> {props.friend.email} </p>
        </div>
        );
}