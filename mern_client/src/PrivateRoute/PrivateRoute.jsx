import React, { useContext } from 'react'
import { Authcontext } from '../contacts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(Authcontext);
  const location = useLocation();

  if(loading){
    return 
    <div className='text-center'>
        <Spinner aria-label="Center-aligned spinner example" />
    </div>
  }

  if(user){
    return children;
  }

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute
