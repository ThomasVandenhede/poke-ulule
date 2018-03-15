import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { fetchPokemon } from './asyncActionCreators';
import rootReducer from './reducers/reducers';

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

store.dispatch(fetchPokemon());

export default store;
