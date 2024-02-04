import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Components
import {Header, AlbumDetails} from './src/components';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.pageLayout}>
      <Header title="Albums!" />
      <AlbumDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    padding: 0,
  },
});

export default App;
