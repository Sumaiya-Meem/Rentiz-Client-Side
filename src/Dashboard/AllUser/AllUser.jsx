import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import { Button, Table } from 'flowbite-react';
import { MdDeleteForever } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import Loading from '../../Routes/Loading';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const AllUser = () => {
    const [users,isLoading,refetch] = useUser();
    const axiosSecure = useAxiosSecure();
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDelete= (users)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${users._id}`)
              .then(res=>{
                if(res.data.deletedCount > 0){
                 refetch();
                 Swal.fire({
                    title: "Deleted!",
                    text: "User Delete successfully.",
                    icon: "success"
                  });
                }
              })
             
            }
          });
    }
    const handleAdmin =(user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount >0){
                refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.name} is Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleAgent = (user) => {
        axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${user.name} is Agent Now`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      };
    return (
        <div className="">
            <h1 className='text-2xl font-bold mt-4 pl-3 text-[#205081]'>Total Users :{users.length} </h1>

            <div className="overflow-x-auto mt-10 ml-0 lg:ml-3">
                <Table striped className="border">
                    <Table.Head>
                        <Table.HeadCell className="border">User name</Table.HeadCell>
                        <Table.HeadCell className="border">User email</Table.HeadCell>
                        <Table.HeadCell className="border">Role</Table.HeadCell>
                        <Table.HeadCell className="border">Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map((user,index)=>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user._id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border">
                                {user.name}
                            </Table.Cell>
                            <Table.Cell className="border">{user.email}</Table.Cell>
                            <Table.Cell className="border">
                            <div className='flex flex-col md:flex-row gap-2'>
                    {user.role === "admin" ? 
                      "Admin"
                    : user.role === "agent" ? 
                      <>
                     <div className='flex gap-1 items-center'>
                        <p>Agent</p>
                        <Button color=""><p className='bg-yellow-500 text-white p-2 rounded-md'>Fraud</p></Button>
                     </div>
                      </>
                     : (
                      <>
                        <Button
                          className='w-[30px] h-[28px]'
                          onClick={() => handleAdmin(user)}
                        >
                          <RiAdminFill className='bg-green-400 text-2xl  text-white    rounded-md' />
                        </Button>
                        <Button
                          className='w-[30px] h-[28px]'
                          onClick={() => handleAgent(user)}
                        >
                          <IoIosPerson className='bg-blue-500 text-2xl text-white  w-[30px] h-[25px] rounded-md' />
                        </Button>
                      </>
                    )}
                  </div>
                            </Table.Cell>
                            <Table.Cell className="border">
                                <Button color="" className='w-[30px] h-[25px]' onClick={()=>handleDelete(user)}>
                            <MdDeleteForever className='text-2xl text-white bg-red-600  rounded-md' />
                                </Button></Table.Cell>
                        </Table.Row>
                            )
                        }

                    </Table.Body>
                </Table>
            </div>

        </div>
    );
};

export default AllUser;