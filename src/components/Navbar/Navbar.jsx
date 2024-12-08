import UseAuth from "../../hooks/UseAuth";
import logo from "../../assets/Managenest-1-removebg-preview.png"
import { Link, NavLink } from "react-router-dom";
import { MdOutlineNotificationAdd } from "react-icons/md";


const Navbar = () => {
  const { user, logOut } = UseAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " btn btn-outline py-2 px-4 border-cyan-500 text-cyan-500"
              : " btn bg-cyan-500 py-2 px-4 rounded-lg text-white font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apartment"
          className={({ isActive }) =>
            isActive
              ? "btn  btn-outline py-2 px-4 border-cyan-500 text-cyan-500"
              : "btn bg-cyan-500 py-2 px-4 rounded-lg text-white font-bold"
          }
        >
          Apartments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline py-2 px-4 border-cyan-500 text-cyan-500"
              : "btn bg-cyan-500 py-2 px-4 rounded-lg text-white font-bold"
          }
        >
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed w-full bg-gray-100 z-50 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/">
          
          {/* Uncomment below if you have a logo image */}
          <img src={logo} alt="Logo" className="w-20" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Notifications Icon */}
        <MdOutlineNotificationAdd className="text-3xl text-cyan-500" />

        {/* User Profile */}
        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User"
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mt-2">
                <span className="font-medium">{user.displayName || "User"}</span>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="btn bg-cyan-500 text-white mt-2"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="btn bg-blue-500 text-white mt-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-cyan-400 text-white hover:bg-blue-500">
              Join Us
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
