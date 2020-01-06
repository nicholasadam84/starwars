import React from 'react';


const SpeciesHero = ({ hero, backClick, mouseHover }) => {
    
    //hero = hero[0];

        return (
            <div className={`center mw5 mw6-ns hidden ba mv4`}>
                <h3 className={`f4 bg-near-black white mv0 pv2 ph3`}>{hero.name}</h3>
                <div class="pa3 bt">
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Classification:&nbsp;</span>{hero.classification}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Designation:&nbsp;</span>{hero.designation}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Avg Height:&nbsp;</span>{hero.average_height}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Avg Lifespan:&nbsp;</span>{hero.average_lifespan}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Eye Colors:&nbsp;</span>{hero.eye_colors}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Hair Colors:&nbsp;</span>{hero.hair_colors}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Skin Colors:&nbsp;</span>{hero.skin_colors}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Language:&nbsp;</span>{hero.language}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Homeworld:&nbsp;</span>{hero.homeworld}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>People:&nbsp;</span>{hero.people}</p>
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

export default SpeciesHero;