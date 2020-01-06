import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../containers/ErrorBoundary';
import HeroCard from '../components/HeroCard';
import CardList from '../components/CardList';


const starwarsArray = [];

class App extends Component {
  constructor() {
      super()
      this.state = {
        heroURL: '',
        searchfield: '',  
        showHero: false,
        starwars: []
      }
  }

  onMouseHover(event) {
    event.target.style.cursor = 'pointer';
  }
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }
  
  handleDivClick = (event) => {
    //console.log('handleDivClick', event.currentTarget.dataset.hero_url);
    this.setState({ heroURL: event.currentTarget.dataset.hero_url });
    this.setState({ showHero: true });
  }
  
  handleBackClick = (event) => {
    this.setState({ showHero: false });
  }
  
  getNextPage(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let item of data.results) {
        starwarsArray.push(item);
      }
      if (data.next != null) {
        this.getNextPage(data.next)
      }
      //console.log('length', starwarsArray.length);
      this.setState({ starwars: starwarsArray }); 
    })
  }
  
  getAllPages(endpoint) {
    this.getNextPage(`https://swapi.co/api/${endpoint}/?page=1`)
  }
  
  componentDidMount() {
    const resources = [
      "films",
      "people",
      "planets",
      "species",
      "starships",
      "vehicles"
    ];
    
    resources.forEach(resource => {
      this.getAllPages(resource);
    });
    
  }
  
  render () {
      //console.log('state', this.state.starwars);
      const { heroURL, searchfield, showHero, starwars } = this.state;
    
    const filteredStarwars = starwars.filter(item => {
      if (item.name) {
        //console.log('item name', item.name)
        return item.name.toLowerCase().includes(searchfield.toLowerCase());
      }
      if (item.title) {
        //console.log('item title', item.title)
        return item.title.toLowerCase().includes(searchfield.toLowerCase());
      }
      return null;
    })

    //const films = starwars.filter(item => item.url.includes('films'));
    //const people = starwars.filter(item => item.url.includes('people'));
    //const planets = starwars.filter(item => item.url.includes('planets'));
    //const species = starwars.filter(item => item.url.includes('species'));
    //const starships = starwars.filter(item => item.url.includes('starships'));
    //const vehicles = starwars.filter(item => item.url.includes('vehicles'));
    const hero = starwars.filter(item => item.url.includes(heroURL));
    
    return (
      <div className={`tc`}>
        <h1>Star Wars Fact Finder</h1>
        <SearchBox searchChange={this.onSearchChange}/>
            <HeroCard 
              hero={hero}
              heroURL={heroURL}
              show={showHero}
              backClick={this.handleBackClick}
              mouseHover={this.onMouseHover}
            /> 
        <Scroll>
          <ErrorBoundary>
            <CardList filteredArray={filteredStarwars} divClick={this.handleDivClick} mouseHover={this.onMouseHover}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  } 
}

export default App;
