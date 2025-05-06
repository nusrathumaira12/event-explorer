import React from 'react';
import Banner from '../../component/Banner/Banner';
import SingleCard from '../../component/SingleCard/SingleCard';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <>
           <Banner></Banner>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto my-20'>
            {
                data.map(event => <SingleCard key={event.id} event={event}></SingleCard>)
            }
         </div>
        </>
    );
};

export default Home;