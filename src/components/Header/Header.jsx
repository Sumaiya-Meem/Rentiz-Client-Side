import React, { useContext } from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/icon.png"
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext)

    const handleLogout =()=>{
        console.log("logout")
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    const navItem = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/allProperties"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            All Properties
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Dashboard
        </NavLink>



    </>
    return (
        <div className=''>

            <Navbar fluid rounded className=' w-full fixed z-10 bg-opacity-60  bg-[#121b25] text-white max-w-screen-lg' >
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <div className='flex flex-col'>
                        <span className="self-center whitespace-nowrap  font-semibold dark:text-white text-2xl">Rentiz</span>
                     
                    </div>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <>
                        <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user?.photoURL} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{ user?.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                        <Button color="" className=''  onClick={handleLogout}>
                        LogOut
                    </Button>
                        </Dropdown.Item>
                    </Dropdown> 
                        </>
                        :
                        <>
                       <div className='flex items-center'>
                       <Link to="/register">
                    <Button color="" className='mr-2' pill >
                        SignUp
                    </Button></Link>
                    <Link to="/login">
                    <Button color="" className='p-2 font-semibold' pill>
                        Login
                    </Button>
                    </Link>
                       </div>
                        </>
                    }
                    
                    
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {navItem}
                </Navbar.Collapse>
           
            </Navbar>



        </div>
    );
};

export default Header;