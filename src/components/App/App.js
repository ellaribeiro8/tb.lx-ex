import React from 'react';
import './App.scss';
import ReactLoading from 'react-loading';
import Searchbar from '../Searchbar/Searchbar'
import StarshipsList from '../StarshipsList/StarshipsList';

const ENDPOINT = 'https://swapi.co/api/starships/';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        starships: [],
        next: '',
        previous: '',
        searchInputValue: '',
    }
  }

  componentDidMount(){
    this.getStarshipsData(ENDPOINT);
  }

  getStarshipsData(currentURL) {
    this.setState({
      loading: true
    });
    fetch(currentURL)
      .then(data => data.json())
      .then(data => this.setState({
        loading: false,
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

  inputValueChange(e) {
    this.setState({
      searchInputValue: e.target.value,
    })
  }

  handleSearchClick() {
    this.getStarshipsData(ENDPOINT + '?search=' + this.state.searchInputValue);
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
    if(!this.state.loading) {
      if(this.state.starships.length) {
        return (
          <div className="App">
            <Searchbar 
              inputValue={this.state.searchInputValue}
              inputValueChange={this.inputValueChange.bind(this)}
              handleSearchClick={this.handleSearchClick.bind(this)}
            />
            <StarshipsList 
              starships={this.state.starships}
            />
            {this.renderPaginationbuttons()}
          </div>
        );
      } else {
        return (
          <div className='noResults'>
            Sorry human, no results were found!
          </div>
        
        );
      }
    } else {
      return <ReactLoading type='cylon' color='#3caa36' height={'20%'} width={'20%'} />;
    }
  }
}

export default App
