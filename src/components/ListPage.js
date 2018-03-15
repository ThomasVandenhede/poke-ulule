import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = ({ loading, onLoadMore, pokemonList }) => {
  return (
    <div>
      <h1>PokéUlule</h1>
      <ol>
        {
          pokemonList.map((item, i) =>
          <li key={ i } >
            <Link to={`/${item.name}`}>
              { item.name }
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
          <button onClick={ onLoadMore } >Load more</button>
      }
    </div>
  );
};

export default ListPage;