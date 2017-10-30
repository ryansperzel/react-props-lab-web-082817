// Code The Spaceship Component Here

import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h2>Rockets: {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors.join(", ")}</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  colors: ['black', 'red'],
  hasRockets: false
}

export default Spaceship
