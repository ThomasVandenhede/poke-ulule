import { combineReducers } from 'redux';
import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  UPDATE_NEXT_PAGE_URL,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
} from '../syncActionCreators';

const initialState = {
  pokemonList: {
    nextPageUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=10',
    items: [],
    error: null,
    isFetching: false,
  },
  pokemon: {
    data: {},
    error: null,
    isFetching: true,
  },
}

const pokemonList = (state=initialState.pokemonList, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {...state,
        items: state.items,
        error: null,
        isFetching: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {...state,
        items: [...state.items, ...action.items],
        error: null,
        isFetching: false,
      };
    case FETCH_POKEMON_FAILURE:
      return {...state,
        items: state.items,
        error: action.error,
        isFetching: false,
      };
    case UPDATE_NEXT_PAGE_URL:
      return {...state,
        nextPageUrl: action.nextPageUrl,
      }
    default:
      return state;
  }
}

const pokemon = (state=initialState.pokemon, action) => {
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return {
        data: state.data,
        error: null,
        isFetching: true
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        data: action.data,
        error: null,
        isFetching: false
      };
    case FETCH_DETAILS_FAILURE:
      return {
        data: state.data,
        error: action.error,
        isFetching: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pokemonList,
  pokemon,
});

export default rootReducer;