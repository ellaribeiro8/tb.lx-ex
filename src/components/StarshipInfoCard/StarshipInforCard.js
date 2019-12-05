import React from 'react';

class StarshipInfoCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      starship: this.props.starship
    }
  }

  render() {
    let starship = this.state.starship;

    return (
      <div className='StarshipInfoCard'>
        <span className='close' onClick={this.props.closeCard}>•</span>
        <div className='starshipInfo'>
          <h3>{starship.name}</h3>
          <ul>
            <li><b>Model:</b>{starship.model}</li>
            <li><b>Class:</b>{starship.starship_class}</li>
            <li><b>Manufacturer:</b>{starship.manufacturer}</li>
            <li><b>Consumables:</b>{starship.consumables}</li>
            <li><b>Cargo Capacity:</b>{starship.cargo_capacity}</li>
            <li><b>Crew:</b>{starship.crew}</li>
            <li><b>Passengers:</b>{starship.passengers}</li>
            <li><b>Length:</b>{starship.length}</li>
            <li><b>Cost in Credits:</b>{starship.cost_in_credits}</li>
          </ul>
          </div>
      </div>
    );
  }
}

export default StarshipInfoCard;