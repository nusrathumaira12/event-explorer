import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { ValueContext } from '../../RootLayout/RootLayout';

const ExampleReviews = () => {
	const { user } = useContext(ValueContext); 
    return (
        <div>
            <section className="p-6">
			{/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 mx-auto text-center ">Visitor's Review</h2> */}
			<li className="flex">
                        <NavLink className="flex items-center bg-amber-200 text-3xl sm:text-4xl font-bold px-20 mb-10 mx-auto rounded-xl py-2 text-center text-violet-800"
                        to={user ? "/reviews" : "/login"}
                        >Visitor's Review 
						
						</NavLink>
                    </li>
	<div className="container max-w-4xl mx-auto ">
		<div className="flex flex-col items-center w-full px-6  py-2 space-y-8 rounded-md lg:h-full lg:p-8 bg-violet-100 text-gray-800">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5ZtxUT0FaEWRul-7wpFasVx6b2Y1imFh_g&s" alt="" className="w-20 h-20 rounded-full bg-gray-500" />
			<blockquote className="max-w-lg text-lg italic font-medium text-center">"Thanks to Miss Nusrat,I love how organized the events are — the upcoming events section makes planning my weekends so much easier."</blockquote>
			<div className="text-center text-gray-600">
			<span onClick={(e) => alert(`Rated ${[...e.target.innerText].indexOf('⭐') + 1} stars`)}>⭐ ⭐ ⭐ ⭐ ⭐</span>

				<p>Jhankar Mahbub</p>
				<p>CEO of Programming Hero</p>
				</div>
			<div className="flex space-x-2">
				<button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full bg-gray-900"></button>
				<button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full bg-gray-400"></button>
				<button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full bg-gray-400"></button>
				<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-400"></button>
			</div>
			
		</div>
		<li className="flex">
                        <NavLink className="flex items-center bg-gray-50 text-lg font-semibold px-10 my-10 mx-auto rounded-xl py-2 text-center border-gray-300 border text-gray-700 hover:bg-violet-800 hover:text-white"
                        to={user ? "/reviews" : "/login"}
                        >See More Reviews
						
						</NavLink>
                    </li>
	</div>
</section>
        </div>
    );
};

export default ExampleReviews;