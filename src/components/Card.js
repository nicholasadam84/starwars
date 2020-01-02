import React from 'react';

const Card = ({ name, model }) => {
    return (
        <div>
            <h3>Starship</h3>
            <p>Name: {name}</p>
            <p>Model: {model} </p>
        </div>
    )

}

export default Card;