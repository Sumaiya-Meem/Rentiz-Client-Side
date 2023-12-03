import React from 'react';
import img from "../../../../public/contact.jpg"
import CountUp from 'react-countup';
import { Button, TextInput } from 'flowbite-react';
const Cover = () => {
    return (
        <div>
             <div className='bg-[#121b25] flex flex-col md:flex-row gap-4 justify-between '>
            <div className="flex justify-center flex-col mt-[53px]">
                <h1 className='text-white text-5xl ml-6'>Find Your <span className='text-[#da5a47]'>Dream </span> <br/> Home</h1>
                {/* input field div */}
                <div className='ml-6 my-3 relative outline-2 py-1 outline-cyan-500'>
                <TextInput  type="text" placeholder="search here ... "/>
                <Button className='absolute right-0 top-1'>Search</Button>
                </div>
                
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
                            <CountUp start={0} end={100} duration={3}></CountUp>
                            <span className='text-[#da5a47]'>+</span>
                        </span>
                        <span>Happy Customers</span>
                    </div>
                </div>
            </div>
            <div className='mt-[60px]'>
                <img src={img} alt="" className='h-[500px] w-[500px] rounded-tl-[140px]' />
            </div>
        </div>
        </div>
    );
};

export default Cover;