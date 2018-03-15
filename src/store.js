import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


import rootReducer from './reducers/reducers';

// components
import App from './components/App';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

// store makes App re-render when state changes
export const renderApp = () => {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.getElementById('root')
  )
};

store.subscribe(renderApp);

export default store;
