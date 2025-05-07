import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { ValueContext } from '../../RootLayout/RootLayout';
import { SiEventstore } from 'react-icons/si';
import userIcon from "../../assets/user.png"

const Navbar = () => {
     const {user} =useContext(ValueContext)
        const navigate = useNavigate()
    const {pathname}= useLocation()
    const { handleLogOut} = useContext(ValueContext)
  
    const userName = user?.displayName || 'User';
    return (
        <header className="p-4 bg-gray-200">
            <div className="container flex justify-between h-16 mx-auto">
        

                <div className="flex text-3xl font-bold items-center pt-4 text-violet-700"> 
               
                    <span className='text-amber-500  text-4xl'> <SiEventstore /> </span>  Fusion<span className='text-amber-600'>S</span>phere</div>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 "
                        to="/"
                        >Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1  "
                        to="/about"
                        >About</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1  "
                        to="/myProfile"
                        >My Profile</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1  "
                        to="/reviews"
                        >Reviews</NavLink>
                    </li>
                   
                    
                </ul>
               
                <div className="items-center flex-shrink-0 hidden lg:flex">
                <div className=''>{user && user.email}</div>
                <div className="relative">
                    <img className='w-14 h-14 rounded-full cursor-pointer' src={`${user ? user.photoURL : userIcon}`} alt="" />
                    <div className="absolute top-11 left-1/2 transform -translate-x-1/2 bg-purple-700 text-black px-4 py-2 rounded-md text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
                {userName}
              </div>
            </div>
          

                {!user?.email &&  <button onClick={()=>navigate("/login")} 
                    className={`self-center px-8 py-3 rounded font-bold
                    ${pathname== "/login" ? "text-blue-900" : ""}`}
                    >
                        Log in</button>}
                     
                    <button onClick={()=>navigate("/register")}  className={`self-center px-8 py-3 rounded font-bold ${pathname== "/register" ? "text-blue-900" : ""}`}>Register</button>
                    {
                        user?.email && 
                        <button onClick={handleLogOut} className={`self-center px-8 py-3 rounded`}>
                        Logout
                        </button>
                    }
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;