import React from 'react';
import StarshipHero from './hero-sections/StarshipHero';
import PeopleHero from './hero-sections/PeopleHero'
import FilmHero from './hero-sections/FilmHero';
import PlanetHero from './hero-sections/PlanetHero';
import SpeciesHero from './hero-sections/SpeciesHero';
import VehicleHero from './hero-sections/VehicleHero';
import './HeroCard.css';


const HeroCard = ({ hero, heroURL, show, backClick, mouseHover }) => {
    
    if (!show) {
        return null;
    }
    
    hero = hero[0];

    if (heroURL.includes('starship')) {
        return ( <StarshipHero hero={hero} backClick={backClick} mouseHover={mouseHover}/> )
            } 
    if (heroURL.includes('people')) {
        return ( <PeopleHero hero={hero} backClick={backClick} mouseHover={mouseHover}/> )
        }
    if (heroURL.includes('films')) {
        return ( <FilmHero hero={hero} backClick={backClick} mouseHover={mouseHover}/> )
        }
    if (heroURL.includes('planets')) {
        return ( <PlanetHero hero={hero} backClick={backClick} mouseHover={mouseHover}/> )
        }
    if (heroURL.includes('species')) {
        return ( <SpeciesHero hero={hero} backClick={backClick} mouseHover={mouseHover}/> )
        }
    if (heroURL.includes('vehicles')) {
        return ( <VehicleHero hero={hero} backClick={backClick} mouseHover={mouseHover}/> )
        }
}

export default HeroCard;