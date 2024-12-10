import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/UseAxiosPublic';
import UseAuth from '../../hooks/UseAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckoutForm = ({ id, month, rent, apartmentNo, blockNo, floorNo }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth();
    const navigate = useNavigate();
    const axiosInstance = useAxiosPublic();
    // console.log(user);



    useEffect(() => {
        if (rent > 0) {
            axiosInstance
                .post('/create-payment-intent', { price: rent })
                .then((res) => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
                .catch((err) => console.error('Error creating payment intent:', err));
        }
    }, [axiosInstance, rent]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);

        if (!card) return;

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            console.error('Payment error:', paymentError);
            setError(paymentError.message);
            return;
        } else {
            setError('');
            console.log('Payment method:', paymentMethod);
        }

        // Confirm the payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.error('Confirm error:', confirmError);
            setError(confirmError.message);
            return;
        }

        console.log('Payment intent:', paymentIntent);
        if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            // Save payment details to the database
            const payment = {
                email: user?.email,
                name: user?.displayName,
                price: rent, 
                transactionId: paymentIntent.id,
                date: new Date(),
                month: month,
                appartmentId: id,
                apartmentNo: apartmentNo,
                floorNo: floorNo,
                blockNo: blockNo,
            };
            console.log(payment);


            try {
                // Save the payment
                const res = await axiosInstance.post('/paymetpovided', payment);
                console.log('Payment saved:', res.data);
                
            
                // Delete the payment
                const deleteRes = await axiosInstance.delete(`/deleteRequest/${id}`);
                console.log('Payment deleted:', deleteRes.data);
                toast.success("Payment Saved Successfully");
                navigate('/dashboard/paymentHistory')

            
            } catch (error) {
                console.error('Error saving or deleting payment:', error);
                toast.error("An error occurred. Please try again.");
            }
            
            
        }


    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Element */}
            <div className="p-4 bg-white rounded-lg shadow-sm border">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button
                    className="w-full py-3 px-6 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 transition-colors duration-300 disabled:bg-gray-400"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 text-center">{error}</p>}

            {/* Transaction ID */}
            {transactionId && (
                <p className="text-green-600 text-center">
                    Your transaction ID: {transactionId}
                </p>
            )}
        </form>

    );
};

export default CheckoutForm;