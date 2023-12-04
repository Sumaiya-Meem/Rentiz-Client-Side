import useProperty from "../../hooks/useProperty";
import useUser from "../../hooks/useUser";
import React, { useState } from 'react';
import img from "../../../public/contact.jpg"
import CountUp from 'react-countup';
import { FaSearch } from 'react-icons/fa';
import { Avatar, Button, TextInput } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { FaLocationDot } from "react-icons/fa6";

const AllProperties = () => {

    const [user] = useUser();
    const [allProperty] = useProperty();
    
    const [search, setSearch] = useState('');

    const PropertyWithoutRejected = allProperty.filter((data) =>  data.status !== 'rejected' && data.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <div>
                <div className='bg-[#121b25] flex flex-col md:flex-row gap-4 justify-between '>
                    <div className="flex justify-center flex-col mt-[53px]  flex-1 relative">
                        <h1 className='text-white text-5xl ml-6'>Find Your <span className='text-[#da5a47]'>Dream </span> <br /> Home </h1>
                        {/* input field div */}
                        <div className=' absolute -right-24  mt-20 w-full'>
                            <div className='ml-6 my-3 relative outline-2 py-1 outline-cyan-500 '>
                                {/* <FaSearch className='absolute text-red-500 bottom-1 z-10 h-[41px] rounded-md left-2 pl-2 bg-white text-xl'></FaSearch> */}
                                <TextInput
                type="text"
                placeholder="Search Property "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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
                    PropertyWithoutRejected.map((data) =>
                        <Card
                            className="max-w-sm"
                        >
                            <div className='flex-1 rounded-tl-[120px] items-center justify-center  hidden lg:block'>
                                <img src={data.image} alt="" className=' rounded-tl-[120px] rounded-br-[120px] h-[200px] w-full mt-5 ' />
                            </div>
                            <h2>{data.name}</h2>
                            <div className='flex flex-col justify-around'>
                                <div className='flex items-center gap-2'>
                                    <span> <FaLocationDot /></span>
                                    <p> {data.location}</p>

                                </div>
                                <div>
                                    Price: $ {data.price}
                                </div>

                            </div>
                            <div className='flex gap-4 items-center'>
                                <Avatar img={data.agentImage} alt="avatar of Jese" rounded />
                                <div className='flex flex-col font-semibold'>
                                    <h4>Agent Name</h4>
                                    <h2>{data.agentName}</h2>
                                </div>
                            </div>
                            <div className="flex justify-around items-center">
                                <h3 className='capitalize font-semibold'>Status: {data.status}</h3>
                                <Button>Details</Button>
                            </div>

                        </Card>
                    )


                }
            </div>
        </div>
    );
};

export default AllProperties;