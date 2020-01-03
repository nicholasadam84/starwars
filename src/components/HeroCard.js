import React from 'react';
import './HeroCard.css'

const HeroCard = ({ hero, backClick, mouseHover }) => {
    hero = hero[0];
    console.log(hero);

            return (
        <div className={`bg-light-blue dib br3 pa3 ma2 bw2 shadow-5`}>
            <button className={`fl`}
               onClick={backClick}
               onMouseOver={mouseHover}
               > 
               Back
            </button>
            <h3 className={`tc`}>{hero.name}</h3>
            <p><span>Model:&nbsp;</span>{hero.model}</p>
            <p><span>Class:&nbsp;</span>{hero.starship_class}</p>
            <p><span>Manufacturer:&nbsp;</span>{hero.manufacturer}</p>
            <p><span>Cost (in credits):&nbsp;</span>{hero.cost_in_credits}</p>
            <p><span>Length (in meters):&nbsp;</span>{hero.length}</p>
            <p><span>Essential Crew:&nbsp;</span>{hero.crew}</p>
            <p><span>Passengers:&nbsp;</span>{hero.passengers}</p>
            <p><span>Max Speed (atomspheric):&nbsp;</span>{hero.max_atmosphering_speed}</p>
            <p><span>Hyperdrive Class:&nbsp;</span>{hero.hyperdrive_rating}</p>
            <p><span>Max Megalights (per hour):&nbsp;</span>{hero.MGLT}</p>
            <p><span>Cargo Capacity (in kilograms):&nbsp;</span>{hero.cargo_capacity}</p>
            <p><span>Consumable Resupplly Max Time:&nbsp;</span>{hero.consumables}</p>
            <p><span>Films:&nbsp;</span>{hero.films}</p>
            <p><span>Pilots:&nbsp;</span>{hero.pilots}</p>
        </div>
    )

}

export default HeroCard;