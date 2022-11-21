import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Grid, Container, Box } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Checkout.module.css'
import { AddressForm, PaymentForm } from '../components/components'
import commerce from '../lib/commerce'
import { useCartState } from '../context/cart'

const checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const steps = ['Shiping Address', 'Payment Details']

    const cart = useCartState();

    useEffect(() => {
        const generateToken = async () => {
            if(cart){
                try {
                    const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
                    console.log(token)
                    setCheckoutToken(token)
                } catch (error) {
                    console.log(error)
                }
            }
        }

        generateToken()
    }, [cart])

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} /> : <PaymentForm />

    const Confirmation = () => {
        return (<>
            Confirmation
        </>)
    }

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