import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className=" bg-[#3f86ae] h-screen w-64 text-white">
                <ul >
                <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard/profile">My Profile</NavLink>
                    </li>
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
                </ul>
            </div>
            {/* content */}
            <div className="flex-1">
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;