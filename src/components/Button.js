import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <button onClick={this.props.handleFilter}>{this.props.type}</button>
    )
  }
}

export default Button;