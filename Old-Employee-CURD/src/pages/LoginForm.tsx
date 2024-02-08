import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useFirebase} from '../context/Firebase';
import {connect, useDispatch} from 'react-redux';

const LoginForm = ({
  auth,
}: {
  auth: {
    email: string;
    password: string;
    user: any;
    error: string;
    loading: boolean;
  };
}) => {
  const {handleSubmission, handleLogout} = useFirebase();
  const dispatch = useDispatch();

  if (auth.user !== null)
    return (
      <View>
        <Text>{JSON.stringify(auth.user)}</Text>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={auth.email}
        onChangeText={email =>
          dispatch({type: 'EMAIL_CHANGED', payload: email})
        }
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.email}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={auth.password}
        onChangeText={password =>
          dispatch({type: 'PASSWORD_CHANGED', payload: password})
        }
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.pwd}
      />
      <Button
        title="Log In"
        onPress={async () => {
          const {email, password} = auth;
          await handleSubmission(email, password);
        }}
      />

      {auth.error.length > 0 && (
        <Text style={{color: 'red', fontWeight: '500', fontSize: 18}}>
          {auth.error}
        </Text>
      )}
      {auth.loading ? <ActivityIndicator size={'large'} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    backgroundColor: 'white',
    padding: 7,
    fontSize: 14,
    borderRadius: 5,
    marginBottom: 10,
    color: '#262626',
  },
  pwd: {
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
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(LoginForm);
