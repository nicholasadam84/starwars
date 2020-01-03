import React from 'react';

const Card = ({ name, model, url }) => {

    return (
        <div className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`}>
            <h3 className={`tc`}>{name}</h3>
            <p>{model}</p>
            <p>{url}</p>
        </div>
    )

}

export default Card;