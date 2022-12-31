import React, { useEffect, useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Grid, Container, Box } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Checkout.module.css'
import { AddressForm, PaymentForm } from '../components/components'
import commerce from '../lib/commerce'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { handleCartRefresh } from '../redux/action/cartActions'
import { setAddressFormData, captureCheckout } from '../redux/action/checkoutActions'

const checkout = () => {
    const dispatch = useDispatch()
    const order = useSelector((state) => state.setCheckoutReducer.incomingOrder)
    const [activeStep, setActiveStep] = useState(0)
    const steps = ['Shiping Address', 'Payment Details']
    const router = useRouter()

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const handleRefreshCart = async () => {
        dispatch(handleCartRefresh())
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        dispatch(captureCheckout(checkoutTokenId, newOrder))
        setTimeout(() => {
            handleRefreshCart()
        }, 5000)
    }

    const next = (data) => {
        dispatch(setAddressFormData(data))
        nextStep()
    }

    const Confirmation = () => {
        return (<>
            {
                order && order.customer ? <>
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

    const Form = () => activeStep === 0 ? <AddressForm next={next} /> : <PaymentForm backStep={backStep} handleCaptureCheckout={handleCaptureCheckout} nextStep={nextStep} />

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
                                                        activeStep == steps.length ? <Confirmation /> : <Form />
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