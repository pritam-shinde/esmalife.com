import { Grid, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Styles from '../../styles/Home.module.css'
import { PurpleOutlinedButton } from '../../components/components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Hero = () => {
    return (
        <>
            <section>
                <Container className='px-0' maxWidth="xxl" style={{ height: 'inherit' }}>
                    <Swiper spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                         modules={[Autoplay, Navigation]}
                        className="mySwiper">
                        <SwiperSlide className={`${Styles.Slider1} ${Styles.slide}`}>
                            <Grid container style={{ height: 'inherit' }}>
                                <Grid item xs={11} lg={10} className="mx-auto flex items-center" style={{ height: 'inherit' }}>
                                    <Box>
                                        <Typography variant='h1' className={Styles.heroTitle}><span className={Styles.semibold}>Brilliant things happen in</span> <br /><span className={Styles.bold}>Calm Minds</span></Typography>
                                        <Box mt={3}>
                                            <PurpleOutlinedButton navlink={true} btnlink="/shop/" btntitle={`SHOP NOW`} />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide className={`${Styles.Slider2} ${Styles.slide}`}></SwiperSlide>
                        <SwiperSlide className={`${Styles.Slider3} ${Styles.slide}`}></SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default Hero