import React from 'react';
import {Provider} from 'react-redux';
import _store from './src/store';
import {createStore} from 'redux';
import RouterComponent from './src/RouterComponent';

const App = () => {
  const store = createStore(_store);
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
};

export default App;
