import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

export default () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginRight: 10}}
      onPress={() => navigation.navigate('employeeCreate')}>
      <Text>Add</Text>
    </TouchableOpacity>
  );
};
