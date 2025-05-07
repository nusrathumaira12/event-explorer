import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

import { ValueContext } from '../../RootLayout/RootLayout';

const Register = () => {
      const {handleRegister, updateUser} = useContext(ValueContext)

      const navigate = useNavigate()
      const [error, setError] = useState('')
      
    const handleSubmit = e => {
        e.preventDefault()
      
        const name = e.target.name.value 
        const photo =  e.target.photo.value
        const email = e.target.email.value 
        const password = e.target.password.value

        setError('')
        
       if(password.length <6){
       setError("Password Length must be at least 6 character")
        return;
       }
if(!/[a-z]/.test(password)){
    setError("Password must contain at least one Lowercase letter")
return
}
if(!/[A-Z]/.test(password)){
alert("Password must  contain at least one Uppercase letter")
return
}
        handleRegister( email, password)
        .then((result) => {

            const user = result.user;
          updateUser({displayName: name , photoURL: photo })
          .then(() => {

setError('')
navigate("/")
          })
            .catch((error)=> {
           setError(error.message)
          });
        })
          .catch((error) => {
            
            setError(error.message)
          });

    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md mx-auto mt-[80px] sm:p-10 bg-gray-100  ">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm text-gray-600">Create your new account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                </div>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm">Photo URL </label>
                    <input type="text" name="photo" id="photoURL" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                       
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                </div>
             
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Register</button>
                </div>
                <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                    <NavLink to="/login" className="text-blue-600 hover:underline">Log in</NavLink>.
                </p>
            </div>
        </form>
    </div>
    );
};

export default Register;