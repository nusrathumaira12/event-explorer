import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

import { ValueContext } from '../../RootLayout/RootLayout';
import { toast } from 'react-toastify';

const Register = () => {
    const { handleRegister, updateUser, googleSignIn } = useContext(ValueContext)

    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        setError('')

        if (password.length < 6) {
            alert("Password Length must be at least 6 character")
            return;
        }
        if (!/[a-z]/.test(password)) {
            alert("Password must contain at least one Lowercase letter")
            return
        }
        if (!/[A-Z]/.test(password)) {
            alert("Password must  contain at least one Uppercase letter")
            return
        }

        handleRegister(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registration successful!");
                        setError('')
                        navigate("/")
                    })
                    .catch((error) => {
                        setError(error.message)
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                setError(error.message)
                toast.error(error.message);
            });

    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {

                toast.success("Signed in");
                navigate("/")
                toast.success("Registered successfully!");
            })
            .catch(error => {
                setError(error.message)
                toast.error("Google sign-in failed: " + error.message);
            })
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
                    <div className="mt-1 mb-6 space-y-4 w-full  font-semibold rounded-md bg-amber-500 text-white">
                        <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>

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