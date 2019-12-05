import React from 'react';

class Starship extends React.Component {
  
  render() {
    return (
      <div className='Starship' url={this.props.url} onClick={this.props.handleStarshipClick}>
          <div className='infoRow'>{this.props.name}</div>
          <div className='infoRow'>{this.props.model}</div>
          <div className='infoRow'>{this.props.starship_class}</div>
      </div>
    );
  }
}

export default Starship;