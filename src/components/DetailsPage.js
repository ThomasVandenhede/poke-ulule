import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchDetails();
  }

  render() {
    return (
      <div>
        <Link to='/'>Back to index</Link>
        {
          (this.props.loading) ?
            <div>Searching pokédex, please wait...</div>
          :
          <div>
            <h1>
              #{ this.props.data.id }<br />
              { this.props.data.name }
            </h1>
            <div>
              <img
                src={ this.props.data.sprites.front_default }
                alt={`${this.props.data.name} Front View`} />
              <img
                src={ this.props.data.sprites.back_default }
                alt={`${this.props.data.name} Back View`} />
            </div>
            <h2>Types</h2>
            <ul>
              {
                this.props.data.types.map((type, i) =>
                  <li key={ i } >{ type.type.name }</li>
                )
              }
            </ul>
            <h2>Abilities</h2>
            <ul>
              {
                this.props.data.abilities.map((ability, i) =>
                  <li key={ i } >{ ability.ability.name }</li>
                )
              }
            </ul>
            <h2>Height</h2>
            <p>{ this.props.data.height }</p>
            <h2>Weight</h2>
            <p>{ this.props.data.weight }</p>
          </div>
        }
        <Link to='/'>Back to index</Link>
      </div>
    );
  }
};