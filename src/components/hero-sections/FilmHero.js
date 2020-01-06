import React from 'react';


const FilmHero = ({ hero, backClick, mouseHover }) => {
    
    //hero = hero[0];

        return (
            <div className={`center mw5 mw6-ns hidden ba mv4`}>
                <h3 className={`f4 bg-near-black white mv0 pv2 ph3`}>{hero.title}</h3>
                <div class="pa3 bt">
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Episode:&nbsp;</span>{hero.episode_id}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Opening Crawl:&nbsp;</span>{hero.opening_crawl}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Director:&nbsp;</span>{hero.director}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Producer:&nbsp;</span>{hero.producer}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Release Date:&nbsp;</span>{hero.release_date}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Species:&nbsp;</span>{hero.species}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Starships:&nbsp;</span>{hero.starships}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Vehicles:&nbsp;</span>{hero.vehicles}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Characters:&nbsp;</span>{hero.characters}</p>
                    <p className={`f6 f5-ns lh-copy measure mv0`}><span>Planets:&nbsp;</span>{hero.planets}</p>
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

export default FilmHero;