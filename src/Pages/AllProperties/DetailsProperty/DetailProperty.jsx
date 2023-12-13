import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbJewishStarFilled } from "react-icons/tb";
import { Button, Card, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineSend } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const DetailProperty = () => {
    const property = useLoaderData();
    const { name, image, price, agentName, location, agentImage,status} = property;

    const axiosSecure=useAxiosSecure()

    const [openModal, setOpenModal] = useState(false);
    const [reviewText, setReviewText] = useState('');
    function onCloseModal() {
        setOpenModal(false);
    }

    const handleReviewSubmit = () => {
        const currentDate = new Date();
        const reviewData = {
            propertyName: name,
            reviewDescription: reviewText,
            agentName: agentName,
            reviewTime: currentDate.toLocaleString()
        };

        console.log(reviewData);
       axiosSecure.post('/reviews',reviewData )
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Add review",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })
        setOpenModal(false);
    };
    const handleWishSubmit = () => {

        const wishData = {
            propertyName: name,
            propertyImage: image,
            price:price,
            location:location,
            agentName: agentName,
            agentImage:  agentImage,
            status:status
        };

        console.log(wishData);
       axiosSecure.post('/wish',wishData)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Add the property in wishlist",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })
        setOpenModal(false);
    };



    return (
        <div className=''>
            <Card className="w-[600px] h-[350px] mx-auto" horizontal>
                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <img src={image} alt="" />
                    </div>
                    <div className='flex-1 font-semibold'>
                        <h3>Property Name: {name}</h3>
                        <h5>Location: {location}</h5>
                        <h5>Price: ${price}</h5>
                        <h6>Owner: {agentName}</h6>
                        <div className="flex flex-wrap gap-2 mt-5">
                            <Button onClick={handleWishSubmit}>
                                <TbJewishStarFilled className="mr-2 h-5 w-5" />
                                Wishlist
                            </Button>
                            <Button onClick={() => setOpenModal(true)}>
                                <MdOutlineRateReview className="mr-2 h-5 w-5" />
                                Review
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-2">
                        <h3 className="text-xl text-center font-semibold text-gray-900 ">Review</h3>
                        <Textarea 
                         value={reviewText}
                         onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review..." required rows={4} />
                    </div>
                    <div className='mt-3'>
                    <Button onClick={handleReviewSubmit}>
                    <MdOutlineSend  className="mr-2 h-5 w-5" />
                                Send
                            </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DetailProperty;
