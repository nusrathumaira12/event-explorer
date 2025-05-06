import React from 'react';
import { Navigate, useLoaderData,  useParams } from 'react-router';


const EventDetails = () => {
    const {id}  = useParams()
  const data = useLoaderData()
 const singleData = data.find(event => event.id == id)
 console.log(singleData)
 const {date,location,name,entry_fee,thumbnail,description } = singleData;
//  const {user} = useContext(valueContext)
//  if(!user || !user?.email){
//    return <Navigate to="/login"></Navigate>
//  }
    return (
        <div className="py-6">
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
    <p className="text-sm text-gray-500">Entry Fee</p>
    <p className="text-lg font-medium text-green-600">{entry_fee} BDT/-</p>
    </div>
  </div>
  </div>
</div>
<div className='bg-violet-300 text-white'>
    <h2>About {name}</h2>
   <p> {description}</p>
    </div>

        {/* <h2 className="text-2xl font-bold mb-4">Event Details</h2>
        {/* Replace below with actual fetched data based on `id` */}
        {/* <p>Date: 26 March 2023</p>
        <p>Title: Children education</p>
        <p>Duration: 2 days</p>
        <p>Time: 10:00 am to 6:00 pm</p>
        <p>Location: New York, USA</p>
        <p>Website: www.chamberoil.com</p> */} 
  
        {/* <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md">
          <input type="text" name="name" placeholder="Your Name" required
                 onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required
                 onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Reserve Seat
          </button>
          {submitted && <p className="text-green-600 mt-2">Seat reserved successfully!</p>}
        </form> */}

      </div>
    );
  };

export default EventDetails;