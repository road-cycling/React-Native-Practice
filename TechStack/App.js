

import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common';

import reducers from './src/reducers';

const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header head="Tech Stack" />

        </View>
      </Provider>
    );
}

export default App;
