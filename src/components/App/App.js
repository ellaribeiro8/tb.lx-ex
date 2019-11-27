import React from 'react';
import './App.scss';
import StarshipsList from '../StarshipsList/StarshipsList';

const ENDPOINT = 'https://swapi.co/api';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        starships: [],
        current: ENDPOINT + '/starships/?page=1',
        next: '',
        previous: '',
    }
  }

  getStarshipsData() {
    fetch(this.state.current)
      .then(data => data.json())
      .then(data => this.setState({
        starships: data.results,
        next: data.next,
        previous: data.previous
      }));
  }

  componentDidMount(){
    this.getStarshipsData();
  }

  render() {   
    return (
      <div className="App">
        <StarshipsList 
          starships={this.state.starships}
        />
      </div>
    );
  }
}

export default App;
