// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { useEffect, useState } from 'react';
// import useAxiosPublic from '../../hooks/UseAxiosPublic';
// import UseAuth from '../../hooks/UseAuth';




// const CheckoutForm = ({id, month, rent} ) => {
//     const [error, setError] = useState('');
//     const [clientSecret, setClientSecret] = useState('')
//     const stripe = useStripe();
//     const elements = useElements();
//     const { user} = UseAuth();
//     const axiosInstance = useAxiosPublic();


//     useEffect(() => {
//         if (rent > 0) {
//             axiosInstance.post('/create-payment-intent', { price: rent })
//                 .then(res => {
//                     console.log(res.data.clientSecret);
//                     setClientSecret(res.data.clientSecret);
//                 })
//         }

//     }, [axiosInstance, rent])
//     const handleSubmit = async (event) =>{
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return
//         }
//         const card = elements.getElement(CardElement)

//         if (card === null) {
//             return
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             console.log('payment error', error);
//             setError(error.message);
//         }
//         else {
//             console.log('payment method', paymentMethod)
//             setError('');
//         }
//          // confirm payment
//          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email || 'anonymous',
//                     name: user?.displayName || 'anonymous'
//                 }
//             }
//         })
//         if (confirmError) {
//             console.log('confirm error')
//         }
//         else {
//             console.log('payment intent', paymentIntent)
//             if (paymentIntent.status === 'succeeded') {
//                 console.log('transaction id', paymentIntent.id);
//                 setTransactionId(paymentIntent.id);

//                 // now save the payment in the database
//                 const payment = {
//                     email: user.email,
//                     price: totalPrice,
//                     transactionId: paymentIntent.id,
//                     date: new Date(), // utc date convert. use moment js to 
//                     cartIds: rent.map(item => item._id),
//                     menuItemIds: rent.map(item => item.menuId),
//                     status: 'pending'
//                 }
//                 const res = await axiosSecure.post('/payments', payment);
//                 console.log('payment saved', res.data);
//                 refetch();
//                 if (res.data?.paymentResult?.insertedId) {
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "Thank you for the taka paisa",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                     navigate('/dashboard/paymentHistory')
//                 }
//         }


//     }
//     return (
//         <form onSubmit={handleSubmit}>
//         <CardElement
//             options={{
//                 style: {
//                     base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                             color: '#aab7c4',
//                         },
//                     },
//                     invalid: {
//                         color: '#9e2146',
//                     },
//                 },
//             }}
//         />
//         <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe  || !clientSecret}>
//             Pay
//         </button>
//         <p className="text-red-600">{error}</p>
//         {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
//     </form>
//     );
// };

// export default CheckoutForm;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/UseAxiosPublic';
import UseAuth from '../../hooks/UseAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ id, month, rent, cart = [] }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth();
    const navigate = useNavigate();
    const axiosInstance = useAxiosPublic();

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
                price: rent, // Use rent as totalPrice
                transactionId: paymentIntent.id,
                date: new Date(),
                cartIds: cart.map((item) => item._id),
                menuItemIds: cart.map((item) => item.menuId),
                status: 'pending',
            };

            try {
                const res = await axiosInstance.post('/payments', payment);
                console.log('Payment saved:', res.data);
                alert('Payment Successful!');
            } catch (saveError) {
                console.error('Error saving payment:', saveError);
            }
            navigate('/dashboard/paymentHistory')
        }
        
                  
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button
                className="btn btn-sm btn-primary my-4"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
            {error && <p className="text-red-600">{error}</p>}
            {transactionId && (
                <p className="text-green-600">Your transaction ID: {transactionId}</p>
            )}
        </form>
    );
};

export default CheckoutForm;
