import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {connect} from 'react-redux';
import {FirebaseContext} from '../context/Firebase';
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = ({
  emp,
}: {
  emp: {shift: string; name: string; phone: string};
}) => {
  const {createEmp} = useContext(FirebaseContext);
  return (
    <View
      style={{
        padding: 7,
      }}>
      <EmployeeForm />
      <Button
        title="Create"
        onPress={async () => {
          const {name, phone, shift} = emp;
          await createEmp(name, phone, shift);
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    emp: state.empForm,
  };
};

export default connect(mapStateToProps)(EmployeeCreate);
