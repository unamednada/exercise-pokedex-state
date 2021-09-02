import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pokemon: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.pokemon < 8) {
      this.setState((state) => ({
        pokemon: state.pokemon + 1,
      }));
    } else {
      this.setState({
        pokemon: 0,
      })
    }
    
  }

  render() {
      return (
          <div className="pokedex">
            <Pokemon key={this.props.pokemons[this.state.pokemon].id} pokemon={this.props.pokemons[this.state.pokemon]} />
            <button onClick={this.handleClick}>Next</button>
          </div>
      );
  }
}

export default Pokedex;