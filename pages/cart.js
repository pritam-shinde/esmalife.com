import Head from 'next/head'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { Remove, Add, Close } from '@mui/icons-material'
import { Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import { PurpleFilledBtn} from '../components/components';
import emptyCart from '../public/cart/empty-cart.svg'
import Styles from '../styles/Button.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { retriveCart, updateCart, removeProductFromCart, makeCartEmpty } from '../redux/action/cartActions'

const Cart = () => {
  const cart = useSelector((state) => state.setCartReducer.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retriveCart())
  }, [])

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
                    cart ? cart.line_items ? cart.line_items.length  < 1 ? <Box p={3} className="d-flex flex-column align-items-center">
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
                              cart? cart.line_items ? cart.line_items.map(item => <Grid item xs={12} key={item.id} className="mb-3">
                                <Box p={3} className='border rounded-3'>
                                  <Box mb={1} className="d-flex justify-content-end">
                                    <IconButton onClick={() => {dispatch(removeProductFromCart(item.id))}}>
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
                                          <IconButton className='border rounded-circle mx-3' onClick={() => dispatch(updateCart(item.id, Number(item.quantity) - 1))}><Remove /></IconButton>
                                          <strong>{item.quantity}</strong>
                                          <IconButton className='border rounded-circle mx-3' onClick={() => dispatch(updateCart(item.id, Number(item.quantity) + 1))}><Add /></IconButton>
                                        </Box>
                                      </Box>
                                      <Divider />
                                      <Typography>{item.price.formatted_with_symbol} X {item.quantity}</Typography>
                                      <Typography><strong>{item.line_total.formatted_with_symbol}</strong></Typography>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>) : null : null
                            }
                          </Grid>
                        </Box>
                        <Divider style={{ background: "#000" }} />
                        <Box mt={3}>
                          <Button className={Styles.PurpleOutlinedButton} onClick={()=> dispatch(makeCartEmpty())}>MAKE CART EMPTY</Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box p={3} className='border rounded-3'>
                          <Typography variant='h6' className='text-light-grey'>PRICE DETAILS ({cart ? cart.line_items? cart.line_items.length : null : null} Item)</Typography>
                          <Box mt={3}>
                            <List>
                              <ListItem>
                                <ListItemText primary="Discount On MRP" />
                                <Typography><del>??? {cart ? cart.total_items ? cart.total_items * 200 : null : null}</del></Typography>
                              </ListItem>
                              <ListItem>
                                <ListItemText primary={<strong>Subtotal</strong>} />
                                <Typography><strong>{cart ? cart.subtotal.formatted_with_symbol ? cart.subtotal.formatted_with_symbol : null : null}</strong></Typography>
                              </ListItem>
                            </List>
                          </Box>
                          <Box mt={3}>
                            <PurpleFilledBtn btnlink="/checkout/" navlink={true} btntitle="PLACE ORDER" />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid> : "Loading...." :  "Loading...."
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

export default Cart