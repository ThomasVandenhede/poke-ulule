export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';
export const UPDATE_NEXT_PAGE_URL  = 'UPDATE_NEXT_PAGE_URL';
export const FETCH_DETAILS_REQUEST = 'FETCH_DETAILS_REQUEST';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_FAILURE = 'FETCH_DETAILS_FAILURE';

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const fetchPokemonRequest = makeActionCreator(FETCH_POKEMON_REQUEST);
export const fetchPokemonSuccess = makeActionCreator(FETCH_POKEMON_SUCCESS, 'items');
export const fetchPokemonFailure = makeActionCreator(FETCH_POKEMON_FAILURE, 'error');
export const updateNextPageUrl   = makeActionCreator(UPDATE_NEXT_PAGE_URL, 'nextPageUrl');
export const fetchDetailsRequest = makeActionCreator(FETCH_DETAILS_REQUEST);
export const fetchDetailsSuccess = makeActionCreator(FETCH_DETAILS_SUCCESS, 'data');
export const fetchDetailsFailure = makeActionCreator(FETCH_DETAILS_FAILURE, 'error');