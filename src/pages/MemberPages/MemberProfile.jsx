import { FaHashtag, FaUserCircle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import { MdApartment, MdCalendarToday, MdEmail, MdHome, MdLocationOn } from "react-icons/md";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import { useEffect, useState } from "react";

const MemberProfile = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [payments, setPayments] = useState([]);
  console.log(payments);

  useEffect(() => {
    if (!user?.email) return;
    axiosPublic
      .get(`/payments/${user.email}`)
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch payments:", error);
      });
  }, [axiosPublic, user?.email]);

  const apartmentDetails = payments?.[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Profile Image */}
        <div className="relative mb-8">
          <div className="h-48 bg-[#06b6d4] rounded-t-2xl"></div>
          <div className="absolute -bottom-16 left-8 p-2 bg-white rounded-full shadow-xl">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* User Info and Apartment Details Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info Card */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-6">
              <FaUserCircle className="w-6 h-6 text-[#06b6d4] mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">{user?.displayName}</h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <MdEmail className="w-5 h-5 text-[#06b6d4] mr-3" />
                <span className="text-gray-600">{user?.email}</span>
              </div>
              <div className="flex items-center">
                <MdCalendarToday className="w-5 h-5 text-[#06b6d4] mr-3" />
                <span className="text-gray-600">
                  Payment Date: {new Date(apartmentDetails?.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Apartment Info Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <MdApartment className="w-5 h-5 text-[#06b6d4] mr-2" />
              Apartment Details
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MdLocationOn className="w-4 h-4 text-[#06b6d4] mr-2" />
                  <span className="text-gray-600">Floor</span>
                </div>
                <span className="text-gray-500">{apartmentDetails?.floorNo}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MdHome className="w-4 h-4 text-[#06b6d4] mr-2" />
                  <span className="text-gray-600">Block</span>
                </div>
                <span className="text-gray-500">{apartmentDetails?.blockNo}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaHashtag className="w-4 h-4 text-[#06b6d4] mr-2" />
                  <span className="text-gray-600">Room No</span>
                </div>
                <span className="text-gray-500">{apartmentDetails?.apartmentNo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
