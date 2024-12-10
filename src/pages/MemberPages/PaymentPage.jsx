import { useLoaderData } from "react-router-dom";
import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle";
import { FaCalendar, FaDollarSign, FaBuilding, FaThLarge, FaAlignLeft } from "react-icons/fa";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PaymentPage = () => {
    const { id, rent, month, apartmentNo, blockNo, floorNo } = useLoaderData();

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

    return (
        <div className="p-6">
            <DashboardSharedTitle heading="Payment Details" />

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto space-y-8">
                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Selected Month */}
                    <div className="flex items-center gap-4 border-b pb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full">
                            <FaCalendar className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500">Selected Month</p>
                            <p className="text-xl font-semibold">{month}</p>
                        </div>
                    </div>

                    {/* Rent Amount */}
                    <div className="flex items-center gap-4 border-b pb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full">
                            <FaDollarSign className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500">Rent Amount</p>
                            <p className="text-xl font-semibold">${rent}</p>
                        </div>
                    </div>

                    {/* Apartment Number */}
                    <div className="flex items-center gap-4 border-b pb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full">
                            <FaBuilding className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500">Apartment Number</p>
                            <p className="text-xl font-semibold">{apartmentNo}</p>
                        </div>
                    </div>

                    {/* Block Number */}
                    <div className="flex items-center gap-4 border-b pb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full">
                            <FaThLarge className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500">Block Number</p>
                            <p className="text-xl font-semibold">{blockNo}</p>
                        </div>
                    </div>

                    {/* Floor Number */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full">
                            <FaAlignLeft className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500">Floor Number</p>
                            <p className="text-xl font-semibold">{floorNo}</p>
                        </div>
                    </div>
                </div>

                {/* Stripe Checkout Form */}
                <div className="mt-8">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            id={id}
                            rent={rent}
                            month={month}
                            apartmentNo={apartmentNo}
                            blockNo={blockNo}
                            floorNo={floorNo}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
