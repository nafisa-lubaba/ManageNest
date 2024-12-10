// import { Link, Outlet, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/UseAuth";
// import UseAdmin from "../hooks/UseAdmin";
// import UseMember from "../hooks/UseMember";
// import logo from "../../src/assets/Managenest-1-removebg-preview.png";
// // import { FaUser, FaUserGroup, FaBullhorn, FaFileAlt, FaTicketAlt, FaCreditCard, FaClock, FaBell, FaSignOutAlt } from "react-icons/fa"; // Example icons
// import { FaBell, FaBullhorn, FaClock, FaCreditCard, FaFileAlt, FaSignOutAlt, FaTicketAlt, FaUser } from "react-icons/fa";
// import { FaUserGroup } from "react-icons/fa6";


// const Dashboard = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();
//   console.log(user);

//   const [isAdmin] = UseAdmin();
//   const [isMember] = UseMember();

//   const adminLinks = [
//     {
//       name: 'Admin Profile',
//       path: '/dashboard/adminProfile',
//       icon: <FaUser />,
//     },
//     {
//       name: 'Manage Members',
//       path: '/dashboard/manageMembers',
//       icon: <FaUserGroup />,
//     },
//     // {
//     //   name: 'Manage Users',
//     //   path: '/dashboard/manageUsers',
//     //   icon: <FaUserGroup />,
//     // },
//     {
//       name: 'Make Announcement',
//       path: '/dashboard/makeAnnouncement',
//       icon: <FaBullhorn />,
//     },
//     {
//       name: 'Agreement Requests',
//       path: '/dashboard/agreementRequests',
//       icon: <FaFileAlt />,
//     },
//     {
//       name: 'Manage Coupons',
//       path: '/dashboard/manageCoupons',
//       icon: <FaTicketAlt />,
//     },
//   ];

//   const memberLinks = [
//     {
//       name: 'My Profile',
//       path: '/dashboard/memberProfile',
//       icon: <FaUser />,
//     },
//     {
//       name: 'Make Payment',
//       path: '/dashboard/makePayment',
//       icon: <FaCreditCard />,
//     },
//     {
//       name: 'Payment History',
//       path: '/dashboard/paymentistory',
//       icon: <FaClock />,
//     },
//     {
//       name: 'Announcements',
//       path: '/dashboard/announcements',
//       icon: <FaBell />,
//     },
//   ];

//   const userLinks = [
//     {
//       name: 'My Profile',
//       path: '/dashboard/userProfile',
//       icon: <FaUser />,
//     },
//     {
//       name: 'Announcements',
//       path: '/dashboard/announcements',
//       icon: <FaBell />,
//     },
//     {
//       name: 'Service Requests',
//       path: '/dashboard/serviceRequests',
//       icon: <FaFileAlt />,
//     },
//     {
//       name: 'Contact Management',
//       path: '/dashboard/contactManagement',
//       icon: <FaUserGroup />,
//     },
//   ];

//   const handlelogOut = () => {
//     // Perform your logout logic here (e.g., clearing tokens, state, etc.)
//     console.log("User logged out"); // Replace this with actual logout logic
//     logOut()
//     // Navigate to the homepage
//     navigate("/");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-cyan-500 shadow-xl">
//         <div className="p-4 border-b border-white">
//           <Link to="/" className="flex items-center justify-center">
//             <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
//           </Link>
//         </div>

//         <nav className="mt-6 px-2">
//           {isAdmin &&
//             adminLinks.map((link, index) => (
//               <Link
//                 to={link.path}
//                 key={index}
//                 className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
//               >
//                 <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
//                   {link.icon}
//                 </span>
//                 <span className="text-sm font-medium">{link.name}</span>
//               </Link>
//             ))}

//           {isMember &&
//             memberLinks.map((link, index) => (
//               <Link
//                 to={link.path}
//                 key={index}
//                 className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
//               >
//                 <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
//                   {link.icon}
//                 </span>
//                 <span className="text-sm font-medium">{link.name}</span>
//               </Link>
//             ))}

//           {!isAdmin &&
//             !isMember &&
//             userLinks.map((link, index) => (
//               <Link
//                 to={link.path}
//                 key={index}
//                 className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
//               >
//                 <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
//                   {link.icon}
//                 </span>
//                 <span className="text-sm font-medium">{link.name}</span>
//               </Link>
//             ))}

//           {/* Home Button */}

//         </nav>

//         <div className="absolute bottom-0 w-64 p-4 border-t border-white">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 rounded-full">
//               <img
//                 src={user?.photoURL || "https://via.placeholder.com/40"}
//                 alt="User"
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-sm font-medium text-white">{user?.displayName || 'User'}</h3>
//               <p className="text-xs text-blue-200">{user?.email}</p>
//             </div>
//           </div>

//           {/* Home Button */}
//           <Link
//             to="/"
//             className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
//           >
//             <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
//               🏠
//             </span>
//             <span className="text-sm font-medium">Home</span>
//           </Link>

//           {/* Logout Button */}
//           <button
//             onClick={handlelogOut}
//             className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1 w-full text-left"
//           >
//             <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
//               <FaSignOutAlt />
//             </span>
//             <span className="text-sm font-medium">Logout</span>
//           </button>


//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex justify-center p-2">
//         <div className="bg-white w-full rounded-lg shadow-md p-6">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import UseAdmin from "../hooks/UseAdmin";
import UseMember from "../hooks/UseMember";
// import { Menu } from 'lucide-react';
import { FaBell, FaBullhorn, FaClock, FaCreditCard, FaFileAlt, FaSignOutAlt, FaTicketAlt, FaUser, FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FcMenu } from 'react-icons/fc';

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin();
  const [isMember] = UseMember();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const adminLinks = [
    { name: 'Admin Profile', path: '/dashboard/adminProfile', icon: <FaUser /> },
    { name: 'Manage Members', path: '/dashboard/manageMembers', icon: <FaUserGroup /> },
    { name: 'Make Announcement', path: '/dashboard/makeAnnouncement', icon: <FaBullhorn /> },
    { name: 'Agreement Requests', path: '/dashboard/agreementRequests', icon: <FaFileAlt /> },
    { name: 'Manage Coupons', path: '/dashboard/manageCoupons', icon: <FaTicketAlt /> },
  ];
  const memberLinks = [
    { name: 'My Profile', path: '/dashboard/memberProfile', icon: <FaUser />, },
    { name: 'Make Payment', path: '/dashboard/makePayment', icon: <FaCreditCard />, },
    { name: 'Payment History', path: '/dashboard/paymentHistory', icon: <FaClock />, },
    { name: 'Announcements', path: '/dashboard/announcements', icon: <FaBell />, },
  ];
  const userLinks = [
    { name: 'My Profile', path: '/dashboard/userProfile', icon: <FaUser /> },
    { name: 'Announcements', path: '/dashboard/announcements', icon: <FaBell /> },
   
  ];

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className={`flex flex-col w-full md:w-64 bg-cyan-500 px-2 py-4 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
        {/* User Profile Section */}
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={user?.photoURL || "https://via.placeholder.com/40"}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800">{user?.displayName || 'User'}</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600">{user?.email}</p>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex flex-col gap-5 justify-between flex-1 mt-6">
            {isAdmin &&
              adminLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}

            {isMember &&
              memberLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}

            {!isAdmin &&
              !isMember &&
              userLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="group flex items-center px-4 py-3 mt-1 text-cyan-500 transition-all duration-200 ease-in-out rounded-lg bg-white hover:translate-x-1"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-cyan-500">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}

            {/* Divider */}
            <div className="border-t mt-6"></div>

            {/* Home Link */}
            <li>
              <NavLink
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <FaHome />
                Home
              </NavLink>
            </li>

            {/* Logout Button */}
            <li>
              <button
                onClick={handleLogOut}
                className="w-full flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-cyan-500 text-white"
      >
        <FcMenu size={24} />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;