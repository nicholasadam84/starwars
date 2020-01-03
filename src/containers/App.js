import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../containers/ErrorBoundary';
import CardList from '../components/CardList';

class App extends Component {
  constructor() {
      super()
      this.state = {
        searchfield: '',  
        starships: [],
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
                this.setState({ starships: starshipsArray });
            })
    }))  
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render () {
    const { starships, searchfield } = this.state;
    const filteredStarships = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className={`tc`}>
        <h1>Star Wars Fact Finder</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList starships={filteredStarships}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  } 
}

export default App;
