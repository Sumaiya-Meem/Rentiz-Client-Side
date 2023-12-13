import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbJewishStarFilled } from "react-icons/tb";
import { Button, Card, Label, Modal, TextInput } from 'flowbite-react'; 
import { MdOutlineRateReview } from "react-icons/md";

const DetailProperty = () => {
    const property = useLoaderData();
    const { name, image, price, agentName, location } = property;

    const [openModal, setOpenModal] = useState(false);
    const [reviewText, setReviewText] = useState('');
    function onCloseModal() {
        setOpenModal(false);
      }

    const handleReviewSubmit = () => {
        const reviewData = {
            propertyName: name,
            reviewDescription: reviewText,
            agentName: agentName,
            timestamp: new Date().toISOString(),
        };

      
        closeModal();
        console.log(reviewData);
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
                            <Button>
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
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
    );
};

export default DetailProperty;
