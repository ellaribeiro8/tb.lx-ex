import React from 'react';
import './App.scss';
import StarshipsList from '../StarshipsList/StarshipsList';

const ENDPOINT = 'https://swapi.co/api/starships/';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        starships: [],
        next: '',
        previous: '',
    }
  }

  componentDidMount(){
    this.getStarshipsData(ENDPOINT);
  }

  getStarshipsData(currentURL) {
    fetch(currentURL)
      .then(data => data.json())
      .then(data => this.setState({
        starships: data.results,
        next: data.next,
        previous: data.previous
      }));
  }

  getPreviousPage(previousURL) {
    this.getStarshipsData(previousURL);
  }

  getNextPage(nextURL) {
    this.getStarshipsData(nextURL);
  }

  handlePaginationButtonClick(e) {
    const previousButton = document.getElementById('previous');

    e.target === previousButton ? this.getPreviousPage(this.state.previous) : this.getNextPage(this.state.next)
  }

  renderPaginationbuttons() {
    let pagination = [];

    if(this.state.previous !== null) {
      pagination.push(
        <button onClick={this.handlePaginationButtonClick.bind(this)} key='previous' id='previous'>Previous</button>
      );
    }

    if(this.state.next !== null) {
      pagination.push(
        <button onClick={this.handlePaginationButtonClick.bind(this)} key='next' id='next'>Next</button>
      );
    }

    return pagination;
  }

  render() {
    return (
      <div className="App">
        <StarshipsList 
          starships={this.state.starships}
        />
        {this.renderPaginationbuttons()}
      </div>
    );
  }
}

export default App