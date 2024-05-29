import React, { createContext, useState } from 'react'

export const Authcontext = createContext();
const auth = getAuth(app);


const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
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
