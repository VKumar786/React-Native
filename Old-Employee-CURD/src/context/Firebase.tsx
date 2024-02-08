import {createContext, useContext, useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getDatabase, ref, set, push, onValue, remove} from 'firebase/database';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDPvHxV1DfTjhh3_seaSTE2Lag2V81Kc0Y',
  authDomain: 'old-react-native-auth.firebaseapp.com',
  projectId: 'old-react-native-auth',
  storageBucket: 'old-react-native-auth.appspot.com',
  messagingSenderId: '614085969762',
  appId: '1:614085969762:web:000b833594d3fe8893ce3b',
  databaseURL: 'https://old-react-native-auth-default-rtdb.firebaseio.com/',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);

export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({children}: {children: React.ReactNode}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser: any) => {
      dispatch({type: 'LOGIN_USER_SUCCESS', payload: currentUser});
    });

    return () => unsubscribe();
  }, []);

  const putData = (key: string, data: any) => {
    set(ref(database, key), data);
  };

  const handleSubmission = async (email: string, password: string) => {
    try {
      dispatch({type: 'LOGIN_USER_ERROR', payload: ''});
      dispatch({type: 'LOGIN_USER_LOADER', payload: true});
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      dispatch({type: 'LOGIN_USER_SUCCESS', payload: user});
      // navigate('employeeList');
      navigation.navigate('employeeList');
    } catch (error) {
      dispatch({type: 'LOGIN_USER_ERROR', payload: 'Authentication Failed.'});
    }
    dispatch({type: 'LOGIN_USER_LOADER', payload: false});
  };

  const handleLogout = () =>
    dispatch({type: 'LOGIN_USER_SUCCESS', payload: null});

  const createEmp = async (name: string, phone: string, shift: string) => {
    try {
      const currentUser = firebaseAuth.currentUser;
      await push(ref(database, `/users/${currentUser?.uid}/employees`), {
        name,
        phone,
        shift,
      });
      dispatch({
        type: 'EMPLOYEE_INITIAL_STATE',
      });
      navigation.navigate('employeeList');
    } catch (error) {
      // error
    }
  };

  const updateEmp = async (
    uid: string,
    name: string,
    phone: string,
    shift: string,
  ) => {
    try {
      const currentUser = firebaseAuth.currentUser;
      const employeeRef = ref(
        database,
        `users/${currentUser?.uid}/employees/${uid}`,
      );
      await set(employeeRef, {name, phone, shift});
      dispatch({
        type: 'EMPLOYEE_INITIAL_STATE',
      });
      navigation.navigate('employeeList');
    } catch (error) {
      // error
    }
  };
  const deleteEmp = async (uid: string) => {
    try {
      const currentUser = firebaseAuth.currentUser;
      const employeeRef = ref(
        database,
        `users/${currentUser?.uid}/employees/${uid}`,
      );
      await remove(employeeRef);
      navigation.navigate('employeeList');
    } catch (error) {
      // error
    }
  };

  const employeeFetch = () => {
    try {
      const currentUser = firebaseAuth.currentUser;
      const employeesRef = ref(database, `users/${currentUser?.uid}/employees`);
      onValue(employeesRef, snapshot => {
        dispatch({type: 'EMPLOYEES_FETCH_SUCCESS', payload: snapshot.val()});
      });
    } catch (error) {}
  };

  return (
    <FirebaseContext.Provider
      value={{
        deleteEmp,
        updateEmp,
        employeeFetch,
        createEmp,
        handleLogout,
        putData,
        handleSubmission,
      }}>
      {children}
    </FirebaseContext.Provider>
  );
};
