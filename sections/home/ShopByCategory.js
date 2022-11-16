import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Category1 from '../../public/home/cat1.webp'
import Category2 from '../../public/home/cat2.webp'
import Category3 from '../../public/home/cat3.webp'
import Category4 from '../../public/home/cat4.webp'

const ShopByCategory = () => {
    return (
        <>
            <section className='mt-md-4 mt-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} lg={10} className="mx-auto">
                            <Box py={5}>
                                <Box py={2}>
                                    <Typography variant='h2' className='text-light-grey' align='center'>SHOP BY CATEGORY</Typography>
                                </Box>
                                <Box mt={3}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={6}>
                                            <Box style={{position:"relative"}}>
                                                <Box>
                                                    <Image src={Category1} alt="Gems and Jewellery" layout='responsive' />
                                                </Box>
                                                <Box p={2} className="bg-opac-pestal-purple categoryName">
                                                    <Typography variant='h5'><Link href="/" legacyBehavior><a className='text-white'>GEM AND JEWELRY</a></Link></Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12}>
                                                        <Box style={{position:"relative"}}>
                                                            <Box>
                                                                <Image src={Category2} alt="Gems and Jewellery" layout='responsive' />
                                                            </Box>
                                                            <Box p={2} className="bg-opac-pestal-purple categoryName">
                                                                <Typography variant='h5'><Link href="/" legacyBehavior><a className='text-white'>HEALING JEWELRY</a></Link></Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Box style={{position:"relative"}}>
                                                            <Box>
                                                                <Image src={Category3} alt="Gems and Jewellery" layout='responsive' />
                                                            </Box>
                                                            <Box p={2} className="bg-opac-pestal-purple categoryName">
                                                                <Typography variant='h5'><Link href="/" legacyBehavior><a className='text-white'>HEALING WANDS</a></Link></Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Box style={{position:"relative"}}>
                                                            <Box>
                                                                <Image src={Category4} alt="Gems and Jewellery" layout='responsive' />
                                                            </Box>
                                                            <Box p={2} className="bg-opac-pestal-purple categoryName">
                                                                <Typography variant='h5'><Link href="/" legacyBehavior><a className='text-white'>HEALING KITS</a></Link></Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default ShopByCategory