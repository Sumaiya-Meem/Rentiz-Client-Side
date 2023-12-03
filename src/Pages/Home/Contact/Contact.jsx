import React from 'react';
import img from "../../../../public/contact.jpg"

import { Button, Card } from 'flowbite-react';
import { IoCall,IoChatboxEllipses,IoVideocam } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
const Contact = () => {
    return (
        <div className='my-6'>
            <h1 className='text-left text-xl text-[#f38654] font-bold '>Contact Us</h1>
            <h1 className='text-left  text-3xl text-[#2292a7]'>Esay to Contact Us</h1>
            <div className='flex flex-col lg:flex-row gap-3'>
                {/* content */}
                <div className='flex-1 mt-4'>
                    <p className='text-left text-gray-500'>
                        Connect with us for a smooth and personalized real estate experience. From initial questions to securing your dream home we're here to make your real estate journey seamless and enjoyable. Reach out today and let's start the conversation!
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-2'>
                        <div>
                            <Card className="max-w-sm bg-slate-100">
                                 <div className='flex gap-6 items-center'>
                                 <Button className='text-xl bg-slate-200 text-[#007ee5] '> <IoCall  className='text-xl'/></Button>
                                
                                 <div>
                                    <h3>Call</h3>
                                    <p>+0019827192</p>
                                 </div>
                                 </div>
                                <Button className='text-xl bg-slate-200 text-[#007ee5]'>
                                    Call Now 
                                </Button>
                            </Card>


                        </div>
                        <div>
                            <Card className="max-w-sm bg-slate-100">
                                 <div className='flex gap-6 items-center'>
                                 <Button className='text-xl bg-slate-200 text-[#007ee5] '> <IoChatboxEllipses  className='text-xl'/></Button>
                                
                                 <div>
                                    <h3>Chat </h3>
                                    <p>121827192</p>
                                 </div>
                                 </div>
                                <Button className='text-xl bg-slate-200 text-[#007ee5]'>
                                    Chat Now
                                </Button>
                            </Card>


                        </div>
                        <div>
                            <Card className="max-w-sm bg-slate-100">
                                 <div className='flex gap-6 items-center'>
                                 <Button className='text-xl bg-slate-200 text-[#007ee5] '> <IoVideocam   className='text-xl'/></Button>
                                
                                 <div>
                                    <h3>Vedio Call </h3>
                                    <p>51827192</p>
                                 </div>
                                 </div>
                                <Button className='text-xl bg-slate-200 text-[#007ee5]'>
                                Vedio Call  Now
                                </Button>
                            </Card>


                        </div>
                        <div>
                            <Card className="max-w-sm bg-slate-100">
                                 <div className='flex gap-6 items-center'>
                                 <Button className='text-xl font-semibold bg-slate-200 text-[#007ee5] '> <FaMessage   className='text-xl'/></Button>
                                
                                 <div>
                                    <h3>Message </h3>
                                    <p>21827192</p>
                                 </div>
                                 </div>
                                <Button className='text-xl bg-slate-200 text-[#007ee5]'>
                                Message  Now
                                </Button>
                            </Card>


                        </div>
                    </div>
                </div>
                {/* image */}
                <div className='flex-1 rounded-tl-[120px] items-center justify-center  hidden lg:block'>
                    <img src={img} alt="" className=' rounded-tl-[120px] rounded-br-[120px] h-[400px] w-full mt-5 ' />
                </div>
            </div>
        </div>
    );
};

export default Contact;