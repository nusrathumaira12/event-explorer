import React, { useContext } from 'react';
import { valueContext } from '../../RootLayout/RootLayout';
import { Navigate } from 'react-router';

const ReservedSeats = () => {
    const {user} = useContext(valueContext)
    if(!user || !user?.email){
        return <Navigate to="/login"></Navigate>
    }
    return (
        <div>
          i ma booked
        </div>
    );
};

export default ReservedSeats;