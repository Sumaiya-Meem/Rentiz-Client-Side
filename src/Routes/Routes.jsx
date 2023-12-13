import React from 'react';

import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../Pages/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AllProperties from '../Pages/AllProperties/AllProperties';
import PrivateRoute from './PrivateRoute';

import Profile from '../Dashboard/Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import AddProperty from '../Dashboard/AddProperty/AddProperty';
import AllUser from '../Dashboard/AllUser/AllUser';
import AddedProperty from '../Dashboard/AddedProperty/AddedProperty';
import AdminAllProperties from '../Dashboard/AdminAllProperties/AdminAllProperties';
import DetailProperty from '../Pages/AllProperties/DetailsProperty/DetailProperty';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/allProperties",
          element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>,
        },
        {
          path: "/detailsPoperty/:id",
          element: <PrivateRoute><DetailProperty></DetailProperty></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/properties/${params.id}`)
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "",
          element: <Profile></Profile>,
        },
        {
          path: "addProperty",
          element: <AddProperty></AddProperty>,
        },
        // admin route
        {
          path: "allUser",
          element: <AllUser></AllUser>,
        },
        {
          path: "properties",
          element: <AdminAllProperties></AdminAllProperties>,
        },
        // agent route
        {
          path:"addedProperty",
          element:<AddedProperty></AddedProperty>

        }
      ]
      }
  ]);

export default router ;