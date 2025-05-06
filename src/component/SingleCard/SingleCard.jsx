import React from 'react';
import { useNavigate } from 'react-router';

const SingleCard = ({event}) => {
  const navigate = useNavigate()
    return (
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden h-[500px] rounded-2xl shadow-2xl bg-violet-800 text-white ">
        
           
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-lg font-bold text-white">{event.name}</a>
                <span className="text-sm font-semibold text-white">{event.category}</span>
          
        </div>
        <div>
            <img src={event.thumbnail} alt="" className="object-cover w-[90%] mb-4 h-40 sm:h-56 mx-auto shadow-xl rounded-2xl" />
            <h2 className="mb-1 text-xl font-semibold">{event.location}</h2>
            <p className="text-sm ">{event.date}</p>
        </div>
        <div className="flex flex-wrap justify-between">
            <div className="space-x-1">
               <button type="button" onClick={()=>navigate(`/eventdetails/${event.id}`)} className="px-8 py-2 font-semibold rounded-full bg-white text-violet-900">View More</button>
            </div>
            <div className="flex  text-sm dark:text-gray-600">
              
                <button type="button" className="flex font-bold items-center p-1 space-x-1.5 gap-1">
                Entry Fee:
                    <span className='font-bold text-green-700'> {event.entry_fee} BDT/-</span>
                </button>
            </div>
        </div>
    </div>
    );
};

export default SingleCard;