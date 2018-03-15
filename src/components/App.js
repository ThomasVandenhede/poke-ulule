import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// containers
import ListPageContainer from '../containers/ListPageContainer';
import DetailsPageContainer from '../containers/DetailsPageContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ ListPageContainer } />
          <Route exact path="/:name" component={ DetailsPageContainer } />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
