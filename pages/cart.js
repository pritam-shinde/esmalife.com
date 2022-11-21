import Head from 'next/head'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Remove, Add, Close } from '@mui/icons-material'
import { Box, Button, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useCartDispatch, useCartState } from '../context/cart';
import Image from 'next/image';
import { PurpleFilledBtn, PurpleOutlinedButton } from '../components/components';
import commerce from '../lib/commerce';
import emptyCart from '../public/cart/empty-cart.svg'

const cart = () => {
  const { line_items, subtotal } = useCartState()
  const isEmpty = line_items.length === 0
  const { setCart } = useCartDispatch()
  const { cart } = useCartState()


  const handleUpdateCart = (cart) => {
    setCart(cart)
  }

  const removeItem = async (id) => {
    await commerce.cart.remove(id).then(handleUpdateCart)
  }

  const decreaseQuantity = async (productId, quantity) => {
    quantity > 1 ? await commerce.cart.update(productId, { quantity: quantity - 1 }).then(handleUpdateCart) : quantity == 1 ? removeItem(productId) : null
  }

  const increaseQuantity = (productId, quantity) => {
    commerce.cart.update(productId, { quantity: quantity + 1 }).then(handleUpdateCart)
  }

  const handleCartEmpty = async () => {
    await commerce.cart.empty().then(handleUpdateCart)
  }

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
                    isEmpty ? <Box p={3} className="d-flex flex-column align-items-center">
                      <Image src={emptyCart} alt="empty cart" height="200" width="200" />
                      <Typography variant='h5' align="center">Hey, it feels so light!</Typography>
                      <Typography variant="h6" align="center">There is nothing in your bag. Let's add some items.</Typography>
                      <Box mt={3}>
                        <PurpleFilledBtn navlink={true} btnlink="/shop/" btntitle="SHOP NOW" />
                      </Box>
                    </Box> : <Grid container spacing={5}>
                      <Grid item xs={12} md={8}>
                        <Box>
                          <Grid container>
                            {
                              line_items.map(item => <Grid item xs={12} key={item.id} className="mb-3">
                                <Box p={3} className='border rounded-3'>
                                  <Box mb={1} className="d-flex justify-content-end">
                                    <IconButton onClick={() => removeItem(item.id)}>
                                      <Close />
                                    </IconButton>
                                  </Box>
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
                                      <Box my={2} className="d-flex align-items-center">
                                        <Typography>Quantity:</Typography>
                                        <Box ml={3}>
                                          <IconButton className='border rounded-circle mx-3' onClick={() => decreaseQuantity(item.id, item.quantity)}><Remove /></IconButton>
                                          <strong>{item.quantity}</strong>
                                          <IconButton className='border rounded-circle mx-3' onClick={() => increaseQuantity(item.id, item.quantity)}><Add /></IconButton>
                                        </Box>
                                      </Box>
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
                        <Divider style={{ background: "#000" }} />
                        <Box mt={3}>
                          <Button onClick={handleCartEmpty}>MAKE CART EMPTY</Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box>
                          <Typography variant='h6' className='text-light-grey'>PRICE DETAILS ({line_items.length} Item)</Typography>
                          <Box mt={3} className="table-responsive">
                            <table className="table" cellSpacing={5}>
                              <tr>
                                <td>Total MRP</td>
                                <td className='text-end'>{subtotal.formatted_with_symbol}</td>
                              </tr>
                              <tr>
                                <td>Shipping Charges</td>
                                <td className='text-end'>₹ 0</td>
                              </tr>
                              <tr className='border-top'>
                                <th>
                                  Total Amount
                                </th>
                                <th className='text-end'>
                                  {subtotal.formatted_with_symbol}
                                </th>
                              </tr>
                            </table>
                          </Box>
                          <Box mt={3}>
                            <PurpleFilledBtn btnlink="/checkout/" navlink={true} btntitle="PLACE ORDER" />
                          </Box>
                        </Box>
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