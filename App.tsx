import React from 'react';
import { Provider } from 'react-redux';
import RootRouter from 'screens/rootRouter';
import RootScreen from 'screens/rootScreen';
import configureStore from 'store';

export default () => {
  // We could imagine having a Navigator here instead of one screen. 
  return (
    <Provider store={configureStore}>
      <RootRouter />
    </Provider>
  )
}
