import React from 'react';

const HeroCard = ({ 
        name, 
        model,
        starship_class,
        manufacurer,
        cost_in_credits,
        length,
        crew,
        passengers,
        max_atmosphereing_speed,
        hyperdrive_rating,
        MGLT,
        cargo_capacity,
        consumables,
        films,
        pilots }) => {
    return (
        <div className={`bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5`}>
            <h3 className={`tc`}>{name}</h3>
            <p>Model:{model}</p>
            <p>Class:{starship_class}</p>
            <p>Manufacturer: {manufacurer}</p>
            <p>Cost (in credits):{cost_in_credits}</p>
            <p>Length (in meters): {length}</p>
            <p>Essential Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
            <p>Max Speed (atomspheric): {max_atmosphereing_speed}</p>
            <p>Hyperdrive Class: {hyperdrive_rating}</p>
            <p>Max Megalights (per hour): {MGLT}</p>
            <p>Cargo Capacity (in kilograms): {cargo_capacity}</p>
            <p>Consumable Resupplly Max Time: {consumables}</p>
            <p>Films: </p>
            <p>Pilots: </p>

        </div>
    )

}

export default HeroCard;