
import { FaHome, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/UseAuth"; // Ensure the hook is correctly imported
import UseAdmin from "../hooks/UseAdmin";
import logo from "../../src/assets/Managenest-1-removebg-preview.png"

const Dashboard = () => {
    const { user } = useAuth();
    console.log(user)
    const [isAdmin]= UseAdmin();
    console.log(isAdmin)
    
    const adminLinks = [
        {
            name: 'Admin Profile',
            path: '/dashboard/admin-profile',
            
        },
        {
            name: 'Manage Members',
            path: '/dashboard/manage-members',
            
        },
        {
            name: 'Make Announcement',
            path: '/dashboard/make-announcement',
            
        },
        {
            name: 'Agreement Requests',
            path: '/dashboard/agreement-requests',
            
        },
        {
            name: 'Manage Coupons',
            path: '/dashboard/manage-coupons',
            
        },
    ]
    const memberLinks = [
        {
            name: 'Add Events',
            path: '/dashboard/add-event',
            
        },
        {
            name: 'Manage Events',
            path: '/dashboard/manage-event',
            
        },
        {
            name: 'Assign Moderator',
            path: '/dashboard/assign-mod',
            
        },
    ]
    const userLinks = [
        {
            name: 'My Profile',
            path: '/dashboard/my-profile',
            
        },
        {
            name: 'Announcements',
            path: '/dashboard/announcements',
            
        },
       
    ]
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 min-h-screen bg-cyan-500">
            <Link to="/">
          
          {/* Uncomment below if you have a logo image */}
          <img src={logo} alt="Logo" className="w-40 h-20" />
        </Link>
                
               {
               isAdmin && adminLinks.map((link, index) => (
                    <Link to={link.path} key={index} className="block">
                        <div   className="flex items-center gap-2 p-2 rounded hover:bg-cyan-600 text-white"
                            
                            >
                 
                            <span className="ml-4">{link.name}</span>
                        </div>
                    </Link>
                ))
               }
                 {
               !isAdmin && userLinks.map((link, index) => (
                    <Link to={link.path} key={index} className="block">
                        <div   className="flex items-center gap-2 p-2 rounded hover:bg-cyan-600 text-white"
                            
                            >
                 
                            <span className="ml-4">{link.name}</span>
                        </div>
                    </Link>
                ))
               }
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-gray-100">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;

