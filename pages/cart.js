import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useCartState } from '../context/cart';
import Image from 'next/image';

const cart = () => {
  const { line_items } = useCartState()

  const isEmpty = line_items.length === 0

  console.log(JSON.stringify(line_items, null, 2))

  return (
    <>
      <Head>
        <title>Cart - esmalife.com</title>
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
                      <li className="breadcrumb-item active text-pestal-purple font-weight-bold text-uppercase" aria-current="page">Cart</li>
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
              <Grid item xs={12} lg={10} className="mx-auto">
                <Typography variant='h1' align='center' className='text-pestal-purple'>CART</Typography>
                <Box py={3}>
                  {
                    isEmpty ? <Box p={3}>
                      <Typography variant='h5' align="center">Hey, it feels so light!</Typography>
                      <Typography variant="h6" align="center">There is nothing in your bag. Let's add some items.</Typography>
                    </Box> : <Grid container spacing={3}>
                      <Grid item xs={12} md={8}>
                        <Box>
                          <Grid container>
                            {
                              line_items.map(item => <Grid item xs={12} key={item.id} className="mt-3">
                                <Box p={3} className='border rounded-3'>
                                  <Grid container alignItems="center">
                                    <Grid item xs={12} md={4}>
                                      {
                                        item.image ? item.image.url ? <Image src={item.image.url} width="200" height="200" /> : null : null
                                      }
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                      <Typography variant='h5' className='text-pestal-purple text-capitalize'>{item.name}</Typography>
                                      <Typography><strong>Quantity: </strong>{item.quantity}</Typography>
                                      <Typography>Price: {item.price.formatted_with_symbol} / per</Typography>
                                      <Divider />
                                      <Typography>{item.price.formatted_with_symbol} X {item.quantity}</Typography>
                                      <Typography><strong>{item.line_total.formatted_with_symbol}</strong></Typography>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>)
                            }
                          </Grid>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>


                      </Grid>
                    </Grid>
                  }
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default cart