/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import Route from './routes';
import store from './store';

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <Route style={{ flex: 1 }} />
      </Provider>
    </Root>
  );
};

export default App;
