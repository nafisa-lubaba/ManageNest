import { useParams, useSearchParams } from "react-router-dom";
// import { Calendar, DollarSign } from "lucide-react";
import DashboardSharedTitle from "../../components/Shared/DashboardSharedTitle";
import { FaCalendar, FaDollarSign } from "react-icons/fa";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const PaymentPage = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    
    const rent = searchParams.get('rent');
    const month = searchParams.get('month');

    return (
        <div className="p-6">
            <DashboardSharedTitle heading="Payment Details" />
            
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                <div className="space-y-6">
                    {/* Month Display */}
                    <div className="flex items-center gap-3">
                        <FaCalendar className="w-6 h-6 text-cyan-500" />
                        <div>
                            <p className="text-gray-500">Selected Month</p>
                            <p className="text-xl font-semibold">{month}</p>
                        </div>
                    </div>

                    {/* Rent Amount */}
                    <div className="flex items-center gap-3">
                        <FaDollarSign className="w-6 h-6 text-cyan-500" />
                        <div>
                            <p className="text-gray-500">Rent Amount</p>
                            <p className="text-xl font-semibold">${rent}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Elements stripe={stripePromise}>
            <CheckoutForm id={id} rent ={rent} month ={month} />
              
            </Elements>
           
        </div>
    );
};

export default PaymentPage;