import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Grid, Container, Box } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Checkout.module.css'
import { AddressForm, PaymentForm } from '../components/components'
import commerce from '../lib/commerce'
import { useCartState, useCartDispatch } from '../context/cart'
import { useRouter } from 'next/router'

const checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("")
    const { setCart } = useCartDispatch()
    const steps = ['Shiping Address', 'Payment Details']
    const router = useRouter()

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const cart = useCartState();

    useEffect(() => {
        const generateToken = async () => {
            if (cart.id != undefined && cart.id) {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    setCheckoutToken(token)
                } catch (error) {
                    setErrorMessage(error.data.error.message)
                }
            }
        }

        generateToken()
    }, [cart])

    const handleRefreshCart = async () => {
        const newCart = await commerce.cart.refresh()

        setCart(newCart)
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder)
            handleRefreshCart()
        } catch (error) {
            console.log(error);
        }
    }

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Confirmation = () => {
        return (<>
            {
                order.customer ? <>
                    <Box p={2} className="d-flex flex-column align-items-center">
                        <Typography variant="h5">Thank You For Your Purchase {order.customer.firstname} {order.customer.lastname}</Typography>
                        <Divider />
                        <Box mt={3}>
                            <Button><Link href="/">BACK TO HOME</Link></Button>
                        </Box>
                    </Box>
                </> : <>
                    <Box mt={2} className="d-flex justify-content-center">
                        <CircularProgress />
                    </Box>
                </>
            }
        </>)
    }



    if (errorMessage) {
        router.push('/')
    }

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken !== null || checkoutToken !== undefined ? checkoutToken : null} next={next} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken !== null || checkoutToken !== undefined ? checkoutToken : null} backStep={backStep} handleCaptureCheckout={handleCaptureCheckout} error={errorMessage} nextStep={nextStep} />

    return (
        <>
            <Head>
                <title>Checkout - esmalife.com</title>
            </Head>
            <main>
                <section>
                    <Divider className='bg-dark-grey' />
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} lg={10} className="mx-auto">
                                <Box py={2}>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item"><Link href="/" legacyBehavior><a className='text-light-grey'>Home</a></Link></li>
                                            <li className="breadcrumb-item active text-pestal-purple font-weight-bold text-uppercase" aria-current="page">Checkout</li>
                                        </ol>
                                    </nav>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Divider className='bg-dark-grey' />
                </section>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} lg={10} className="mx-auto">
                                <Box py={5}>
                                    <Typography variant='h1' align='center' className='text-pestal-purple'>Checkout</Typography>
                                    <Box mt={3}>
                                        <Grid container>
                                            <Grid item xs={12} sm={6} className="mx-auto">
                                                <Box p={2} component={Paper}>
                                                    <Stepper activeStep={activeStep} className={Styles.stepper} >
                                                        {
                                                            steps.map((step) => (<Step key={step}>
                                                                <StepLabel>{step}</StepLabel>
                                                            </Step>))
                                                        }
                                                    </Stepper>
                                                    {
                                                        activeStep == steps.length ? <Confirmation /> : checkoutToken && <Form />
                                                    }
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default checkout