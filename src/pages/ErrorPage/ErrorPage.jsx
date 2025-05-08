import React from 'react';
import { Link, useRouteError } from 'react-router';




const ErrorPage = () => {
    const error = useRouteError()
    console.log(error?.error?.message)
    return (
        <>
         
        <div className='flex flex-col items-center justify-center
        min-h-screen bg-gray-200 text-center p-5 rounded'>

            <h1 className='text-4xl font-bold text-red-500 '> "404 - Page Not Found"</h1>
            <p  className='text-2xl my-3 text-gray-600 mb-5'>"Oopss!!the page you're looking for doesn't exist."</p>
           
            <img src="https://i.ibb.co.com/35FHRHYn/romson-preechawit-Vy2c-Hqm0m-Cs-unsplash.jpg" alt="" className='w-3/6 justify-center'/>
            <Link to='/'>
            <button 
            className=' bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md my-4'>
                Go Back to Homepage
                </button>
                </Link>

        </div>
        </>
    );
};

export default ErrorPage;