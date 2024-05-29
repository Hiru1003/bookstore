import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const Authcontext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword (auth, email, password)
  }


  const authInfo ={
    createUser
  }


  return (
    <Authcontext.Provider>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider
