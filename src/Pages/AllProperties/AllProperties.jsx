import useProperty from "../../hooks/useProperty";
import useUser from "../../hooks/useUser";
import React from 'react';
import img from "../../../public/contact.jpg"
import CountUp from 'react-countup';
import { FaSearch } from 'react-icons/fa';
import { Button, TextInput } from 'flowbite-react';
import { Card } from 'flowbite-react';

const AllProperties = () => {
    
    const [user] =useUser();
    const [allProperty]=useProperty();

    const PropertyWithoutRejected = allProperty.filter((data) => data.status !== 'rejected')
    return (
        <div>
             <div>
             <div className='bg-[#121b25] flex flex-col md:flex-row gap-4 justify-between '>
            <div className="flex justify-center flex-col mt-[53px]  flex-1 relative">
                <h1 className='text-white text-5xl ml-6'>Find Your <span className='text-[#da5a47]'>Dream </span> <br/> Home </h1>
                {/* input field div */}
               <div className=' absolute -right-24  mt-20 w-full'>
               <div className='ml-6 my-3 relative outline-2 py-1 outline-cyan-500 '>
                    {/* <FaSearch className='absolute text-red-500 bottom-1 z-10 h-[41px] rounded-md left-2 pl-2 bg-white text-xl'></FaSearch> */}
                <TextInput  type="text" placeholder="search here ... " className='ml-5'/>
                <Button className='absolute right-0 top-1'>Search</Button>
                </div>
                
               </div>
                <div className='flex flex-col lg:flex-row justify-evenly mt-28'>
                    <div className=' text-white flex flex-col'>
                        <span>
                            <CountUp start={0} end={PropertyWithoutRejected.length} duration={2}></CountUp>
                            <span className='text-[#da5a47]'>+</span>
                        </span>
                        <span>Premium Products</span>
                    </div>
                    <div className=' text-white flex flex-col'>
                        <span>
                            <CountUp start={0} end={user.length} duration={2}></CountUp>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
                {
               PropertyWithoutRejected.map((data)=>
               <Card
               className="max-w-sm"
             >
                 <div className='flex-1 rounded-tl-[120px] items-center justify-center  hidden lg:block'>
                    <img src={data.image} alt="" className=' rounded-tl-[120px] rounded-br-[120px] h-[200px] w-full mt-5 ' />
                </div>
              
              
             </Card>
               ) 

   
             }
            </div>
        </div>
    );
};

export default AllProperties;