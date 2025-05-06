import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Footer from '../component/Footer/Footer';
export  const  valueContext =createContext()


const RootLayout = () => {
    const [user,setUser] = useState(null)
  const [loading, setLoading ] = useState(true)
   
  const handleLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const handleRegister= (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }

  const handleLogOut = () => {
    signOut(auth).then(() => {
       
      }).catch((error) => {
       console.log(error)
      });


  }
  const  handleForgetPassword = (email) => {
    console.log(email)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      
    })
    .catch((error) => {
     console.log(error)
      
    });
  
  }
  const contextValues = {
    handleLogin,
    handleRegister,
   setUser,
    user,
    loading,
    handleLogOut,
    handleForgetPassword 
  }


  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
     
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
            <Footer></Footer>
            </valueContext.Provider>
        </div>
    );
};

export default RootLayout;