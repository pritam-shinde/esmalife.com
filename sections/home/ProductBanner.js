import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import Styles from '../../styles/Home.module.css'


const ProductBanner = () => {
    return (
        <>
            <section className='md:mt-4 mt-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} lg={10} className="mx-auto">
                            <Box className={Styles.ProductBanner}>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default ProductBanner