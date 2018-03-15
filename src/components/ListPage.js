import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';

const ListPage = ({ loading, onButtonClick, pokemonList }) => {
  return (
    <div className='page page--list' >
      <Header />
      <main className='main container'>
        <div className="">
          <ol>
            {
              pokemonList.map((item, i) =>
              <li key={ i } >
                <Link to={`/${item.name}`}>
                  <div>
                    { item.name }
                  </div>
                </Link>
              </li>
            )}
          </ol>
          {
            (loading) ?
              <p>
                Loading more pokémon...
              </p>
            :
              <button className='btn btn--circle' onClick={ onButtonClick } >Load more</button>
          }
        </div>
      </main>
    </div>
  );
};

ListPage.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  pokemonList: PropTypes.array.isRequired,
}

export default ListPage;