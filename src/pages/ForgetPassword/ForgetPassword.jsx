import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useContext } from 'react';
import { ValueContext } from '../../RootLayout/RootLayout';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const { handleForgetPassword } = useContext(ValueContext);

  useEffect(() => {
    const emailFromState = location.state?.email;
    if (emailFromState) {
      setEmail(emailFromState);
    }
  }, [location.state]);

  const handleReset = () => {
     if (!email) {
      toast.error("Please enter your email");
      return;
    }
 handleForgetPassword(email)
      .then(() => {
       
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto mt-[80px] bg-gray-100 rounded-md">
      <Helmet>
                  <title>Forget Password</title>
                </Helmet>
      <h2 className="mb-4 text-2xl font-bold text-center">Reset Your Password</h2>
      <div className="space-y-4">
        <label className="block text-sm">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button
         onClick={handleReset}
          className="w-full py-2 font-semibold bg-blue-600 text-white rounded-md"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
