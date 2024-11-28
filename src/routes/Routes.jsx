import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Apartments from "../pages/Apartments";

  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
     
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/Apartment",
            element:<Apartments></Apartments>,
        },
        
        
  
      ],
    },

    { path: '/login', element: <LogIn></LogIn>},
    { path: '/signup', element: <SignUp></SignUp>},
  ])