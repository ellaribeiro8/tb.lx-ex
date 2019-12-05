import React from 'react';

class Starship extends React.Component {
  
  render() {
    return (
      <div className='Starship' url={this.props.url} onClick={this.props.handleStarshipClick}>
          <div className='infoRow'><span className='label'>Name:</span>{this.props.name}</div>
          <div className='infoRow'><span className='label'>Model:</span>{this.props.model}</div>
          <div className='infoRow'><span className='label'>Class:</span>{this.props.starship_class}</div>
      </div>
    );
  }
}

export default Starship;