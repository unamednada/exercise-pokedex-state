import React from 'react';
import Pokemon from './Pokemon';


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
      filterArray: this.props.pokemons,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter(this);
  }

  handleClick() {
    if (this.state.pokemon < this.props.pokemons.length - 1) {
      this.setState((state) => ({
        pokemon: state.pokemon + 1,
      }));
    } else {
      this.setState({
        pokemon: 0,
      })
    } 
  }

  handleFilter() {
    this.setState((state) => ({
      pokemon: 0,
      filterArray: this.state.filterArray.filter(({ type }) => type === 'Fire'),
    }))
  } 

  render() {
      return (
          <div className="pokedex">
            <Pokemon pokemon={this.state.filterArray[this.state.pokemon]} />
            <button onClick={this.handleFilter}>Fire</button>
            <button onClick={this.handleClick}>Next</button>
          </div>
      );
  }
}

export default Pokedex;