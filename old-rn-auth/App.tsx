import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Header, LoginForm} from './src/component';
import {FirebaseProvider} from './src/context/Firebase';

function App(): React.JSX.Element {
  return (
    <FirebaseProvider>
      <SafeAreaView style={{}}>
        <Header title="Authentication" />
        <LoginForm />
      </SafeAreaView>
    </FirebaseProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
