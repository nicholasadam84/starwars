import React from 'react';

const Card = ({ name, model }) => {
    return (
        <div className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`}>
            <h3 className={`tc`}>{name}</h3>
            <p>{model}</p>
        </div>
    )

}

export default Card;