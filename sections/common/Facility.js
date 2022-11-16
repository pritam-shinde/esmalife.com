import { Container, Grid, Box, Typography } from '@mui/material'
import React from 'react'
import OriginalProduct from '../../public/Facility/original-product.png'
import ReturnWarrenty from '../../public/Facility/return.png'
import PaymentSecure from '../../public/Facility/secure-payment.png'
import Image from 'next/image'

const Facility = () => {
    return (
        <>
            <section className='bg-light-pestal-purple mt-md-4 mt-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} lg={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6} lg={4}>
                                        <Box className='d-flex'>
                                            <Box className='flex-shrink-0 align-items-center'>
                                                <Image src={OriginalProduct} alt="original product" layout='responsive' />
                                            </Box>
                                            <Box className='flex-grow-1 ms-3'>
                                                <Typography variant='h5' className='mb-3 text-dark-grey'>Original Product</Typography>
                                                <Typography className='para text-dark-grey'>100% Original product that covered warranty by the vendor.</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4}>
                                        <Box className='d-flex'>
                                            <Box className='flex-shrink-0 align-items-center'>
                                            <Image src={ReturnWarrenty} alt="Return Warrenty" layout='responsive' />
                                            </Box>
                                            <Box className='flex-grow-1 ms-3'>
                                                <Typography variant='h5' className='mb-3 text-dark-grey'>15 Days Return Warranty</Typography>
                                                <Typography className='para text-dark-grey'>You have the right to return your orders within 30 days.</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4}>
                                        <Box className='d-flex'>
                                            <Box className='flex-shrink-0 align-items-center'>
                                            <Image src={PaymentSecure} alt="payment security" layout='responsive' />
                                            </Box>
                                            <Box className='flex-grow-1 ms-3'>
                                                <Typography variant='h5' className='mb-3 text-dark-grey'>100% Secure Payment</Typography>
                                                <Typography className='para text-dark-grey'>Your payments are secure with our private security network.</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Facility