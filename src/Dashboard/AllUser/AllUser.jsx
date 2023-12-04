import React from 'react';
import useUser from '../../hooks/useUser';
import { Button, Table } from 'flowbite-react';
import { MdDeleteForever } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
const AllUser = () => {
    const [user] = useUser();

    const handleDelete= (id)=>{
        
    }
    return (
        <div className="">
            <h1 className='text-2xl font-bold mt-4 pl-3 text-[#205081]'>Total Users :{user.length} </h1>

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
                            user.map((user,index)=>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user._id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border">
                                {user.name}
                            </Table.Cell>
                            <Table.Cell className="border">{user.email}</Table.Cell>
                            <Table.Cell className="border">
                               <div className='flex flex-col md:flex-row gap-2'>
                               <RiAdminFill  className='bg-green-400 text-2xl  text-white   w-[30px] h-[25px] rounded-md'/>
                                <IoIosPerson className='bg-blue-500 text-2xl text-white  w-[30px] h-[25px] rounded-md'/>
                               </div>
                            </Table.Cell>
                            <Table.Cell className="border">
                                <Button color="" className='w-[30px] h-[25px]' onClick={handleDelete(user._id)}>
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