
// import { FaHome, FaUser } from "react-icons/fa";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import useAuth from "../hooks/UseAuth"; // Ensure the hook is correctly imported
// import UseAdmin from "../hooks/UseAdmin";
// import logo from "../../src/assets/Managenest-1-removebg-preview.png"
// import UseMember from "../hooks/UseMember";

// const Dashboard = () => {
//     const { user } = useAuth();
//     console.log(user)
//     const [isAdmin] = UseAdmin();
//     console.log(isAdmin)
//     const [isMember] = UseMember();
//     console.log(isMember)
    

//     const adminLinks = [
//         {
//             name: 'Admin Profile',
//             path: '/dashboard/admin-profile',

//         },
//         {
//             name: 'Manage Members',
//             path: '/dashboard/manage-members',

//         },
//         {
//             name: 'Make Announcement',
//             path: '/dashboard/make-announcement',

//         },
//         {
//             name: 'Agreement Requests',
//             path: '/dashboard/agreement-requests',

//         },
//         {
//             name: 'Manage Coupons',
//             path: '/dashboard/manage-coupons',

//         },
//     ]
//     const memberLinks = [
//         {
//             name: 'My Profile',
//             path: '/dashboard/my-profile',

//         },
//         {
//             name: 'Make payment',
//             path: '/dashboard/make-payment',

//         },
//         {
//             name: 'Payment History',
//             path: '/dashboard/payment-history',

//         },
//         {
//             name: 'Announcements',
//             path: '/dashboard/announcements',

//         },
//     ]
//     const userLinks = [
//         {
//             name: 'My Profile',
//             path: '/dashboard/my-profile',

//         },
//         {
//             name: 'Announcements',
//             path: '/dashboard/announcements',

//         },

//     ]
//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <aside className="w-64 min-h-screen bg-cyan-500">
//                 <Link to="/">

//                     {/* Uncomment below if you have a logo image */}
//                     <img src={logo} alt="Logo" className="w-40 h-20" />
//                 </Link>

//                 {
//                     isAdmin && adminLinks.map((link, index) => (
//                         <Link to={link.path} key={index} className="block">
//                             <div className="flex items-center gap-2 p-2 rounded hover:bg-cyan-600 text-white"

//                             >

//                                 <span className="ml-4">{link.name}</span>
//                             </div>
//                         </Link>
//                     ))
//                 }
//                  {
//                     isMember && memberLinks.map((link, index) => (
//                         <Link to={link.path} key={index} className="block">
//                             <div className="flex items-center gap-2 p-2 rounded hover:bg-cyan-600 text-white"

//                             >

//                                 <span className="ml-4">{link.name}</span>
//                             </div>
//                         </Link>
//                     ))
//                 }
//                 {
//                     !isAdmin && !isMember  && userLinks.map((link, index) => (
//                         <Link to={link.path} key={index} className="block">
//                             <div className="flex items-center gap-2 p-2 rounded hover:bg-cyan-600 text-white"

//                             >

//                                 <span className="ml-4">{link.name}</span>
//                             </div>
//                         </Link>
//                     ))
//                 }
                
//             </aside>

//             {/* Main Content */}
//             <main className="flex-1 p-8 bg-gray-100">
//                 <Outlet />
//             </main>
//         </div>
//     );
// };

// export default Dashboard;



import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import UseAdmin from "../hooks/UseAdmin";
import UseMember from "../hooks/UseMember";
import logo from "../../src/assets/Managenest-1-removebg-preview.png"


const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = UseAdmin();
  const [isMember] = UseMember();

  const adminLinks = [
    {
      name: 'Admin Profile',
      path: '/dashboard/admin-profile',
    //   icon: <user className="w-5 h-5" />
    },
    {
      name: 'Manage Members',
      path: '/dashboard/manage-members',
    //   icon: <UserGroupIcon className="w-5 h-5" />
    },
    {
      name: 'Make Announcement',
      path: '/dashboard/make-announcement',
    //   icon: <BullhornIcon className="w-5 h-5" />
    },
    {
      name: 'Agreement Requests',
      path: '/dashboard/agreement-requests',
    //   icon: <DocumentTextIcon className="w-5 h-5" />
    },
    {
      name: 'Manage Coupons',
      path: '/dashboard/manage-coupons',
    //   icon: <TicketIcon className="w-5 h-5" />
    },
  ];

  const memberLinks = [
    {
      name: 'My Profile',
      path: '/dashboard/my-profile',
    //   icon: <UserIcon className="w-5 h-5" />
    },
    {
      name: 'Make Payment',
      path: '/dashboard/make-payment',
    //   icon: <CreditCardIcon className="w-5 h-5" />
    },
    {
      name: 'Payment History',
      path: '/dashboard/payment-history',
    //   icon: <ClockIcon className="w-5 h-5" />
    },
    {
      name: 'Announcements',
      path: '/dashboard/announcements',
    //   icon: <BellIcon className="w-5 h-5" />
    },
  ];

  const userLinks = [
    {
      name: 'My Profile',
      path: '/dashboard/my-profile',
    //   icon: <UserIcon className="w-5 h-5" />
    },
    {
      name: 'Announcements',
      path: '/dashboard/announcements',
    //   icon: <BellIcon className="w-5 h-5" />
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-xl">
        <div className="p-4 border-b border-blue-700">
          <Link to="/" className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-40 h-20 object-contain" />
          </Link>
        </div>

        <nav className="mt-6 px-2">
          {isAdmin && adminLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="group flex items-center px-4 py-3 mt-1 text-gray-100 transition-all duration-200 ease-in-out rounded-lg hover:bg-blue-700 hover:translate-x-1"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-100 group-hover:text-white">
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          ))}

          {isMember && memberLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="group flex items-center px-4 py-3 mt-1 text-gray-100 transition-all duration-200 ease-in-out rounded-lg hover:bg-blue-700 hover:translate-x-1"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-100 group-hover:text-white">
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          ))}

          {!isAdmin && !isMember && userLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="group flex items-center px-4 py-3 mt-1 text-gray-100 transition-all duration-200 ease-in-out rounded-lg hover:bg-blue-700 hover:translate-x-1"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-100 group-hover:text-white">
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-blue-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
             
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-white">{user?.displayName || 'User'}</h3>
              <p className="text-xs text-blue-200">{user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

