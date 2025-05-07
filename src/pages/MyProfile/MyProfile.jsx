import React, { useContext, useState } from 'react';
import { ValueContext } from '../../RootLayout/RootLayout';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';

const MyProfile = () => {
    const {user} =useContext(ValueContext)
    const [name, setName] = useState(user ?. displayName || '');
    const [photoURL, setPhotoURL] = useState(user ?.photoURL || '');
    const [isUpdating, setIsUpdating] = useState(false);
   const handleProfileUpdate = async (e)=> {
    e.preventDefault();
    setIsUpdating(true);

    try{
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL,
        })
        toast.success('Profile updated successfully')
    } catch(error){
        console.error('Error updating profile:', error);
        alert('Error updating profile'); 
    }

    setIsUpdating(false)
   }
    return (
        <div className="container p-6 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">My Profile</h1>
        <h2 className='text-2xl font-bold text-violet-500  text-center mb-2'>{name}</h2>
        
        <div className="flex justify-center mb-4">
          <img
            src={photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border  border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className={`w-full py-2 px-4 rounded-md ${
            isUpdating ? 'bg-gray-400' : 'bg-violet-500'
          } text-white`}
        >
          {isUpdating ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
    );
};

export default MyProfile;