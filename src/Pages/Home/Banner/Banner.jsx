import React from 'react';
import bg from "../../../../public/bg3.webp"
import CountUp from 'react-countup';
import useUser from '../../../hooks/useUser';
const Banner = () => {
    const [user] =useUser();
    return (
        <div className='bg-[#121b25] flex flex-col md:flex-row gap-4 justify-between '>
            <div className="flex justify-center flex-col mt-[53px]">
                <h1 className='text-white text-5xl ml-6'>Find Your <span className='text-[#da5a47]'>Dream </span> <br/> Home</h1>
                <div className='flex flex-col lg:flex-row justify-evenly mt-8'>
                    <div className=' text-white flex flex-col'>
                        <span>
                            <CountUp start={0} end={100} duration={3}></CountUp>
                            <span className='text-[#da5a47]'>+</span>
                        </span>
                        <span>Premium Products</span>
                    </div>
                    <div className=' text-white flex flex-col'>
                        <span>
                            <CountUp start={0} end={user.length} duration={3}></CountUp>
                            <span className='text-[#da5a47]'>+</span>
                        </span>
                        <span>Happy Customers</span>
                    </div>
                </div>
            </div>
            <div className='mt-[60px]'>
                <img src={bg} alt="" className='h-[500px] w-[500px] rounded-tl-[140px]' />
            </div>
        </div>
    );
};

export default Banner;