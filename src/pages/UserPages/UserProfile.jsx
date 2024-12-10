// import React from 'react';
import { MdEmail, MdCalendarToday, MdApartment, MdLocationOn, MdHome } from 'react-icons/md'; // Import necessary React Icons
import { FaUserCircle, FaHashtag } from 'react-icons/fa';
import UseAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user } = UseAuth();
  console.log(user);
  
  // Sample user data
 
  

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section with Profile Image */}
        <div className="relative mb-8">
          <div className="h-48 bg-[#06b6d4] rounded-t-2xl"></div>
          <div className="absolute -bottom-16 left-8 p-2 bg-white rounded-full shadow-xl">
            <img
              src={user?.photoURL}
              // alt={user.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* User Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info Card */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-6">
              <FaUserCircle className="w-6 h-6 text-[#06b6d4] mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">{user?.displayName
              }</h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <MdEmail className="w-5 h-5 text-[#06b6d4] mr-3" />
                <span className="text-gray-600">{user?.email}</span>
              </div>
             
            </div>
          </div>

          {/* Apartment Info Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <MdApartment className="w-5 h-5 text-[#06b6d4] mr-2" />
              Apartment Details
            </h2>

           <p className='bg-cyan-500'>By Apartment First</p>
           <Link to='/apartment'> To Know More </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
