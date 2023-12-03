import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/icon.png"

const Header = () => {

   

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
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Login
        </NavLink>



    </>
    return (
        <div className=''>

            <Navbar fluid rounded className=' w-full bg-opacity-80  bg-[#121b25] text-white max-w-screen-lg' >
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <div className='flex flex-col'>
                        <span className="self-center whitespace-nowrap  font-semibold dark:text-white text-2xl">Rentiz</span>
                     
                    </div>
                </Navbar.Brand>
                {/* <div className="flex md:order-2">
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
                        <Link to="/register">
                    <Button color="" className='mr-2' pill onClick={handleLogout}>
                        SignUp
                    </Button></Link>
                    <Link to="/login">
                    <Button color="light" className='p-2 font-semibold' pill>
                        Login
                    </Button>
                    </Link>
                        </>
                    }
                    
                    
                    <Navbar.Toggle />
                </div> */}
                <Navbar.Collapse>
                    {navItem}
                </Navbar.Collapse>
           
            </Navbar>



        </div>
    );
};

export default Header;