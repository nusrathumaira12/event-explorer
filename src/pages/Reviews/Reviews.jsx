import React, { useContext } from 'react';
import { valueContext } from '../../RootLayout/RootLayout';
import { Navigate } from 'react-router';

const Reviews = () => {
     const {user}  = useContext(valueContext)
        if(!user || !user?.email){
            return <Navigate to="/login"></Navigate>
        }
    return (
        <div>
            hii
        </div>
    );
};

export default Reviews;