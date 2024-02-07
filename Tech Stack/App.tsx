import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/store';
import Header from './src/components/Header';
import LibraryList from './src/pages/LibraryList';

const store = createStore(rootReducer);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{}}>
        <Header title="Tech Stack" />
        <LibraryList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
