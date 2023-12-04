import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = 'true';
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
                            <>
                                
                                <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                    <NavLink to="/dashboard/addProperty">Add Property</NavLink>
                                </li>
                                <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                    <NavLink to="/dashboard/addedProperty">Added Property</NavLink>
                                </li>
                                <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                    <NavLink to="/dashboard/soldProperty">Sold Property</NavLink>
                                </li>
                                <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                                    <NavLink to="/dashboard/requestedProperty">Requested Property</NavLink>
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