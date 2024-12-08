import { FaBuilding, FaHome, FaMailBulk, FaUserSecret } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle";

const AdminProfile = () => {
  const { user } = UseAuth();
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/apartments`);
        const filteredApartments = data.filter(apartment => apartment.ownerEmail === user?.email);
        setApartments(filteredApartments);
      } catch (error) {
        console.error('Error fetching apartments:', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [user?.email]);

  // Calculate statistics
  const totalApartments = apartments.length;
  const availableApartments = apartments.filter(apt => apt.availabilityStatus === "Available").length;
  const unavailableApartments = apartments.filter(apt => apt.availabilityStatus === "unAvailable").length;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-white">
      <DashboardSharedTitle heading="My Profile" />
      {/* Admin Profile Header */}
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center md:flex-row gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <img
            src={user?.photoURL}
            alt="Admin profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-4 ring-[#06b6d4]/20 rounded-full" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">{user?.displayName}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <FaMailBulk className="w-4 h-4" />
            <span>{user?.email}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Apartments */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-[#06b6d4]/20">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Total Apartments</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? "Loading..." : totalApartments}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-full flex items-center justify-center">
              <FaHome className="w-6 h-6 text-[#06b6d4]" />
            </div>
          </div>
        </div>

        {/* Available Apartments */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-[#06b6d4]/20">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Available Apartments</p>
              <p className="text-2xl font-bold text-[#06b6d4]">
                {loading ? "Loading..." : 
                  totalApartments > 0 
                    ? `${((availableApartments / totalApartments) * 100).toFixed(1)}%`
                    : "0%"
                }
              </p>
            </div>
            <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-full flex items-center justify-center">
              <FaBuilding className="w-6 h-6 text-[#06b6d4]" />
            </div>
          </div>
        </div>

        {/* Unavailable Apartments */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-[#06b6d4]/20">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Unavailable Apartments</p>
              <p className="text-2xl font-bold text-[#06b6d4]">
                {loading ? "Loading..." : 
                  totalApartments > 0 
                    ? `${((unavailableApartments / totalApartments) * 100).toFixed(1)}%`
                    : "0%"
                }
              </p>
            </div>
            <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-full flex items-center justify-center">
              <FaBuilding className="w-6 h-6 text-[#06b6d4]" />
            </div>
          </div>
        </div>

        {/* Total Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-[#06b6d4]/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Available Units</p>
                <p className="text-2xl font-bold text-gray-900">
                  {loading ? "Loading..." : availableApartments}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-full flex items-center justify-center">
                <FaUserSecret className="w-6 h-6 text-[#06b6d4]" />
              </div>
            </div>
            <div className="pt-4 border-t border-[#06b6d4]/20">
              <p className="text-sm font-medium text-gray-500">Unavailable Units</p>
              <p className="text-xl font-bold text-gray-900">
                {loading ? "Loading..." : unavailableApartments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;