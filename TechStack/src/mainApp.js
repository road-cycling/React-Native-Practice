import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';

import reducers from './reducers';

const mainApp = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Header headerText="Tech Stack" />

    </Provider>
  );
}

export default mainApp;
