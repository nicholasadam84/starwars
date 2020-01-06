import React from 'react';


const PeopleHero = ({ hero, backClick, mouseHover }) => {
    
    //hero = hero[0];

        return (
            <div className={`center mw5 mw6-ns hidden ba mv4`}>
                <h3 className={`f4 bg-near-black white mv0 pv2 ph3`}>{hero.name}</h3>
                <div class="pa3 bt">
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Birth Year:&nbsp;</span>{hero.birth_year}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Eye Color:&nbsp;</span>{hero.eye_color}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Gender:&nbsp;</span>{hero.gender}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Hair Color:&nbsp;</span>{hero.hair_color}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Height:&nbsp;</span>{hero.height}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Mass:&nbsp;</span>{hero.mass}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Skin Color:&nbsp;</span>{hero.skin_color}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Homeworld:&nbsp;</span>{hero.homeworld}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Films:&nbsp;</span>{hero.films}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Species:&nbsp;</span>{hero.species}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Starships:&nbsp;</span>{hero.starships}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Vehicles:&nbsp;</span>{hero.vehicles}</p>
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

export default PeopleHero;