import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ErrorPages from "../pages/SharedPages/ErrorPages";
import Home from "../pages/SharedPages/Home";
import ApartmentListing from "../pages/SharedPages/ApartmentListing";
import ApartmentDetails from "../pages/SharedPages/ApartmentDetails";
import AboutUs from "../pages/SharedPages/AboutUs";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../pages/AdminPages/ManageUser";
import AdminProfile from "../pages/AdminPages/AdminProfile";
import MemberProfile from "../pages/MemberPages/MemberProfile";
import UserProfile from "../pages/UserPages/UserProfile";
import Announcements from "../pages/UserPages/Announcements";
import ServiceRequests from "../pages/UserPages/ServiceRequests";
import ContactManagement from "../pages/UserPages/ContactManagement";
import ManageCoupons from "../pages/AdminPages/ManageCoupons";
import ManageMembers from "../pages/AdminPages/ManageMembers";
import MakeAnnouncement from "../pages/AdminPages/MakeAnnouncement";
import AgreementRequests from "../pages/AdminPages/AgreementRequests";
import PaymentForm from "../pages/MemberPages/PaymentForm";

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
        element: <ApartmentListing></ApartmentListing>,
      },
      {
        path: "/apartment/:id",
        element: <ApartmentDetails />,
        // loader: ({ params }) => fetch(`http://localhost:5000/apartments/${params.id}`)
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },



    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      //usersRoute
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>,
      },
      {
        path: 'announcements',
        element: <Announcements></Announcements>,
      },
      {
        path: 'serviceRequests',
        element: <ServiceRequests></ServiceRequests>,
      },
      {
        path: 'contactManagement',
        element: <ContactManagement></ContactManagement>,
      },
      //memberRoute
      {
        path: 'memberProfile',
        element: <MemberProfile></MemberProfile>,
      },
      {
        path: 'announcements',
        element: <Announcements></Announcements>,
      },
      {
        path: 'makePayment',
        element: <PaymentForm></PaymentForm>,
      },
      //adminRoute
      {
        path: 'adminProfile',
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: 'manageCoupons',
        element: <ManageCoupons></ManageCoupons>,
      },
      {
        path: 'agreementRequests',
        element: <AgreementRequests></AgreementRequests>,
      },
      {
        path: 'makeAnnouncement',
        element: <MakeAnnouncement></MakeAnnouncement>,
      },
      {
        path: 'manageUsers',
        element: <ManageUser></ManageUser>,
      },
      {
        path: 'manageMembers',
        element: <ManageMembers></ManageMembers>,
      }
    ]
  },

  { path: '/login', element: <LogIn></LogIn> },
  { path: '/signup', element: <SignUp></SignUp> },
])