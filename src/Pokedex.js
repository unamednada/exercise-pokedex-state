import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pokemon: 0,
    }
  }

  handleClick
  render() {
      return (
          <div className="pokedex">
            <Pokemon key={this.props.pokemons[this.state.pokemon].id} pokemon={this.props.pokemons[this.state.pokemon]} />
            <button>Next</button>
          </div>
      );
  }
}

export default Pokedex;