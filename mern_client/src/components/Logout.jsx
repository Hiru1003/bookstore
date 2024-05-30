import { Button } from 'flowbite-react'
import React, { useContext, useState } from 'react';
import { Authcontext } from '../contacts/AuthProvider'; 

const Logout = () => {
    const { logout } = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  

    const handleLogout = () => {
        logout().then(() => {
    alert("Logout Successfully");
    }).catch((error) => {
    // An error happened.
    });
    }
  return (
    <div className='h-screen bg-sky-100 flex items-center justify-center'>
      <Button className='px-8 py-2 text-white bg-blue-400' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Logout
