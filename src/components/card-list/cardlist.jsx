import React from 'react';

import './card-list.css';

import {Card} from '../card/card';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.friends.map( friend =>
                    <Card key={friend.id} friend={friend} />
                )
            }
        </div>
        )
};