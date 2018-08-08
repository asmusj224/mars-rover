import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import Navigation from './Navigation/Navigation.component';
import ImageOfTheDayContainer from '../containers/ImageOfTheDay.container';
import ImageGalleryContainer from '../containers/ImageGallery.container';

import { rootReducer, rootEpic } from '../reducers';


import * as routes from '../constants/routes';
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route
                path={routes.IMAGE_OF_THE_DAY}
                component={() => <ImageOfTheDayContainer />}
              />
              <Route
                path={routes.IMAGE_GALLERY}
                component={() => <ImageGalleryContainer />}
              />
              <Redirect
                from={routes.LANDING_PAGE}
                to={routes.IMAGE_OF_THE_DAY} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
