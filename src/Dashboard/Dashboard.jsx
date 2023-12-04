import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Dashboard = () => {
    const {user}=useContext(AuthContext)

    const axiosSecure=useAxiosSecure()

    const [isAdmin, setIsAdmin] = useState(false);
    const [isAgent, setIsAgent] = useState(false);
    useEffect(() => {
        const LoadUserData = async () => {
          try {
            const response = await axiosSecure.get(`users/${user.email}`);
            const userData = response.data;
    
            if (userData.role === "admin") {
              setIsAdmin(true);
              setIsAgent(false);
            } else if (userData.role === "agent") {
              setIsAdmin(false);
              setIsAgent(true);
            } else {
              setIsAdmin(false);
              setIsAgent(false);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        if (user && user.email) {
            LoadUserData();
        }
      }, [user]);
    

    return (
        <div className="lg:flex">
            <div className=" bg-[#3f86ae] h-screen  w-full lg:w-64 text-white">
                <ul >
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard">My Profile</NavLink>
                    </li>
                    {
                        isAdmin ? <>
                            <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                <NavLink to="/dashboard/properties">All Properties</NavLink>
                            </li>
                            <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                <NavLink to="/dashboard/allUser">All User</NavLink>
                            </li>
                            <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                <NavLink to="/dashboard/allReview">All Reviews</NavLink>
                            </li>
                        </>
                            :
                            isAgent ?
                                <>

                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/addProperty">Add Property</NavLink>
                                    </li>
                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/addedProperty">My Added Property</NavLink>
                                    </li>
                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/soldProperty">Sold Property</NavLink>
                                    </li>
                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/requestedProperty">Requested Property</NavLink>
                                    </li>

                                </>
                                :
                                <>
                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/wishlist">My WishList</NavLink>
                                    </li>
                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/bougth">Property Bougth</NavLink>
                                    </li>
                                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                        <NavLink to="/dashboard/myReview">My Reviews</NavLink>
                                    </li>
                                </>
                    }

                </ul>
            </div>
            {/* content */}
            <div className="flex-1">
                {/* <h1 className=" text-4xl my-2 p-2">Dashboard</h1> */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;