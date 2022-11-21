import { Search, LocalMallOutlined } from '@mui/icons-material'
import { Container, Grid, Box, IconButton, Badge, TextField } from '@mui/material'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../../public/logo/logo.webp'
import Styles from '../../../../styles/Header.module.css'
import { useCartState } from '../../../../context/cart';


const Topbar = () => {
    const  {total_unique_items}  = useCartState();

    return (
        <>
            <Container maxWidth="xxl" className='d-none d-lg-block py-2'>
                <Grid container>
                    <Grid item xs={12} lg={10} className="mx-auto">
                        <Box>
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3}>
                                <Grid item lg={2}>
                                    <Box>
                                        <Link href="/" legacyBehavior>
                                            <a className={Styles.navbarBrand}>
                                                <Image src={Logo} alt="Esmalife Logo" title='Esmalife Logo' layout='responsive' />
                                            </a>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item lg={7}>
                                    <Box>
                                        <form>
                                            <Box style={{position:"relative"}}>
                                                <TextField id="filledbasic" className='border-0' label="Search here..." variant="filled" fullWidth required />
                                                <IconButton type='submit' id="searchButton">
                                                    <Search />
                                                </IconButton>
                                            </Box>
                                        </form>
                                    </Box>
                                </Grid>
                                <Grid item lg={1}>
                                    <IconButton>
                                        <a href="/cart/">
                                            <Badge color='secondary' badgeContent={total_unique_items}>
                                                <LocalMallOutlined className='text-light-grey' />
                                            </Badge>
                                        </a>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Topbar