import React from "react";
import Pokemon from "./Pokemon";
import Button from "./Button";
import "./Pokedex.css";

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
      return <Button key={type} handleFilter={this.handleFilter} type={type} pokemons={this.props.pokemons} />
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
        </div>
        <button disabled={this.state.pokemons.length === 1 ? true : false} onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default Pokedex;
