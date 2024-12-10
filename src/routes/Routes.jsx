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
import PaymentPage from "../pages/MemberPages/PaymentPage";
import PaymentHistory from "../pages/MemberPages/PaymentHistory";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><ApartmentListing /></PrivateRoute>
      },
      {
        path: "/apartment/:id",
        element: <PrivateRoute><ApartmentDetails /></PrivateRoute>,
      },
      {
        path: "/aboutUs",
        element: <PrivateRoute><AboutUs /></PrivateRoute>
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
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment/:id",
        element: <PaymentPage />,
        loader: ({ params, request }) => {
          const url = new URL(request.url);
          return {
            id: params.id,
            rent: url.searchParams.get('rent'),
            month: url.searchParams.get('month'),
            apartmentNo: url.searchParams.get('apartmentNo'),
            blockNo: url.searchParams.get('blockNo'),
            floorNo: url.searchParams.get('floorNo'),
          };
        },
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