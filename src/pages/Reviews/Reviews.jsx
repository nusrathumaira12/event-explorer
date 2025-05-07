import React from 'react';
import { Star } from "lucide-react";
// import { valueContext } from '../../RootLayout/RootLayout';
// import { Navigate } from 'react-router';

const Reviews = () => {
    //  const {user}  = useContext(valueContext)
    //     if(!user || !user?.email){
    //         return <Navigate to="/login"></Navigate>
    //     }
  


const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    rating: 5,
    message: "Absolutely loved the event! The vibes, people, and organization were top-notch.",
  },
  {
    id: 2,
    name: "Nashit Khan",
    rating: 4,
    message: "Great atmosphere and good crowd. Could use better food options though.",
  },
  {
    id: 3,
    name: "Rina Sultana",
    rating: 5,
    message: "It was an unforgettable experience. Will definitely come back!",
  },
];


  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What People Are Saying</h2>
        <p className="text-gray-600 mb-10">Real reviews from our community</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map(({ id, name, rating, message }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">“{message}”</p>
              </div>
              <div className="text-right mt-4 font-semibold text-violet-600">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;



   