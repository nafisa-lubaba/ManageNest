import { useEffect, useState } from 'react';
import { FaCreditCard, FaTag } from 'react-icons/fa';
import UseAuth from '../../hooks/UseAuth';
import useAxiosPublic from '../../hooks/UseAxiosPublic';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const PaymentForm = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountedRent, setDiscountedRent] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axiosPublic
      .get(`/acceptedApartments/${user.email}`)
      .then((response) => {
        const acceptedApartments = response.data.filter(
          (request) => request.status === 'Accepted'
        );
        setPayments(acceptedApartments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch requests:", error);
        setLoading(false);
      });
  }, [axiosPublic, user?.email]);

  const handleCouponApply = async () => {
    setCouponError('');
    setCouponSuccess('');
    setDiscountedRent(null);

    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    try {
      const response = await axiosPublic.get(`/coupons/${couponCode}`);
      const { isValid, discountPercentage } = response.data;

      if (isValid && payments[0]) {
        const originalRent = payments[0].rentPerMonth;
        const discount = (originalRent * discountPercentage) / 100;
        const newRent = originalRent - discount;
        setDiscountedRent(newRent);
        setCouponSuccess(`Coupon applied! ${discountPercentage}% discount`);
      } else {
        setCouponError('Invalid coupon code');
      }
    } catch (error) {
      setCouponError('Error validating coupon');
    }
  };

  // const handlePayment = () => {
  //   if (!selectedMonth) {
  //     alert('Please select a month');
  //     return;
  //   }
   
  //   const finalAmount = discountedRent || payments[0]?.rentPerMonth;
  //   console.log('Proceeding to payment with amount:', finalAmount);
  // };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!payments.length) {
    return <div className="min-h-screen flex items-center justify-center">No accepted apartments found.</div>;
  }

  const payment = payments[0]; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06b6d4]/10 to-[#06b6d4]/5 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-[#06b6d4] px-8 py-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <FaCreditCard className="w-8 h-8" />
              Payment Form
            </h2>
          </div>

          <div className="p-8">
            <form className="space-y-6">
              {/* Member Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Member Email</label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#06b6d4] focus:border-[#06b6d4]"
                  />
                </div>

                {/* Apartment Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Floor</label>
                    <input
                      type="text"
                      value={payment.floorNo}
                      readOnly
                      className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Block Name</label>
                    <input
                      type="text"
                      value={payment.blockNo}
                      readOnly
                      className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Apartment No</label>
                    <input
                      type="text"
                      value={payment.apartmentNo}
                      readOnly
                      className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                {/* Rent and Month Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Monthly Rent</label>
                    <input
                      type="text"
                      value={`$${discountedRent || payment.rentPerMonth}`}
                      readOnly
                      className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Select Month</label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#06b6d4] focus:border-[#06b6d4]"
                    >
                      <option value="">Select a month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Coupon Section */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-gray-700">Coupon Code</label>
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#06b6d4] focus:border-[#06b6d4]"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={handleCouponApply}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] flex items-center gap-2"
                      >
                        <FaTag />
                        Apply
                      </button>
                    </div>
                  </div>
                  {couponError && <p className="text-red-500 text-sm">{couponError}</p>}
                  {couponSuccess && <p className="text-green-500 text-sm">{couponSuccess}</p>}
                </div>

                {/* Submit Button */}
               
                   <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;