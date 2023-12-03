import img from "../../../../public/faq.webp"
import { Accordion } from 'flowbite-react';

const FAQ = () => {
    return (
        <div className="my-6 ">
            <h1 className="text-4xl text-center text-[#f38654] ">Frequently Asked Questions</h1>
            <div className="flex gap-3 mt-6">
            <div className="">
                <img src={img} alt="" className="h-[500px] w-[500px]  rounded-tr-[120px] rounded-bl-[120px]" />

             </div>
             <div className="pl-4">
                <h1 className="text-2xl text-left text-[#2292a7]">Explore Our Services</h1>
                <h4 className="text-slate-600 text-left">Unfold the Details with Our Comprehensive Accordion Menu.Answers to Your Queries in a Click!</h4>
                <div>
                    
                </div>
             </div>
            </div>
        </div>
    );
};

export default FAQ;