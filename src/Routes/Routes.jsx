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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "profile",
          element: <Profile></Profile>,
        },
        {
          path: "addProperty",
          element: <AddProperty></AddProperty>,
        },
      ]
      }
  ]);

export default router ;