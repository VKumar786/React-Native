import React from 'react';
import LoginForm from './pages/LoginForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeList from './pages/EmployeeList';
import {FirebaseProvider} from './context/Firebase';
import EmployeeDetails from './pages/EmployeeDetails';
import EmployeeCreate from './pages/EmployeeCreate';
import useCreateButton from './hooks/useCreateButton';
import EmployeeEdit from './pages/EmployeeEdit';

const Stack = createNativeStackNavigator();

const RouterComponent = () => {
  return (
    <NavigationContainer>
      <FirebaseProvider>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={LoginForm}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="employeeList"
            component={EmployeeList}
            options={{
              title: 'Employee',
              headerRight: useCreateButton,
            }}
          />
          <Stack.Screen
            name="employeeDetails"
            component={EmployeeDetails}
            options={{title: 'Capitan'}}
          />
          <Stack.Screen
            name="employeeCreate"
            component={EmployeeCreate}
            options={{title: 'Create'}}
          />
          <Stack.Screen
            name="employeeEdit"
            component={EmployeeEdit}
            options={{title: 'Edit'}}
          />
        </Stack.Navigator>
      </FirebaseProvider>
    </NavigationContainer>
  );
};

export default RouterComponent;
