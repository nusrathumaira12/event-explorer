import React from 'react';
import { Helmet } from 'react-helmet-async';

const TechEvents = () => {
    return (
        <div className='w-11/12  mx-auto my-30 justify-center '>
            <Helmet>
						<title>Tech Events</title>
					  </Helmet>
            <h2 className='text-4xl text-gray-800 font-bold mb-10 pl-10 justify-center w-2/6 mx-auto items-center '>Tech Events In Dhaka</h2>
            
                    <div className='flex flex-cols-2 md:flex-cols-3   gap-6 justify-center  mx-10 '>

        <div className="max-w-sm px-6 py-0 mb-10 rounded-md shadow-lg bg-gray-100 text-gray-900  transition duration-100 ease-in-out transform hover:scale-105 hover:shadow-lg hover:brightness-110 ">
	<img src="https://cdn-az.allevents.in/events10/banners/b81aad51c9c470f888487bce82658c7979ea267a98b1ceb77f7196e19d83c668-rimg-w1200-h627-dc010208-gmir?v=1746437459" alt="" className="object-cover object-center w-full rounded-md h-72 border-2  bg-gray-500" />
	<div className="mt-6">
		<span className="block text-sm font-semibold   text-black">Nyntax Presents Father Timm Memorial Programming Contest 5.0</span>
		<h2 className="text-sm text-gray-500 font-semibold tracking-wide mt-2 ">Notre Dame College, Motijheel, 1000 Dhaka</h2>
	</div>
	<p className="text-gray-800  font-bold text-sm mt-4 mb-2">Fri, 09 May</p>
</div>
<div className="max-w-sm px-6 py-0 mb-10 rounded-md shadow-lg bg-gray-100 text-gray-900  transition duration-100 ease-in-out transform hover:scale-105 hover:shadow-lg hover:brightness-110 ">
	<img src="https://cdn-az.allevents.in/events10/banners/767418aa3658dd00b84098c7da9b7a03dd0e88e11387d1c6c26a6f8b20fe9559-rimg-w1200-h675-dceff2f2-gmir?v=1746087024" 
    alt="" 
    className="object-cover object-center w-full rounded-md h-72  bg-gray-500" />
	<div className="mt-6">
		<span className="block text-sm font-semibold   text-black">5th International Robo Tech Olympiad 2025</span>
		<h2 className="text-sm text-gray-500 font-semibold tracking-wide mt-2 ">Robo Tech Valley, Level. 4, House No. 26/1, Road No. 04, Rupnagar Rd, Dhaka 1216, 1216 Dhaka, Bangladesh</h2>
	</div>
	<p className="text-gray-800  font-bold text-sm mt-4 mb-2">Sat, 21 Jun</p>
</div>
<div className="max-w-sm px-6 py-0 mb-10 rounded-md shadow-lg bg-gray-100 text-gray-900  transition duration-100 ease-in-out transform hover:scale-105 hover:shadow-lg hover:brightness-110 ">
	<img src="https://cdn-az.allevents.in/events2/banners/eec0f9871de488c751be4b7894b315db6777744dbadb4bbb59b1f67a212c23c9-rimg-w1200-h628-dc0a053d-gmir?v=1746454137" 
    alt="" className="object-cover object-center w-full rounded-md h-72 border-2  bg-gray-500" />
	<div className="mt-6">
		<span className="block text-sm font-semibold   text-black">DUET IUPC 2025</span>
		<h2 className="text-sm text-gray-500 font-semibold tracking-wide mt-2 ">Dhaka University of Engineering &
        </h2>
	</div>
	<p className="text-gray-800  font-bold text-sm mt-4 mb-2">09-10May</p>
</div>

</div>
<div className=' justify-center mx-auto w-[300px]'>
<button type="button" className="px-8 py-3   font-semibold border mt-5 mb-5  mx-auto rounded border-gray-300 text-gray-800">View all 
	Category Events</button>
</div>

        </div>
    

    );
};

export default TechEvents;
