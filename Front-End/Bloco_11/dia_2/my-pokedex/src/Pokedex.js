import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
      {this.props.data.map((pokemonData, index) => <Pokemon pokemonData={pokemonData} key={index} />)}
      </div>
    );
  }
}

export default Pokedex;