import React from 'react';
import Banner from '../../component/Banner/Banner';
import SingleCard from '../../component/SingleCard/SingleCard';
import { useLoaderData } from 'react-router';
import Reviews from '../Reviews/Reviews';
import TechEvents from '../TechEvents/TechEvents';
import ExampleReviews from '../../component/ExampleReviews/ExampleReviews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <>
        <Helmet>
            <title>Fusion Sphere | Home</title>
        </Helmet>
           <Banner></Banner>
           <div>
           <h2 className='text-violet-500 text-6xl text-center mx-auto font-bold my-20'>Upcoming Events</h2>

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto my-20'>
         
         {
             data.map(event => <SingleCard key={event.id} event={event}></SingleCard>)
         }
      </div>
           </div>
       {/* <Reviews></Reviews> */}
       <TechEvents></TechEvents>
       <ExampleReviews></ExampleReviews>
        </>
    );
};

export default Home;