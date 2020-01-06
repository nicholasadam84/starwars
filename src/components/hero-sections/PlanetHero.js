import React from 'react';


const PlanetHero = ({ hero, backClick, mouseHover }) => {
    
    //hero = hero[0];

        return (
            <div className={`center mw5 mw6-ns hidden ba mv4`}>
                <h3 className={`f4 bg-near-black white mv0 pv2 ph3`}>{hero.name}</h3>
                <div class="pa3 bt">
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Diameter:&nbsp;</span>{hero.diameter}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Rotation Period:&nbsp;</span>{hero.rotation_period}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Orbital Period:&nbsp;</span>{hero.orbital_period}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Gravity:&nbsp;</span>{hero.gravity}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Population:&nbsp;</span>{hero.population}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Climate:&nbsp;</span>{hero.climate}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Terrain:&nbsp;</span>{hero.terrain}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Surface Water:&nbsp;</span>{hero.surface_water}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Residents:&nbsp;</span>{hero.residents}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Films:&nbsp;</span>{hero.films}</p>
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

export default PlanetHero;