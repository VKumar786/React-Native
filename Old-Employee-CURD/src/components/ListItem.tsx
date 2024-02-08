import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const ListItem = (data: {
  name: string;
  phone: string;
  shift: string;
  uid: string;
}) => {
  const {name} = data;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        const {uid, ...emp} = data;
        dispatch({
          type: 'EMPLOYEE_SET_INITIAL_STATE',
          payload: {...emp},
        });
        navigation.navigate('employeeEdit', {
          employee: {...data},
        });
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 7,
          margin: 3,
        }}>
        <Text>{name.toUpperCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
