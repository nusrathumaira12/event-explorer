
import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';

import { ValueContext} from '../../RootLayout/RootLayout';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {handleLogin ,googleSignIn} = useContext(ValueContext)
    const [userEmail, setUserEmail] = useState("")
    const [error,setError] = useState('')
    const location = useLocation()
   const from = location?.state?.from
   const navigate= useNavigate()

  
    const handleSubmit = (e )=> {
       e.preventDefault()
const email = e.target.email.value 
const password =e.target.password.value 

handleLogin(email,password)
.then((result) => {
    const currentUser = result.user;
    toast.success("Login successful!");
   navigate(from ? from :"/")
  
  })
  .catch((error) => {
    
  setError(error.message);
  
  });

    }

    const handleGoogleLogIn =  () =>{
        googleSignIn()
        .then(result => {
            // console.log(result.user)
            navigate(from ? from :"/")
            toast.success("Your Google Logged In Successful1")
        })
        .catch(error =>  {
            console.log(error)
            toast.error("Unfortunetly,your Logged in Unsuccessful!")
        })
    }

    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-100  mx-auto mt-[80px]">
            <Helmet>
                        <title>Login Page</title>
                      </Helmet>
        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
        <p className="text-sm text-center dark:text-gray-600">Don't have account?{' '}
            <NavLink to="/register" className="text-blue-600 focus:underline   hover:underline">Register here</NavLink>
        </p>
        {error && <p className="text-red-600">{error}</p>}
        <div className="my-6 space-y-4 w-full  font-semibold rounded-md bg-amber-500 text-white">
            <button onClick={handleGoogleLogIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
            </button>
           
          </div>
        <div className="flex items-center w-full my-4">
            <hr  className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr  className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    onChange={(e)=>setUserEmail(e.target.value)}
                    placeholder="leroy@jenkins.com"
                     className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <button 
                        type='button'
                        onClick={()=>navigate('/forget-password',{ state: { email: userEmail } })}
                        className="text-xs hover:underline text-gray-600">Forgot password?</button>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
            </div>
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Log In</button>
           
        </form>
       
    </div>
    );
};

export default Login;