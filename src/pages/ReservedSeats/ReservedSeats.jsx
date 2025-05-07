import React, { useContext } from 'react';
import { ValueContext } from '../../RootLayout/RootLayout';
import { Navigate } from 'react-router';

const ReservedSeats = () => {
    const {user} = useContext(ValueContext)
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