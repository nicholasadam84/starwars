import React from 'react';

const Card = ({ name, model, url, divClick, mouseHover }) => {

    return (
        <div className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`} onClick={divClick} 
            onMouseOver={mouseHover}
            data-hero_url={url}>
            <h3 className={`tc`}>{name}</h3>
            <p>{model}</p>

        </div>
    )

}

export default Card;