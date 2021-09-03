import React from "react";
import Pokemon from "./Pokemon";

// Inicializar estado chave filterArray como o this.props.pokemons e modificar o estado com handleFilter
// Passar o estado como valor do prop pokemon no componente Pokemon
// usar a função setstate para manipular elementos antes de retornar o objeto state
// Desestruturar this.props dentro do render
// A função handlefilter deve zerar o state.pokemon

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: 0,
      filter: "Psychic",
      pokemons: this.props.pokemons,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      if (this.state.pokemon < this.state.pokemons.length - 1) {
        return {
          pokemon: state.pokemon + 1,
        }
      }
      return {
        pokemon: 0,
      }  
    })
  }

  handleFilter() {
    this.setState((state) => {
      return {
        pokemon: 0,
        pokemons: this.props.pokemons.filter((pokemon) => pokemon.type === this.state.filter),
      }
    })
  }

  render() {

    return (
      <div className="pokedex">
        <Pokemon pokemon={this.state.pokemons[this.state.pokemon]} />
        <button onClick={this.handleFilter}>Psychic</button>
        <button onClick={this.handleClick}>
          Next
        </button>
      </div>
    );
  }
}

export default Pokedex;
