import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../contacts/AuthProvider'; 

const Login = () => {
    const { login, signInWithGoogle } = useContext(Authcontext);
    const [error, setError] = useState("");
  
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  
    const handleLogin= (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login Successfully");
         
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
    };
  
    // Signup with Google
    const handleRegister = () => {
      signInWithGoogle()
        .then((result) => {
          alert("Sign Up Successfully");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    };
  

  return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Login Form For The Bookstore</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input autoComplete="off" id="email" name="email" type="email" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" required />
                    </div>
                    <div className="relative">
                      <input autoComplete="off" id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" required />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="relative">
                      <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1 w-36">Login</button>
                    </div>
                  </form>
                  <p>If you don't have an account, please <Link to="/sign-up"><span className='text-blue-500'>Sign Up</span></Link> here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;