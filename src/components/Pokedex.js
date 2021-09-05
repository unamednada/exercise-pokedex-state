import React from "react";
import Pokemon from "./Pokemon";
import Button from "./Button";
import "./Pokedex.css";

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
        };
      }
      return {
        pokemon: 0,
      };
    });
  }

  handleFilter(event) {
    if (event.target.innerText !== "All") {
      const filteredArray = this.props.pokemons.filter(
        (pokemon) => pokemon.type === event.target.innerText
      );

      this.setState(() => {
        return {
          pokemon: 0,
          pokemons: filteredArray,
        };
      });
    } else {
      this.setState(() => {
        return {
          pokemon: 0,
          pokemons: this.props.pokemons,
        };
      });
    }
  }

  createButtons() {
    const types = this.state.pokemons.reduce((acc, cur) => {
      return acc.includes(cur.type) ? acc : [...acc, cur.type];
    }, ['All'])

    return types.map((type) => {
      return <Button handleFilter={this.handleFilter} type={type} pokemons={this.props.pokemons} />
    })
  }

  componentDidMount() {
    const event = {
      target: {
        innerText: 'All',
      },
    };
    this.handleFilter(event);
  }

  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={this.state.pokemons[this.state.pokemon]} />
        <div id="filter-btns">
          {this.createButtons()}
          {/* <Button handleFilter={this.handleFilter} type='All' pokemons={this.state.pokemons} />
          <button onClick={this.handleFilter}>Psychic</button>
          <button onClick={this.handleFilter}>Fire</button> */}
        </div>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default Pokedex;
