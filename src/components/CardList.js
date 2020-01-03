import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHero: false,
            heroURL: ''
        }
    }
    
    handleDivClick = (event) => {
        console.log('handleDivClick', event.currentTarget.dataset.hero_url);
        this.setState({ heroURL: event.currentTarget.dataset.hero_url });
    }

    render() {
        //console.log(this.props);
        //console.log(this.props.starships);
        console.log('state', this.state.heroURL);
        const cardArray = this.props.starships.map((ship, i) => {
            return <Card 
                        key={i} 
                        name={this.props.starships[i].name} 
                        model={this.props.starships[i].model}
                        url={this.props.starships[i].url}
                        divClick={this.handleDivClick}
                    />
        });

        return (
            <div>
                {cardArray}
            </div>
        )
    }
}

export default CardList;