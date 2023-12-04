import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { IoIosLogOut } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const Profile = () => {

    const {user,logOut} = useContext(AuthContext);
    const navigate=useNavigate();
    const axiosSecure=useAxiosSecure()

    const[userRole,setUserRole]=useState(false)
    const[role,setRole]=useState('')

    useEffect(() => {
      const LoadUserData = async () => {
        try {
          const response = await axiosSecure.get(`users/${user.email}`);
          const userData = response.data;
         if(userData.role == "admin" || userData.role=="agent"){
          setUserRole(true)
          setRole(userData.role)
         }
        } catch (error) {
          console.error(error);
        }
      };
  
      if (user && user.email) {
          LoadUserData();
      }
    }, [user]);
    const handleLogout =()=>{
        console.log("logout")
        logOut()
        .then(res=>{
            navigate("/login")

        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='p-4'>
    <Card
      className="w-full"
    >
        <div className='flex  w-full  relative'>
        <h1 className='text-2xl font-semibold'>My Profile</h1>
        <Button className='mx-auto text-xl absolute right-0' color="" onClick={handleLogout}>
                 <span className='mr-2 text-xl'><FaRegEdit></FaRegEdit></span>Edit
      </Button>
        </div>

        <div className='w-[60%] mx-auto  text-center '>
        <img src={user?.photoURL} alt="" className='rounded-[50%] w-[100px] h-[100px] mx-auto'/>
        <div className='flex gap-2 items-center mt-2 justify-center'>
           <h2 className='font-bold tracking-tight text-gray-900 dark:text-white'>Full Name :</h2>
           <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
       {user?.displayName}
      </h5>
        </div>
        <div className='flex  gap-2 items-center mt-2 justify-center'>
           <h2 className='font-bold tracking-tight text-gray-900 dark:text-white'>Eamil Address : </h2>
           <p className="font-semibold text-gray-700 dark:text-gray-400 my-3">
       {user?.email}
      </p>
        </div>
       {
        userRole ?
        <>
         <div  className='flex  gap-2 items-center mt-2 justify-center'>
        <h2 className='font-bold tracking-tight text-gray-900 dark:text-white'>Role : </h2>
           <p className="font-semibold text-gray-700 dark:text-gray-400 my-3 capitalize">
            {role}
        </p>
          
        </div>
        </>: <></>
        
       }
     
     
      <Button gradientDuoTone="redToYellow" className='mx-auto text-xl' pill onClick={handleLogout}>
                 <span className='mr-2 text-xl'><IoIosLogOut></IoIosLogOut></span>LogOut
      </Button>
                    
        </div>
    </Card>
 



        </div>
    );
};

export default Profile;