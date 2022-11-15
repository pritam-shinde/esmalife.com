import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'

const NewProduct = () => {
    return (
        <>
            <section className='md:mt-4 mt-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} lg={10} className="mx-auto">
                            <Box py={5}>
                                <Box py={2}>
                                <Typography variant='h2' className='text-light-grey' align='center'>NEW PRODUCTS FOR YOU</Typography>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default NewProduct