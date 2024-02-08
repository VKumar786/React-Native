import React from 'react';
import {Button, Modal, Text, View} from 'react-native';

const EmployeeModal = ({
  text,
  visible,
  onAccept,
  onDecline,
}: {
  text: string;
  visible: boolean;
  onAccept: any;
  onDecline: any;
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
        }}>
        <Text>{text}</Text>
        <Button title="Yes" onPress={onAccept} />
        <Button title="No" onPress={onDecline} />
      </View>
    </Modal>
  );
};

export default EmployeeModal;
