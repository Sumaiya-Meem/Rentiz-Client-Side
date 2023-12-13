import { Card } from "flowbite-react";
import useReview from "../../hooks/useReview";


const MyReview = () => {
    const [allReview] = useReview();
    return (
        <div>
             <h1 className='text-left  text-3xl text-[#2292a7]'>Happy Customer</h1>
            <div className='grid grid-cols-2 gap-2 p-2'>
                {
                    allReview.map(data =>

                        <Card className="" horizontal>
                            <div className='flex-1 space-y-2'>
                                <h3>Property: {data.propertyName}</h3>
                                <h5>Owner: {data.agentName}</h5>
                                <p className="text-pink-700">"{data.reviewDescription}"</p>
                                <div className="flex justify-end">
                                <p className="text-gray-600">{data.reviewTime}</p>
                                </div>
                               
                            </div>
                    
                    </Card>
                    )
                }
            </div>
        </div>
    );
};

export default MyReview;