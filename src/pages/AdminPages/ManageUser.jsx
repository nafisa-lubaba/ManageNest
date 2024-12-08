import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axiosPublic.get("/users");
        setUsers(response.data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching users.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [axiosPublic]);

  return (
    <div>
      <DashboardSharedTitle heading="All Users" />
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">Loading...</div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center mt-4">{error}</div>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-[#06b6d4] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Membership Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={user._id || index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{user.name}</td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 text-sm rounded-full 
                      ${user.membershipStatus === 'Premium' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'}`}>
                      {user.membershipStatus || "N/A"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUser;