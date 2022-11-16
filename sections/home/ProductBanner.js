import React, { useState, useEffect } from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import Styles from '../../styles/Home.module.css'
import { PurpleOutlinedButton } from '../../components/components';


const ProductBanner = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })
    return (
        <>
            <section className='mt-md-4 mt-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} lg={10} className="mx-auto">
                            <Box className={Styles.ProductBanner}>
                                <Grid container justifyContent={width < 600 ? 'center' : 'flex-end'} style={{ height: "inherit" }}>
                                    <Grid item xs={11} md={6} className="d-flex align-items-center" style={{ height: "inherit" }}>
                                        <Box>
                                            <Typography className={Styles.ProductBannerTitle}>Meditation</Typography>
                                            <Typography className={Styles.ProductBannerText}>Making my thoughts peaceful and stable with meditation</Typography>
                                            <Box mt={3}>
                                                <PurpleOutlinedButton navlink={true} btnlink="/shop/" btntitle="SHOP NOW" />
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

export default ProductBanner