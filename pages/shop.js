import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import commerce from '../lib/commerce';
import { ProductCard, PurpleFilledBtn } from '../components/components'
import { Apps, ViewList } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const getServerSideProps = async () => {
    let { data: products } = await commerce.products.list();

    if (products == undefined) {
        products = null
    }

    return {
        props: {
            products,
        }
    }
}

const shop = ({ products }) => {
    const [productView, setProductView] = useState('grid')

    return (
        <>
            <Head>
                <title>Shop - esmalife.com</title>
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
                                            <li className="breadcrumb-item active text-pestal-purple font-weight-bold text-uppercase" aria-current="page">Shop</li>
                                        </ol>
                                    </nav>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Divider className='bg-dark-grey' />
                </section>
                <section className='mt-md-4 mt-3'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={11} lg={10} className="mx-auto">
                                <Box py={3}>
                                    <Typography variant='h1' align='center' className='text-pestal-purple'>SHOP</Typography>
                                    <Box mt={3} p={2} className="border rounded-3 d-flex justify-content-between align-items-center">
                                        <Typography variant='h6'><span className='text-pestal-purple'>SEARCH RESULTS</span> | <span className='text-light-grey'>{products !== null ? products.length : 0} Products</span></Typography>
                                        <Box className='d-none d-lg-block'>
                                            <IconButton className='ms-2' onClick={() => setProductView('grid')}>
                                                <Apps />
                                            </IconButton>
                                            <IconButton onClick={() => setProductView('list')}>
                                                <ViewList />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box mt={3}>
                                        {
                                            productView === 'grid' ? <Grid container spacing={5}>
                                                {
                                                    products !== null ? products.map(product => <Grid key={product.id} item xs={12} sm={6} lg={4}>
                                                        <ProductCard image={product.image.url} permalink={`product/${product.permalink}`} name={product.name} raw={product.price.raw} price={product.price.formatted_with_symbol} />
                                                    </Grid>) : <Box mt={3} p={2}>
                                                        <h6 className='text-light-grey text-center'>No Product Available...!</h6>
                                                    </Box>
                                                }
                                            </Grid> : productView === 'list' ? <Grid container spacing={3}>
                                                {
                                                    products !== null ? products.map(product => <Grid xs={12} key={product.id} className="my-3">
                                                        <Box p={3} className='border rounded'>
                                                            <Grid container spacing={3} alignItems="center">
                                                                <Grid item xs={12} md={3}>
                                                                    <Image src={product.image.url} width="200" height="200" />
                                                                </Grid>
                                                                <Grid item xs={12} md={9}>
                                                                    <Typography variant='h3' gutterBottom><Link href={`product/${product.permalink}`} legacyBehavior><a className='text-pestal-purple'>{product.name}</a></Link></Typography>
                                                                    <Typography variant='h4'><del className='text-light-grey'>₹ {product.price.raw + 200}</del> <span className='text-pestal-purple'>{product.price.formatted_with_symbol}</span></Typography>
                                                                    <Box mt={3}>
                                                                        <PurpleFilledBtn navlink={true} btnlink="/cart/" btntitle="ADD TO CART" />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>) : <Box mt={3} p={2}>
                                                        <h6 className='text-light-grey text-center'>No Product Available...!</h6>
                                                    </Box>
                                                }
                                            </Grid> : null
                                        }
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

export default shop