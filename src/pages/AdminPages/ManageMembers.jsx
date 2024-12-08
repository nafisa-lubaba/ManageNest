import { useEffect, useState } from "react";
// import { UserMinus } from 'lucide-react';
import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle";
import { FaUserMinus } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import useAxiosPublic from "../../hooks/UseAxiosPublic";

const ManageMembers = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();


  const [members, setMembers] = useState([]);

  console.log(members);

  useEffect(() => {
    axiosPublic
      .get(`/manageMembers`)
      .then((response) => {
        const availableRequests = response.data.filter(
          (request) => request.role === 'member'
        );
        setMembers(availableRequests);
      })
  }, [axiosPublic]);
  const handleRemoveMember = (member) => {
    const { email} = member;
    console.log(email);
    
    const updatedUserRole = { role: 'user' };
    axiosPublic
      .put(`/updateUserRole/${email}`, updatedUserRole)
      .then(() => {
        console.log('Request accepted and processed successfully.');
        setMembers(members.filter((member) => member.email !== email));
      })
      .catch((error) => {
        console.error('Error handling the accept request:', error);
      });
  };



  return (
    <div>
      <DashboardSharedTitle heading="Manage Members" />
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-[#06b6d4] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Username</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {members.map((member, index) => (
              <tr key={member._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{index + 1}</td>
                <td className="px-6 py-4 text-sm">{member.name}</td>
                <td className="px-6 py-4 text-sm">{member.email}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    // onClick={() => handleRemoveMember(member)}
                    onClick={() => handleRemoveMember(member)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors duration-200"
                  >
                    <FaUserMinus className="w-4 h-4" />
                    <span>Remove Member</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;