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
            path: "/apartment",
            element:<ApartmentListing></ApartmentListing>,
        },
        {
          path: "/apartment/:id",
          element: <ApartmentDetails/>,
          loader:({ params }) => fetch(`${import.meta.env.VITE_API_URL}/apartmentss/${params.id}`)
      },
        
        
  
      ],
    },

    { path: '/login', element: <LogIn></LogIn>},
    { path: '/signup', element: <SignUp></SignUp>},
  ])