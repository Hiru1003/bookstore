import React, { createContext, useDebugValue, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const Authcontext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  const authInfo = {
    createUser,
    user,
    loginWithGoogle,
    loading
  };

  const loginWithGoogle =  () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider)
  }


  return (
    <Authcontext.Provider value={authInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;