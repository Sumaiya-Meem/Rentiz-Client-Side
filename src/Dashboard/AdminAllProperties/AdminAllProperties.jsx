import React from 'react';
import useProperty from '../../hooks/useProperty';
import Loading from '../../Routes/Loading';
import { Button, Table } from 'flowbite-react';
import { RxCross2 } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const AdminAllProperties = () => {
    const [allProperty,isLoading,refetch] =useProperty()

    const axiosSecure =useAxiosSecure();
    if(isLoading){
        return <Loading></Loading>
    }

    const handleVerify = (id) =>{
         axiosSecure.put(`/properties/verify/${id}`, { status: 'verified' })
         .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount >0){
                refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "staus update successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })
    }
    
    const handleReject = (id) =>{
        axiosSecure.put(`/properties/reject/${id}`, { status: 'rejected' })
        .then(res=>{
           console.log(res.data)
           if(res.data.modifiedCount >0){
               refetch();
               Swal.fire({
                   position: "top-center",
                   icon: "success",
                   title: "staus update successfully",
                   showConfirmButton: false,
                   timer: 1500
                 });
           }
        })
   }

    return (
        <div className="">
        <h1 className='text-2xl font-bold mt-4 pl-3 text-[#205081]'>Total Properties :{allProperty.length} </h1>

        <div className="overflow-x-auto mt-10 ml-0 lg:ml-3">
            <Table striped className="border">
                <Table.Head>
                    <Table.HeadCell className="border">Name</Table.HeadCell>
                    <Table.HeadCell className="border">Location</Table.HeadCell>
                    <Table.HeadCell className="border">Price</Table.HeadCell>
                    <Table.HeadCell className="border">Agent Name</Table.HeadCell>
                    <Table.HeadCell className="border">Agent Email</Table.HeadCell>
                    <Table.HeadCell className="border">Action</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        allProperty.map((property,index)=>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={property._id}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border">
                            {property.name}
                        </Table.Cell>
                        <Table.Cell className="border">{property.location}</Table.Cell>
                        <Table.Cell className="border">{property.price}</Table.Cell>
                        <Table.Cell className="border">{property.agentName}</Table.Cell>
                        <Table.Cell className="border">{property.agentEmail}</Table.Cell>
                       
                        <Table.Cell className="border">
                        <div className="flex">
                    {property.status !== 'verified' && (
                      <Button
                        color=""
                        className="w-[30px] h-[25px]"
                        onClick={() => handleVerify(property._id)}
                      >
                        <IoIosCheckmarkCircleOutline className="text-2xl text-white bg-yellow-400 rounded-md" />
                      </Button>
                    )}

                    {property.status !== 'rejected' && (
                      <Button
                        color=""
                        className="w-[30px] h-[25px]"
                        onClick={() => handleReject(property._id)}
                      >
                        <RxCross2 className="text-2xl text-white bg-red-600 rounded-md" />
                      </Button>
                    )}

                    {property.status === 'verified' && (
                      <span className="ml-2 text-green-600 font-semibold">Verified</span>
                    )}

                    {property.status === 'rejected' && (
                      <span className="ml-2 text-red-600 font-semibold">Rejected</span>
                    )}
                  </div>
                        </Table.Cell>
                    </Table.Row>
                        )
                    }

                </Table.Body>
            </Table>
        </div>

    </div>
    );
};

export default AdminAllProperties;