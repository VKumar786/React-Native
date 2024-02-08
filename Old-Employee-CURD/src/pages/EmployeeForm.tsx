import React, {useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';

const EmployeeForm = ({
  emp,
}: {
  emp: {shift: string; name: string; phone: string};
}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        padding: 7,
      }}>
      <TextInput
        placeholder="Name"
        value={emp.name}
        onChangeText={value => {
          dispatch({
            type: 'EMPLOYEE_UPDATE',
            payload: {prop: 'name', value},
          });
        }}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={emp.phone}
        onChangeText={value => {
          dispatch({
            type: 'EMPLOYEE_UPDATE',
            payload: {prop: 'phone', value},
          });
        }}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      />
      <Picker
        style={{
          backgroundColor: 'white',
          marginBottom: 7,
        }}
        selectedValue={emp.shift}
        onValueChange={value => {
          dispatch({
            type: 'EMPLOYEE_UPDATE',
            payload: {prop: 'shift', value},
          });
        }}>
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 7,
    fontSize: 14,
    borderRadius: 5,
    marginBottom: 10,
    color: '#262626',
  },
  container: {padding: 7, backgroundColor: '#efefef'},
});

const mapStateToProps = state => {
  return {
    emp: state.empForm,
  };
};
export default connect(mapStateToProps)(EmployeeForm);
