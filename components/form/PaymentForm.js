import React from 'react'
import { Typography, Button, Divider, Box } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Review } from '../components'
import { useSelector, useDispatch } from 'react-redux';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)


const PaymentForm = ({ backStep, handleCaptureCheckout, nextStep }) => {
  const {addressFormData:shippingData, checkoutToken } = useSelector(state=> state.setCheckoutReducer)

  const shppingMethod = checkoutToken.shipping_methods.filter(entries=>entries.id === shippingData.shippingOption
    )

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })

    if (error) {
      console.log(error)
    } else {
      const { line_items } = checkoutToken;
      const { firstname, lastname, email, phone, address1, city, shippingSubdivision, zip, shippingOption, shippingCountry
      } = shippingData
      const orderData = {
        line_items,
        customer: { firstname, lastname, email, phone },
        shipping: { name: 'primary', street: address1, town_city: city, county_state: shippingSubdivision, postal_zip_code: zip, country: shippingCountry },
        billing: { name: `${firstname} ${lastname}`, street: address1, town_city: city, county_state: shippingSubdivision, postal_zip_code: zip, country: shippingCountry },
        fulfillment: { shipping_method: shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id
          }
        }
      }
      handleCaptureCheckout(checkoutToken.id, orderData)
      nextStep()
    }
  }

  return (
    <>
      <Review checkoutToken={checkoutToken} shippingData={shippingData} />
      <Divider />
      <Box p={2}>
        <Typography variant='h5' gutterBottom style={{ margin: "1.2rem 0" }}>Payment Methods</Typography>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {
              ({ elements, stripe }) => (
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                  <CardElement />
                  <br /><br /><br />
                  <Box className='d-flex justify-content-between'>
                    <Button variant='outlined' onClick={() => backStep()}>BACK</Button>
                    <Button type="submit" variant='contained' disabled={!stripe}>PAY ₹ {checkoutToken.subtotal.raw + shppingMethod[0].price.raw}</Button>
                  </Box>
                </form>
              )
            }
          </ElementsConsumer>
        </Elements>
      </Box>
    </>
  )
}

export default PaymentForm