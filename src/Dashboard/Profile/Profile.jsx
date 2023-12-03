import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


import { Button, Card } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
const Profile = () => {

    const {user,logOut} = useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout =()=>{
        console.log("logout")
        logOut()
        .then(res=>{
            navigate("/login")

        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
    <Card
      className="w-full"
    >
        <div className='w-[60%] mx-auto'>
        <img src={user?.photoURL} alt="" className='rounded-[50%] w-[100px] h-[100px]'/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {user?.displayName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {user?.email}
      </p>
      <Button color="" className=''  onClick={handleLogout}>
                        LogOut
      </Button>
                    
        </div>
    </Card>
 



        </div>
    );
};

export default Profile;