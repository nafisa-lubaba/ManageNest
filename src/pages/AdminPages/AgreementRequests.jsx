import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAuth from "../../hooks/UseAuth";

const AgreementRequests = () => {
    const { user } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(requests);

    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);
        axiosPublic
            .get(`/bookingApartments/${user.email}`)
            .then((response) => {
                // Filter the requests with status === 'Available'
                const availableRequests = response.data.filter(
                    (request) => request.status === 'Available'
                );
                setRequests(availableRequests);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch requests:", error);
                setLoading(false);
            });
    }, [axiosPublic, user?.email]);

    const handleAccept = (request) => {
        // console.log(request);
        
        const { _id, userEmail,appartmentId } = request;
        console.log('ID:', _id, 'Email:', userEmail ,appartmentId);

        const updatedUserRole = { role: 'member' };
        const updatedStatus = { status: 'Accepted' };
        const updateAppartments = { status: 'Occupied' };

        // Making the API calls
        axiosPublic
            .put(`/updateUserRole/${userEmail}`, updatedUserRole)
            .then(() => {
                return axiosPublic.put(`/updateRequestStatus/${_id}`, updatedStatus);
            })
            .then(() => {
                return axiosPublic.put(`/updateAppartmentStatus/${appartmentId}`, updateAppartments);
            })
            .then(() => {
                console.log('Request accepted and processed successfully.');
                setRequests(requests.filter((request) => request._id !== _id));
            })
            .catch((error) => {
                console.error('Error handling the accept request:', error);
            });
    };



    const handleReject = (id) => {
        console.log(`Rejected request ${id}`);
        axiosPublic
        .delete(`/deleteRequest/${id}`) 
        .then((response) => {
            console.log('Request rejected and deleted successfully:', response.data);
            setRequests((prevRequests) => prevRequests.filter((request) => request._id !== id));
        })
        .catch((error) => {
            console.error('Error rejecting the request:', error);
        });
    };

    if (loading) {
        return (
            <div className="w-full text-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="relative max-w-full overflow-x-hidden">
            <DashboardSharedTitle heading="Agreement Requests" />
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-[#06b6d4] text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Floor No</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Block</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Room No</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Rent</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Request Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Accept</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Cancel</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm">{request.userName}</td>
                                    <td className="px-6 py-4 text-sm">{request.userEmail}</td>
                                    <td className="px-6 py-4 text-sm">{request.floorNo}</td>
                                    <td className="px-6 py-4 text-sm">{request.blockNo}</td>
                                    <td className="px-6 py-4 text-sm">{request.apartmentNo}</td>
                                    <td className="px-6 py-4 text-sm">{request.rentPerMonth}</td>
                                    <td className="px-6 py-4 text-sm">{request.requestDate}</td>
                                    <td className="px-6 py-4 text-sm space-x-2">
                                        <button
                                            onClick={() => handleAccept(request)}
                                            className="p-1 text-green-600 hover:text-green-800"
                                        >
                                            <FaCheckCircle className="w-5 h-5" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm space-x-2">
                                        <button
                                            onClick={() => handleReject(request._id)}
                                            className="p-1 text-red-600 hover:text-red-800"
                                        >
                                            <FiXCircle className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center py-4 text-sm">
                                    No requests available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequests;
