import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import commerce from '../../lib/commerce'
import Link from 'next/link';
import Image from 'next/image';
import { Divider, Container, Grid, Box, Typography, IconButton, Button } from '@mui/material'
import { Apps, ViewList } from '@mui/icons-material';
import { ProductCard} from '../../components/components';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCategory, removeSelectedCategory, fetchProductsByCategory, removeProductsByCategory } from '../../redux/action/productAction'
import {addToCart} from '../../redux/action/cartActions'
import { useRouter } from 'next/router';

const SingleCategory = () => {
    const [productView, setProductView] = useState('grid')
    const router = useRouter()
    const { slug } = router.query;
    const category = useSelector((state) => state.setProductReducer.selectedSingleCategory);
    const products = useSelector(state => state.setProductReducer.selectedProductsByCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        if (slug !== '' || slug !== null || slug !== undefined) {
            dispatch(fetchSingleCategory(slug))
        }

        return (() => {
            dispatch(removeSelectedCategory())
        })
    }, [slug, dispatch])

    useEffect(() => {
        if (category && slug) {
            dispatch(fetchProductsByCategory(slug))
        }

        return (() => {
            dispatch(removeProductsByCategory())
        })
    }, [slug, dispatch])

    const handleAddToCart = (productId, quantity) =>{
        dispatch(addToCart(productId, quantity))
    }

    return (
        <>
            <Head>
                <title>{category ? category.name ? category.name : "" : null} - esmalife.com</title>
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
                                            <li className="breadcrumb-item active text-pestal-purple font-weight-bold text-uppercase" aria-current="page">{category ? category.name ? category.name : "" : null}</li>
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
                                <Box py={3}>
                                    <Typography variant='h1' align='center' className='text-pestal-purple text-capitalize'>{category ? category.name ? category.name : "" : null}</Typography>
                                    <Box mt={3} p={2} className="border rounded-3 d-flex justify-content-between align-items-center">
                                        <Typography variant='h6'><span className='text-pestal-purple'>SEARCH RESULTS FOR <span className='text-uppercase'>{category ? category.name ? category.name : "" : null}</span></span> | <span className='text-light-grey'>{products !== null ? products.length : 0} Products</span></Typography>
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
                                                        <ProductCard image={product.image.url} permalink={`product/${product.permalink}`} name={product.name} raw={product.price.raw} price={product.price.formatted_with_symbol} addToCart={handleAddToCart} productId={product.id} />
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
                                                                        <Button onClick={() => dispatch(addToCart(product.id, 1))}>ADD TO CART</Button>
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

export default SingleCategory