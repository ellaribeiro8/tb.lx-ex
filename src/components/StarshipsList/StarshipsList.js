/* eslint-disable array-callback-return */
import React from 'react';
import Starship from '../Starship/Starship';

class StarshipsList extends React.Component {
  render() {
    let starships = [];

    if(this.props.starships){
      this.props.starships.map((starship, i) => {
        starships.push(
          <Starship 
            key={i}
            url={starship.url}
            name={starship.name}
            model={starship.model}
            starship_class={starship.starship_class}
            handleStarshipClick={this.props.handleStarshipClick}
          />
        )
      })
    }else{
    starships.push(
      <div className="EmptyList">
          UPS! SOMETHING WENT WRONG, TRY TO REFRESH YOUR PAGE!
      </div>
      );
    }

    return (
      <div className='StarshipsList'>
        <div className='starshipsHeaderRow'>
          <div className='infoRow'>NAME</div>
          <div className='infoRow'>MODEL</div>
          <div className='infoRow'>STARSHIP CLASS</div>
        </div>
        {starships}
      </div>
    );
  }
}

export default StarshipsList;