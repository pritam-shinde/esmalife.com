import React, {useState, useEffect} from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import product1 from '../../public/home/p1.webp'
import product2 from '../../public/home/p2.webp'
import Image from 'next/legacy/image'
import Styles from '../../styles/Home.module.css'
import { PurpleFilledBtn } from '../../components/components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const NewProduct = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })
    return (
        <>
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
                                        slidesPerView={width < 600 ? 1 :3}
                                        spaceBetween={50}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        navigation={true}
                                        modules={[Autoplay, Navigation]}
                                        className="px-md-5"
                                    >
                                        <SwiperSlide>
                                            <Box>
                                                <Box>
                                                    <Image src={product1} alt="product1" layout='responsive' />
                                                </Box>
                                                <Box mt={2} p={2}>
                                                    <Typography variant='h3' align='center' className='text-light-grey'>HERBAL INTENTION CANDLES</Typography>
                                                    <Typography align='center' className={Styles.price}><del className='text-light-grey'>₹ 280</del> <span className='text-pestal-purple'>₹ 250</span></Typography>
                                                    <Box mt={3}>
                                                        <PurpleFilledBtn navlink={true} btnlink="/cart/" btntitle="ADD TO CART" fullWidth={true} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box>
                                                <Box>
                                                    <Image src={product2} alt="product2" layout='responsive' />
                                                </Box>
                                                <Box mt={2} p={2}>
                                                    <Typography variant='h3' align='center' className='text-light-grey'>MEDITATION ALTAR TABLE SET</Typography>
                                                    <Typography align='center' className={Styles.price}><del className='text-light-grey'>₹ 7500</del> <span className='text-pestal-purple'>₹ 6700</span></Typography>
                                                    <Box mt={3}>
                                                        <PurpleFilledBtn navlink={true} btnlink="/cart/" btntitle="ADD TO CART" fullWidth={true} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box>
                                                <Box>
                                                    <Image src={product1} alt="product1" layout='responsive' />
                                                </Box>
                                                <Box mt={2} p={2}>
                                                    <Typography variant='h3' align='center' className='text-light-grey'>HERBAL INTENTION CANDLES</Typography>
                                                    <Typography align='center' className={Styles.price}><del className='text-light-grey'>₹ 280</del> <span className='text-pestal-purple'>₹ 250</span></Typography>
                                                    <Box mt={3}>
                                                        <PurpleFilledBtn navlink={true} btnlink="/cart/" btntitle="ADD TO CART" fullWidth={true} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Box>
                                                <Box>
                                                    <Image src={product2} alt="product2" layout='responsive' />
                                                </Box>
                                                <Box mt={2} p={2}>
                                                    <Typography variant='h3' align='center' className='text-light-grey'>MEDITATION ALTAR TABLE SET</Typography>
                                                    <Typography align='center' className={Styles.price}><del className='text-light-grey'>₹ 7500</del> <span className='text-pestal-purple'>₹ 6700</span></Typography>
                                                    <Box mt={3}>
                                                        <PurpleFilledBtn navlink={true} btnlink="/cart/" btntitle="ADD TO CART" fullWidth={true} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default NewProduct