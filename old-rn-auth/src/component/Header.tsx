import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function Header({title}: {title: string}): React.JSX.Element {
  return (
    <SafeAreaView style={styles.header}>
      <Text>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    padding: 7,
    color: '#262626',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '600',
    backgroundColor: '#f8f8f8',
    elevation: 1,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 20},
    // shadowOpacity: 0.2,
  },
});

export default Header;
