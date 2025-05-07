import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

export  const  ValueContext =createContext()

const RootLayout = () => {
    const [user,setUser] = useState(null)
  const [loading, setLoading ] = useState(true)
   
  const handleLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser= (updatedData)=> {
return updateProfile(auth.currentUser ,updatedData )
  }


  const handleRegister= (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }

  const handleLogOut = () => {
    signOut(auth)
    .then(() => {
      toast.success(" Logged Out Successfully")
      }).catch((error) => {
        toast.error(error.message)
     
      });


  }
  const  handleForgetPassword = (email) => {
   
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("password reset email sent.Check your inbox.")
     
    })
    .catch((error) => {
      toast.error(error.message)
      
    });
  
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


  const contextValues = {
    handleLogin,
    handleRegister,
   setUser,
    user,
    loading,
    handleLogOut,
    handleForgetPassword,
    updateUser ,
  }
  if (loading) {
    return <div>Loading...</div>; 
  }
    return (
        <div>
           
            <ValueContext.Provider value={contextValues}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           </ValueContext.Provider>
        </div>
    );
};

export default RootLayout;