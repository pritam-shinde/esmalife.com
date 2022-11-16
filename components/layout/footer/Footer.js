import { Copyright } from '@mui/icons-material'
import { Container, Grid, Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <Container maxWidth="xxl" className='bg-dark-grey'>
          <Grid container>
            <Grid item xs={12} lg={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box>
                        <Typography variant='h5' className='text-light-pestal-purple'>ABOUT US</Typography>
                      </Box>
                      <Box mt={3}>
                        <List className='p-0 m-0'>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>About Us</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>FAQ</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Our Producers</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Sitemap</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Terms & Conditions</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Privacy Policy</a>} />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box>
                        <Typography variant='h5' className='text-light-pestal-purple'>CUSTOMER SERVICES</Typography>
                      </Box>
                      <Box mt={3}>
                        <List className='p-0 m-0'>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Contact Us</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Track Your Order</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Product Care& Repair</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Book an Appointment</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Frequently Asked Question</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Shipping & Returns</a>} />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box>
                        <Typography variant='h5' className='text-light-pestal-purple'>CATALOG</Typography>
                      </Box>
                      <Box mt={3}>
                        <List className='p-0 m-0'>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Meditation Cushion</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Meditation Ring</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Meditation Candle</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Meditation Bench</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Meditation Gift</a>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<a href="/" className='text-white'>Meditation Books</a>} />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Box>
                        <Typography variant='h5' className='text-light-pestal-purple'>CONTACT US</Typography>
                      </Box>
                      <Box mt={3}>
                        <List className='p-0 m-0'>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<strong className='text-white'>Head Office:</strong>} secondary={<span className='text-white'>Chinchbhavan, Wardha Road, Nagpur.</span>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<strong className='text-white'>Phone:</strong>} secondary={<span className='text-white'>01712 234500</span>} />
                          </ListItem>
                          <ListItem className='p-0 mb-2'>
                            <ListItemText primary={<strong className='text-white'>Email:</strong>} secondary={<span className='text-white'>support@esmalife.com</span>} />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xxl" className='bg-grey'>
          <Grid container>
            <Grid item xs={12} lg={10} className="mx-auto">
              <Box py={2}>
                <Typography className='text-dark-grey' align='center'><Copyright /> {new Date().getFullYear()} esmalife.com | All Rights Reserved.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  )
}

export default Footer