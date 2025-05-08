import React, { useState } from 'react';
import {  useLoaderData,  useParams } from 'react-router';
import { toast } from 'react-toastify';


const EventDetails = () => {
    const {id}  = useParams()
  const data = useLoaderData()
 const singleData = data.find(event => event.id == id)
 
 const {date,location,name,entry_fee,thumbnail,description } = singleData;
//  const {user} = useContext(valueContext)
//  if(!user || !user?.email){
//    return <Navigate to="/login"></Navigate>
//  }

const [formData, setFormData] = useState({ name: '', email: '' })
const [submitted, setSubmitted]= useState(false)

const handleChange = (e) => {
  setFormData(prev =>  ({
    ...prev,
    [e.target.name] : e.target.value
  }))
}

const handleSubmit = (e) => {
  e.preventDefault();

  setSubmitted(true);
  toast.success('Seat reserved successfully!');
  setFormData({ name: '', email: '' });
}

    return (
        <div className="py-6 bg-white">
         <h2 class="text-5xl font-semibold text-violet-600 my-20  mx-auto text-center">Event Spotlight</h2>
<div className='md:flex mx-auto w-[90%]  justify-center gap-2'>
<div className='w-[60%] h-[600x] '>
    <img src={thumbnail} alt="" />
    </div>
<div className="max-w-xl mr-10 p-6 py-10 bg-white rounded-xl border-2 border-gray-200">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 ">Event Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
    <div>
      <p className="text-sm text-gray-500">📅 Date</p>
      <p className="text-lg font-medium">{date}</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">🎯 Event Title</p>
      <p className="text-lg font-medium">{name}</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">⏱ Duration</p>
      <p className="text-lg font-medium">2 Days</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">🕙 Time</p>
      <p className="text-lg font-medium">10:00 am to 6:00 pm</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">📍 Location</p>
      <p className="text-lg font-medium">{location}</p>
    </div>
    <div>
    <p className="text-sm text-gray-500">💰 Entry Fee</p>
    <p className="text-lg font-medium text-green-600">{entry_fee} BDT/-</p>
    </div>
  </div>
  </div>
</div>
<div className='relative flex  mx-auto px-10 justify-center my-20 gap-6  w-10/12'>
<div className=' bg-violet-300 text-white w-6/10 py-6 m-6 px-20 ml-10  rounded-2xl'>
    <h2 className='font-bold text-2xl mb-3'>About {name}</h2>
   <p> {description}</p>
    </div>

        <form onSubmit={handleSubmit} className=" m-6 ml-3  flex-1 w-5/10 
        
        space-y-4 max-w-md mr-10 px-10 py-6 bg-gray-100  rounded-2xl">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Reserve a Seat</h3>
          <input type="text" name="name"
          value={formData.name}
          placeholder="Your Name" required
                 onChange={handleChange} className="w-full p-2 bg-white border border-gray-200 rounded" />
          <input type="email" name="email"
          value={formData.email}
          placeholder="Your Email" required
                 onChange={handleChange} className="w-full p-2 bg-white  border border-gray-200 rounded" />
          <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-2xl font-semibold">
            Reserve Seat
          </button>
          {submitted && 
          
         
          <p className=" mt-2 absolute text-2xl fon-bold -top-10 right-25 bg-green-500 text-white">
         Seat reserved successfully!
            </p>
          
          }
        </form>

      </div>
      </div>
    );
  };


export default EventDetails;