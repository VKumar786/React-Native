import {createContext, useContext, useEffect, useState} from 'react';
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

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
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser: any) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const putData = (key: string, data: any) => {
    set(ref(database, key), data);
  };

  const handleSubmission = async (
    email: string,
    password: string,
    callback: any,
  ) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      //   await createUserWithEmailAndPassword(firebaseAuth, email, password);
      //   putData('users/' + new Date(), {email, password});
    } catch (error) {
      console.log(error);
      callback('Authentication Failed');
    }
  };

  const handleLogout = () => setUser(null);

  return (
    <FirebaseContext.Provider
      value={{user, handleLogout, putData, handleSubmission}}>
      {children}
    </FirebaseContext.Provider>
  );
};
