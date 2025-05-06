import React, { useContext } from 'react';
import { valueContext } from '../../RootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  
    const {user,loading} = useContext(valueContext)
    const location = useLocation()
   
    if(loading){
        return <div className="w-26 h-26 border-4 border-dashed my-2 rounded-full text-center mx-auto animate-spin  border-green-600"></div>
    }
    if(!user || !user?.email){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return (
        <div>
           
            {children}
        </div>
    );
};

export default PrivateRoute;