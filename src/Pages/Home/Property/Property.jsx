import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaLocationDot } from "react-icons/fa6";
import useProperty from '../../../hooks/useProperty';
import { Button } from 'flowbite-react';

const Property = () => {

    const [allProperty]=useProperty();
    const [search, setSearch] = useState('');
    const PropertyWithoutRejected = allProperty.filter((data) => data.status !== 'rejected')

    return (
        <div className="my-6">
            <h1 className='text-left text-xl text-[#f38654] font-bold '>Best Choices</h1>
            <h1 className='text-left  text-3xl text-[#2292a7]'>Popular Residencies</h1>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                {
                    PropertyWithoutRejected .map((data)=>
                 
                    <SwiperSlide>
                        <img src={data.image} alt="" className='h-[200px]'/>
                        <div>
                        <div className='flex items-center gap-2'>
                                    <span> <FaLocationDot /></span>
                                    <p> {data.location}</p>

                                </div>
                            <p>Price: ${data.price}</p>
                            <p>Status: {data.status}</p>
                          
                        </div>
                        <div className="flex gap-10 items-center">
                                <h3 className='capitalize font-semibold'>Status: {data.status}</h3>
                                <Button>Details</Button>
                            </div>
                    </SwiperSlide>
          
                    )
                }
                
                </Swiper>
        </div>
    );
};

export default Property;