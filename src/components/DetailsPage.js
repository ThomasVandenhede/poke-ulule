import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchDetails(this.props.match.params.name);
  }

  render() {
    return (
      <div className={ classNames(
        'page page--details',
        { 'is-loading': this.props.loading }
      )}>
        <main className='main container' >
          <div className="">
            <Link to='/' className='btn btn--circle'>Back to index</Link>
            {
              ( this.props.loading ) ?
                <div className='loader'>
                  <img
                    className='loader__img'
                    src='/images/pokeball_throw.gif'
                    alt='pokeball animated loader' />
                  <p className='loader__text'>Searching for your pokemon...</p>
                </div>
              :
              <div>
                <h1>
                  #{ this.props.data.id }<br />
                  { this.props.data.name }
                </h1>
                <div className='flip-card__wrapper'>
                  <div className='flip-card'>
                    <div className='flip-card__face flip-card__face--front'>
                      <img
                        className='flip-card__img'
                        src={ this.props.data.sprites.front_default }
                        alt={`${this.props.data.name} Front View`} />
                    </div>
                    <div className='flip-card__face flip-card__face--back'>
                      <img
                        className='flip-card__img'
                        src={ this.props.data.sprites.back_default }
                        alt={`${this.props.data.name} Back View`} />
                    </div>
                  </div>
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
          </div>
        </main>
      </div>
    );
  }
};

DetailsPage.propTypes = {
  fetchDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
      id: PropTypes.number,
      height: PropTypes.number,
      name: PropTypes.string,
      weight: PropTypes.number,
    }).isRequired,
}