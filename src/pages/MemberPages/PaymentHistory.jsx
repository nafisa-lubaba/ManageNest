import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import useAxiosPublic from "../../hooks/UseAxiosPublic";

import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle"; // assuming this is imported correctly

const PaymentHistory = () => {
    const { user } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);
        axiosPublic
            .get(`/payments/${user.email}`)
            .then((response) => {
                setPayments(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch payments:", error);
                setLoading(false);
            });
    }, [axiosPublic, user?.email]);

    return (
        <div className="min-h-screen relative max-w-full overflow-x-hidden">
            <DashboardSharedTitle heading="Payment History" />
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-[#06b6d4] text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Apartment No</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Floor No</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Block</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Month</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Transaction ID</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Payment Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {payments.length > 0 ? (
                            payments.map((payment) => (
                                <tr key={payment._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm">{payment.name}</td>
                                    <td className="px-6 py-4 text-sm">{payment.email}</td>
                                    <td className="px-6 py-4 text-sm">{payment.apartmentNo}</td>
                                    <td className="px-6 py-4 text-sm">{payment.floorNo}</td>
                                    <td className="px-6 py-4 text-sm">{payment.blockNo}</td>
                                    <td className="px-6 py-4 text-sm">${payment.price}</td>
                                    <td className="px-6 py-4 text-sm">{payment.month}</td>
                                    <td className="px-6 py-4 text-sm">{payment.transactionId}</td>
                                    <td className="px-6 py-4 text-sm">{new Date(payment.date).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center py-4 text-sm">
                                    No payments available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;