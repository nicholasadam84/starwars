import React, { Component } from 'react';
import Card from './Card';
import HeroCard from './HeroCard';

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHero: false,
            heroURL: ''
        }
    }
    
    handleDivClick = (event) => {
        //console.log('handleDivClick', event.currentTarget.dataset.hero_url);
        this.setState({ heroURL: event.currentTarget.dataset.hero_url });
        this.setState({ showHero: true });
    }

    handleBackClick = (event) => {
        this.setState({ showHero: false });
    }

    onMouseHover(event) {
        event.target.style.cursor = 'pointer';
    }
    
    render() {
        const heroData = this.props.unfilteredStarships.filter(starship => {
            return starship.url.includes(this.state.heroURL)
        })

        if (this.state.showHero) {
            return (
                <div>
                    <HeroCard 
                        hero={heroData}
                        backClick={this.handleBackClick}
                        unfilteredStarships={this.props.unfilteredStarships}
                        mouseHover={this.onMouseHover}
                    />
                </div>
            )
        } else {
            const cardArray = this.props.starships.map((ship, i) => {
                return <Card 
                            key={i} 
                            name={this.props.starships[i].name} 
                            model={this.props.starships[i].model}
                            url={this.props.starships[i].url}
                            divClick={this.handleDivClick}
                            mouseHover={this.onMouseHover}
                        />
            });
            
            return (
                <div>
                    {cardArray}
                </div>
            )
        }
    }
}

export default CardList;