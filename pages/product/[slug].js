import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import commerce from '../../lib/commerce'
import { useRouter } from 'next/router'
import { Container, Grid, Box, Divider, Typography, IconButton, Button } from '@mui/material'
import Link from 'next/link'
import { Star } from '@mui/icons-material'
import { Remove, Add } from '@mui/icons-material'
import Styles from '../../styles/Singleproduct.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Image from 'next/legacy/image'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct, removeSelectedProduct } from '../../redux/action/productAction'
import {addToCart} from '../../redux/action/cartActions'

const SingleProduct = () => {
    const [quantity, SetQuantity] = useState(1)
    const router = useRouter()
    const { slug } = router.query;

    const product = useSelector((state) => state.setProductReducer.selectedSingleProduct)
    const dispatch = useDispatch()

    useEffect(() => {
        if (slug !== '' || slug !== null || slug !== undefined) {
            dispatch(fetchSingleProduct(slug))
        }
        return (() => {
            dispatch(removeSelectedProduct())
        })
    },[slug, dispatch])

    return (
        <>
            <Head>
                <title>{product ? product.seo ? product.seo.title ? product.seo.title : null : null : null}</title>
                <meta name="description" content={product ? product.seo ? product.seo.description ? product.seo.description : null : null : null} />
                <meta name="robots" content="index" />
                <link rel="canonical" href={`/product/${slug}/`} />
            </Head>
            <main>
                <Divider className='bg-dark-grey' />
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} lg={10} className="mx-auto">
                                <Box py={2}>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item"><Link href="/" legacyBehavior><a className='text-light-grey'>HOME</a></Link></li>

                                            <li className="breadcrumb-item"><Link legacyBehavior href={`/category/${product ? product.categories ? product.categories[0] ? product.categories[0].slug ? product.categories[0].slug : null : null : null : null}/`}><a className='text-light-grey text-uppercase'>{product ? product.categories ? product.categories[0] ? product.categories[0].name ? product.categories[0].name : null : null : null : null}</a></Link></li>

                                            <li className="breadcrumb-item active text-pestal-purple font-weight-bold text-uppercase" aria-current="page">{product ? product.name ? product.name : null : null}</li>
                                        </ol>
                                    </nav>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <Divider className='bg-dark-grey' />
                <section className='mt-md-4 mt-3'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} lg={10} className="mx-auto">
                                <Box py={3}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Swiper spaceBetween={50}
                                                    centeredSlides={true}
                                                    autoplay={{
                                                        delay: 2500,
                                                        disableOnInteraction: false,
                                                    }}
                                                    loop={true}
                                                    navigation={true}
                                                    modules={[Autoplay, Navigation]}
                                                    className="mySwiper px-md-5 px-0">
                                                    {
                                                        product ? product.assets ? product.assets.map(image => <SwiperSlide key={image.id}>
                                                            {image ? image.url ? <Image src={image.url} width="600" height="600" /> : null : null}
                                                        </SwiperSlide>) : "Loading..." : null
                                                    }
                                                </Swiper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Typography variant='h1' className={`${Styles.prodName} text-pestal-purple`} gutterBottom>{product ? product.name ? product.name : null : null}</Typography>
                                                <Box mb={2}>
                                                    <Star className='text-pestal-purple' /><Star className='text-pestal-purple' /><Star className='text-pestal-purple' /><Star className='text-pestal-purple' /><Star className='text-pestal-purple' />
                                                </Box>
                                                <Typography className={Styles.prodPrice}><del className='text-light-grey'>₹{product.price ? product.price.raw ? product.price.raw + 200 : "" : ""}</del> <span className='text-pestal-purple'>{product.price ? product.price.formatted_with_symbol ? product.price.formatted_with_symbol : "" : ""}</span></Typography>
                                                <Box mt={3} className="d-flex align-items-center">
                                                    <Box mr={3}>
                                                        <IconButton className='border rounded-circle mx-2' onClick={() => { if (quantity > 1) SetQuantity(quantity - 1) }}><Remove /></IconButton>
                                                        <strong>{quantity}</strong>
                                                        <IconButton className='border rounded-circle mx-2' onClick={() => SetQuantity(quantity + 1)}><Add /></IconButton>
                                                    </Box>
                                                    <Box>
                                                        <Button onClick={() => dispatch(addToCart(product.id, quantity))}>ADD TO CART</Button>
                                                    </Box>
                                                </Box>
                                                <Box className={Styles.description} mt={3} dangerouslySetInnerHTML={{ __html: product ? product.description ? product.description : "" : null }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default SingleProduct