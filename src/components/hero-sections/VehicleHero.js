import React from 'react';


const VehicleHero = ({ hero, backClick, mouseHover }) => {

        return (
            <div className={`center mw5 mw6-ns hidden ba mv4`}>
                <h3 className={`f4 bg-near-black white mv0 pv2 ph3`}>{hero.name}</h3>
                <div class="pa3 bt">
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Model:&nbsp;</span>{hero.model}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Class:&nbsp;</span>{hero.vehicle_class}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Manufacturer:&nbsp;</span>{hero.manufacturer}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Length:&nbsp;</span>{hero.length}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Cost (in credits):&nbsp;</span>{hero.cost_in_credits}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Essential Crew:&nbsp;</span>{hero.crew}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Passengers:&nbsp;</span>{hero.passengers}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Max Speed (atomspheric):&nbsp;</span>{hero.max_atmosphering_speed}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Cargo Capacity (in kilograms):&nbsp;</span>{hero.cargo_capacity}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Consumable Resupplly Max Time:&nbsp;</span>{hero.consumables}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Films:&nbsp;</span>{hero.films}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Pilots:&nbsp;</span>{hero.pilots}</p>
                    <button className={`f6 link dim br1 ph3 pv2 mb2 dib white bg-black`}
                    onClick={backClick}
                    onMouseOver={mouseHover}
                    > 
                    Close
                    </button>
                </div>
            </div>
        )

}

export default VehicleHero;