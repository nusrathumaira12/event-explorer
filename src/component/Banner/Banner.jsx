import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const bannerData = [
    {
      id: 1,
      title: 'International Business Conference 2025',
      description: 'FusionSphere connects you to a world of inspiration and innovation. Explore, connect, and create—FusionSphere is where the future of creative events begins.',
      image: "https://i.ibb.co.com/Z1khNNc6/cosmin-serban-dgb-If-H9-FR5-I-unsplash.jpg",
    },
    {
      id: 2,
      title: 'Art & Culture Exhibition 2025',
      description: 'Experience the beauty of local art and cultural heritage at our annual exhibition. FusionSphere brings creativity to life.',
      image:"https://i.ibb.co.com/N2Gh2RMS/spencer-chow-DDqoc-LNZ8-J8-unsplash.jpg",
    },
    {
      id: 3,
      title: 'Global Tech Meetup 2025',
      description: 'Connect with global tech minds and innovators. Discover new trends and technologies shaping the world.',
      image: "https://i.ibb.co.com/s9LtvfKx/evangeline-shaw-F3-RCd-DZq-AZU-unsplash.jpg",
    },
  ];
const Banner = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
             <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={900} 
        effect="slide" 
        loop
        className="mySwiper"
      >
        {bannerData.map((slide) =>  (
            <SwiperSlide key={slide.id}>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                   
                {slide.title.split(' ').slice(0, -1).join(' ')}  <br />
                    <span className="text-violet-600">{slide.title.split(' ').slice(-1)}
                      
                        </span>
                      
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12"> {slide.description}
                   
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Explore</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Learn More</a>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={slide.image} alt={slide.title} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
        </SwiperSlide>
        ))}
        </Swiper>
    </section>
    );
};

export default Banner;