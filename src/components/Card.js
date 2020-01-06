import React from 'react';

const Card = ({ name, title, url, divClick, mouseHover }) => {
    let heading = '';
    if (name) {
        heading = name;
    } else {
        heading = title;
    }

    return (
        <div className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`} 
            onClick={divClick} 
            onMouseOver={mouseHover}
            data-hero_url={url}>
            <h3 className={`tc`}>{heading}</h3>
        </div>

    )

}

export default Card;