import React, { useContext } from 'react';
import { NavLink } from 'react-router';

import { valueContext } from '../../RootLayout/RootLayout';

const Register = () => {
      const {handleRegister} = useContext(valueContext)
      
    const handleSubmit = e => {
        e.preventDefault()
      
        const name = e.target.name.value 
        const photoURL =  e.target.photoURL.value
        const email = e.target.email.value 
        const password = e.target.password.value
       if(password.length <6){
        alert("Password Length must be at least 6 character")
        return
       }
if(!/[a-z]/.test(password)){
alert("Must have a Lowercase letter in the password")
return
}
if(!/[A-Z]/.test(password)){
alert("Must have a Uppercase letter in the password")
return
}
        handleRegister( email, password)
        .then((result) => {
            
            const user = result.user;
          
            alert('User registered Successfully!!')
            
          })
          .catch((error) => {
            console.log(error)
           
          });

    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md mx-auto mt-[80px] sm:p-10 bg-gray-100  ">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm dark:text-gray-600">Create your new account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                    <input type="text" name="name" id="name" placeholder="Black Smith" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm">PhotoURL </label>
                    <input type="text" name="photoURL" id="photoURL" placeholder="photoURL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                       
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
             
            </div>
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                    <NavLink to="/login" className="text-blue-600 hover:underline dark:text-violet-600">Log in</NavLink>.
                </p>
            </div>
        </form>
    </div>
    );
};

export default Register;