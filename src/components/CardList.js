import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHero: false,
        }
    }
    
    render() {
        console.log(this.props.starships);
        const cardArray = this.props.starships.map((ship, i) => {
            return <Card 
                        key={i} 
                        name={this.props.starships[i].name} 
                        model={this.props.starships[i].model}
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