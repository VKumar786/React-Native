import React, {useContext, useState} from 'react';
import {Button, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {FirebaseContext} from '../context/Firebase';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import EmployeeModal from '../components/EmployeeModal';

const EmployeeUpdate = ({
  emp,
}: {
  emp: {shift: string; name: string; phone: string};
}) => {
  const [showModal, setShowModal] = useState(false);
  const route = useRoute();
  const {uid} = route.params.employee;
  const {updateEmp, deleteEmp} = useContext(FirebaseContext);

  return (
    <View
      style={{
        padding: 7,
      }}>
      <EmployeeForm />
      <Button
        title="Save"
        onPress={async () => {
          const {name, phone, shift} = emp;
          await updateEmp(uid, name, phone, shift);
        }}
      />
      <View style={{marginTop: 7}}>
        <Button
          title="Text Schedule"
          onPress={async () => {
            const {name, phone, shift} = emp;
            const message = `your upcoming shift is on ${shift}`;
            Communications.text(phone, message);
          }}
        />
      </View>
      <View style={{marginTop: 7}}>
        <Button
          title="Fire"
          onPress={async () => {
            setShowModal(prev => !prev);
          }}
        />
      </View>

      <EmployeeModal
        text="Are you sure you want to delete this"
        visible={showModal}
        onAccept={async () => await deleteEmp(uid)}
        onDecline={() => {
          setShowModal(false);
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    emp: state.empForm,
  };
};

export default connect(mapStateToProps)(EmployeeUpdate);
