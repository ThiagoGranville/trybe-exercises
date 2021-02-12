import React from 'react';

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonData;
    return (
    <div className="pokemon-card">
      <div className="pokemon-info">
        <p>{name}</p>
        <p>{type}</p>
        <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
      </div>
      <img className="pokemon-image" src={image} alt={name}/> 
    </div>);
  }
}

export default PokemonCard;