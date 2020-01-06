import React from 'react';
import Card from './Card';
//import HeroCard from './HeroCard';

const CardList = ({ filteredArray, divClick, mouseHover }) => {

        const cardArray = filteredArray.map((item, i) => {
            return  <Card 
                        key={i} 
                        name={filteredArray[i].name} 
                        title={filteredArray[i].title} 
                        url={filteredArray[i].url}
                        divClick={divClick}
                        mouseHover={mouseHover}
                    />
        });
        
        return (
            <div>
                {cardArray}
            </div>
        )
    }

export default CardList;