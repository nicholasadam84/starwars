import React from 'react';
import Card from './Card';

const CardList = ({ starships, cardClick }) => {
    const cardArray = starships.map((ship, i) => {
        return <Card 
                    key={i} 
                    name={starships[i].name} 
                    model={starships[i].model}
                    cardClick={cardClick} 
                />
    });
    
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;