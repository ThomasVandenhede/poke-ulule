import axios from 'axios';

import {
  fetchPokemonRequest,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  updateNextPageUrl,
  fetchDetailsRequest,
  fetchDetailsSuccess,
  fetchDetailsFailure,
} from './syncActionCreators';

export function fetchPokemon() {
  return (dispatch, getState) => {
    dispatch(fetchPokemonRequest());

    return axios.get(getState().pokemonList.nextPageUrl)
      .then(res => {
        dispatch(fetchPokemonSuccess(res.data.results));
        dispatch(updateNextPageUrl(res.data.next));
      })
      .catch(err => {
        dispatch(fetchPokemonFailure(err));
      });
  }
};

export function fetchDetails(name) {
  return dispatch => {
    dispatch(fetchDetailsRequest());
    
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        dispatch(fetchDetailsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchDetailsFailure(err));
      });
  }
};