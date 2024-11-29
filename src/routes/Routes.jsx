import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Apartments from "../pages/Apartments";
import ApartmentListing from "../pages/ApartmentListing";
import ApartmentDetails from "../pages/ApartmentDetails"
import ErrorPages from "../pages/ErrorPages";

  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPages></ErrorPages>,
     
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/Apartment",
            element:<ApartmentListing></ApartmentListing>,
        },
        {
          path: "/product/:id",
          element: <ApartmentDetails/>,
      },
        
        
  
      ],
    },

    { path: '/login', element: <LogIn></LogIn>},
    { path: '/signup', element: <SignUp></SignUp>},
  ])