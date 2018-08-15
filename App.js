import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';

import Router from './src/screens/Router';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
