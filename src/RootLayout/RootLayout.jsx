import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export  const  valueContext =createContext()


const RootLayout = () => {
    const [user,setUser] = useState(null)
    console.log(user)
   
  const handleLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const handleRegister= (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }

  const handleLogOut = () => {
    signOut(auth).then(() => {
       
      }).catch((error) => {
       
      });


  }
  const contextValues = {
    handleLogin,
    handleRegister,
   setUser,
    user,
    handleLogOut
  }


  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        // if (currentUser) {
         
        //   const uid = currentUser.uid;
          
        // } else {
        //   // User is signed out
        //   // ...
        // }
      });

  return () => {
    unsubscribe()
  }

  },[])
    return (
        <div>
           
            <valueContext.Provider value={contextValues}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </valueContext.Provider>
        </div>
    );
};

export default RootLayout;