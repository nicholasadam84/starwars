import React, {useState} from 'react';

function Card ({ name, model, url, cardClick }) {
    //console.log(props);
    const [showHero, setShowHero] = useState(false);
    const [heroURL, setHeroURL] = useState(``);

    const handleCardClick = () => {
        setShowHero(!showHero);
        setHeroURL(url);
    }

    return (
        console.log(showHero),
        console.log(heroURL),
        <div 
            className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`}
            onClick={handleCardClick}
        >
            <h3 className={`tc`}>{name}</h3>
            <p>{model}</p>
            <p>{url}</p>
        </div>
    )

}

export default Card;