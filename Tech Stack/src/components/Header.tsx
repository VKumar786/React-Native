import React from 'react';
import {View, Text} from 'react-native';

const Header = ({title}: {title: string}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
        elevation: 2,
        backgroundColor: '#eee',
      }}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
