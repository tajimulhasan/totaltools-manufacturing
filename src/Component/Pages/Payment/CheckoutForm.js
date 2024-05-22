import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState( '');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState( '');
    const [clienTSecret, setClientSecret]= useState('');
    const { _id, totalPrice, email, clientName} = order;

useEffect(() =>{
  fetch('http://localhost:5000/create-payment-intent', {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify({totalPrice})
  })
  .then(res => res.json())
  .then(data => {
    if(data?.clientSecret){
        setClientSecret(data.clientSecret);
    }
    else{

    }
  })
}, [totalPrice])

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          });

            setCardError(error?.message || '');
             setSuccess('');
            setProcessing(true);
            const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
                clienTSecret,
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: clientName,
                      email: email,
                    },
                  },
                },
              );
     
              if(intentError){
                setCardError(intentError?.message);
                setProcessing(false)
              }
              else{
                setCardError('');
                setTransactionId(paymentIntent.id);
                setSuccess('Congrats! Your payment is completed');

            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            }


                fetch(`http://localhost:5000/orders/${_id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(payment)
                })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log( );
                })
              }
    }
    return (
       <>
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
        <button type="submit" className="form-control w-full max-w-xs mx-auto mt-9 btn hover:text-white bg-primary hover:bg-green-500" disabled={!stripe || !clienTSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        success && <div  className='mt-6'>
        <p className='text-green-500'>{success}</p>
        <p className='text-xs'><span className='font-bold'>Your transaction Id: </span><span>{transactionId}</span></p>
        </div>
      }
       </>
    );
};

export default CheckoutForm;