import axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
function fetchPokemonRequest() {
  return {
    type: FETCH_POKEMON_REQUEST,
  }
}

export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
function fetchPokemonSuccess(items) {
  return {
    type: FETCH_POKEMON_SUCCESS,
    items,
  }
}

export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';
function fetchPokemonFailure(error) {
  return {
    type: FETCH_POKEMON_FAILURE,
    error,
  }
}

export const UPDATE_NEXT_PAGE_URL  = 'UPDATE_NEXT_PAGE_URL';
function updateNextPageUrl(nextPageUrl) {
  return {
    type: UPDATE_NEXT_PAGE_URL,
    nextPageUrl,
  }
}

export const FETCH_DETAILS_REQUEST = 'FETCH_DETAILS_REQUEST';
function fetchDetailsRequest() {
  return {
    type: FETCH_DETAILS_REQUEST,
  }
}

export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
function fetchDetailsSuccess(data) {
  return {
    type: FETCH_DETAILS_SUCCESS,
    data,
  }
}

export const FETCH_DETAILS_FAILURE = 'FETCH_DETAILS_FAILURE';
function fetchDetailsFailure(error) {
  return {
    type: FETCH_DETAILS_FAILURE,
    error,
  }
}


export function fetchPokemon(url) {
  return dispatch => {
    dispatch(fetchPokemonRequest());
    return axios.get(url)
      .then(res => {
        dispatch(fetchPokemonSuccess(res.data.results));
        dispatch(updateNextPageUrl(res.data.next));
      })
      .catch(err => {
        dispatch(fetchPokemonFailure(err));
      });
  }
}

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
}