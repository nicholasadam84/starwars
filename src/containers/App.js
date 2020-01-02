import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
          starships: []
      }
  }

  componentDidMount() {
    const starshipsArray = [];
    //TO-DO: Iterate through these URLs until data.next !== null (the next: property is not null)
    const urls = [
        'https://swapi.co/api/starships/?page=2',
        'https://swapi.co/api/starships/?page=1',
        'https://swapi.co/api/starships/?page=3',
        'https://swapi.co/api/starships/?page=4',
    ];
    Promise.all(urls.map(url => {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                for (const ship of data.results) {
                    starshipsArray.push(ship);
                }
                console.log('array', starshipsArray);
                this.setState({ starships: starshipsArray });
                console.log('state', this.state);
            })
    }))  
  }

  render () {
    const { starships } = this.state;
    return (
    <CardList starships={starships} />
    );
  } 
}

export default App;
