import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchPokemon, fetchDetails } from '../actions';

// components
import store from '../store';
import ListPage from './ListPage';
import DetailsPage from './DetailsPage';

class App extends Component {
  componentDidMount() {
    // Load initial list of pokemon
    store.dispatch(fetchPokemon(this.props.pokemonList.nextPageUrl));
  }

  render() {
    const { pokemonList, pokemon } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props =>
              <ListPage
                {...props}
                pokemonList={ pokemonList.items }
                onLoadMore={ () => store.dispatch(fetchPokemon(pokemonList.nextPageUrl)) }
                loading={ pokemonList.isFetching } />
              }
            />
            <Route exact path="/:name" render={props =>
              <DetailsPage
                {...props}
                data={ pokemon.data }
                fetchDetails={ () => store.dispatch(fetchDetails(props.match.params.name)) }
                loading={ pokemon.isFetching } />
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
