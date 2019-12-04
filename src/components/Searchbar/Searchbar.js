/* eslint-disable array-callback-return */
import React from 'react';

class Searchbar extends React.Component {
  render() {
    
    return (
      <div className='Searchbar'>
        <input className='searchBar' type='text' value={this.props.inputValue} onChange={this.props.inputValueChange} placeholder='Search for your favorite starship' />
        <button onClick={this.props.handleSearchClick} className='searchButton'>Search</button>
      </div>
    );
  }
}

export default Searchbar;