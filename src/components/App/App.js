import React from 'react';
import './App.scss';
import ReactLoading from 'react-loading';
import Searchbar from '../Searchbar/Searchbar'
import StarshipsList from '../StarshipsList/StarshipsList';
import DarthVader from '../../assets/Darth_Vader.jpg';
import StarshipInfoCard from '../StarshipInfoCard/StarshipInforCard';

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
        modalIsOpen: false,
        selectedStarship: null,
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

  getSelectedStarshipData(currentURL) {
    fetch(currentURL)
      .then(data => data.json())
      .then(data => this.setState({
        modalIsOpen: true,
        selectedStarship: data,
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
        <button onClick={this.handlePaginationButtonClick.bind(this)} key='previous' id='previous'>←</button>
      );
    }

    if(this.state.next !== null) {
      pagination.push(
        <button onClick={this.handlePaginationButtonClick.bind(this)} key='next' id='next'>→</button>
      );
    }

    return pagination;
  }

  handleStarshipClick(e) {
    let starshipUrl = e.target.parentNode.getAttribute('url');

    this.getSelectedStarshipData(starshipUrl);
  }

  closeCard() {
    this.setState({
      modalIsOpen: false,
      selectedStarship: null,
    });
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
              handleStarshipClick={this.handleStarshipClick.bind(this)}
            />
            <div className='Pagination'>
              {this.renderPaginationbuttons()}
            </div>
            {this.state.modalIsOpen && this.state.selectedStarship ? 
              <StarshipInfoCard isOpen={this.state.modalIsOpen} starship={this.state.selectedStarship} closeCard={this.closeCard.bind(this)} /> :
              null
            }
          </div>
        );
      } else {
        return (
          <div className='noResults'>
            <img src={DarthVader} alt='Darth Vader' />
            Sorry human, no results were found!
          </div>
        
        );
      }
    } else {
      return (
        <div className="App">
          <ReactLoading type='cylon' color='#3caa36' height={'20%'} width={'20%'} />
        </div>
      );
    }
  }
}

export default App
