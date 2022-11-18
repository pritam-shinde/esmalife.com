import React, { useState, useEffect } from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import Styles from '../../styles/Home.module.css'
import { ProductCard } from '../../components/components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";


const NewProduct = ({ products, addToCart }) => {
    const [width, setWidth] = useState();
    const [hydration, setHydration] = useState(false)
    const [slideCount, setSlideCount] = useState(1)
    

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })

    useEffect(() => {
        if (typeof window !== undefined) {
            setHydration(true)
        } else {
            setHydration(false)
        }
    }, [])

    useEffect(() => {
        if (width < 600) {
            setSlideCount(1)
        } else if (width > 601 && width < 1024) {
            setSlideCount(2)
        } else if (width > 1025) {
            setSlideCount(3)
        }
    }, [width])

    


    return (
        <>{
            hydration ? <>
                <section className={`mt-md-4 mt-3 ${Styles.NewProductBg}`}>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} lg={10} className="mx-auto">
                                <Box py={5}>
                                    <Box py={2}>
                                        <Typography variant='h2' className='text-light-grey' align='center'>NEW PRODUCTS FOR YOU</Typography>
                                    </Box>
                                    <Box mt={3}>
                                        <Swiper
                                            centeredSlides={true}
                                            slidesPerView={slideCount}
                                            spaceBetween={50}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: true,
                                            }}
                                            loop={true}
                                            navigation={true}
                                            modules={[Autoplay, Navigation]}
                                            className="px-lg-5 px-0"
                                        >
                                            {
                                                products ? products.map(product => <SwiperSlide key={product.id}>
                                                    <ProductCard image={product.image.url} permalink={`product/${product.permalink}`} name={product.name} raw={product.price.raw} price={product.price.formatted_with_symbol} addToCart={addToCart} productId={product.id} />
                                                </SwiperSlide>) : "Loading..."
                                            }
                                        </Swiper>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section></> : "Loading"}
        </>
    )
}

export default NewProduct