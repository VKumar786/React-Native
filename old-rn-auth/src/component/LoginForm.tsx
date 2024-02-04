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
import {navigate} from '../navigationRef';

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [err, setErr] = useState('');
  const {user, handleSubmission, handleLogout} = useFirebase();
  const [loading, setLoading] = useState(false);

  if (user !== null)
    return (
      <View>
        <Text>{user?.email}</Text>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={data.email}
        onChangeText={email =>
          setData(prev => {
            return {
              ...prev,
              email,
            };
          })
        }
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.email}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={data.password}
        onChangeText={password =>
          setData(prev => {
            return {
              ...prev,
              password,
            };
          })
        }
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.pwd}
      />
      <Button
        title="Log In"
        onPress={async () => {
          const {email, password} = data;
          setErr('');
          setLoading(true);
          console.log(email, password);
          await handleSubmission(email, password, (error: any) => {
            setErr(error);
          });
          setLoading(false);
          setData({email: '', password: ''});
          // navigate("")
        }}
      />

      {err.length > 0 && <Text>{err}</Text>}
      {loading ? <ActivityIndicator size={'large'} /> : null}
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
export default LoginForm;
