/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/store/index';
import { Provider } from 'react-redux';
import Navigation from './src/screen/Navigation';
import {View, Text} from 'react-native';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
};

export default App;
