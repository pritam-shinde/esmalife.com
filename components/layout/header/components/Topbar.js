import { Search, LocalMallOutlined, Person } from '@mui/icons-material'
import { Container, Grid, Box, IconButton, Badge, TextField, Avatar } from '@mui/material'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../../../../public/logo/logo.webp'
import Styles from '../../../../styles/Header.module.css'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { retriveCart } from '../../../../redux/action/cartActions'


const Topbar = () => {
    const [customerAvatar, setCustomerAvatar] = useState(null)
    const router = useRouter()

    const cart = useSelector((state) => state.setCartReducer.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(retriveCart())
    },[])

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
                                <Grid item lg={6}>
                                    <Box>
                                        <form>
                                            <Box style={{ position: "relative" }}>
                                                <TextField id="filledbasic" className='border-0' label="Search here..." variant="filled" fullWidth required />
                                                <IconButton type='submit' id="searchButton">
                                                    <Search />
                                                </IconButton>
                                            </Box>
                                        </form>
                                    </Box>
                                </Grid>
                                <Grid item lg={2}>
                                    <IconButton onClick={() => router.push('/cart/')}>
                                            <Badge color='secondary' badgeContent={cart ? cart.total_items ? cart.total_items : 0 : 0}>
                                                <LocalMallOutlined className='text-light-grey' />
                                            </Badge>
                                    </IconButton>
                                    {
                                        customerAvatar == null ? <IconButton>
                                            <Person />
                                        </IconButton> : <IconButton>
                                            <Avatar style={{ height: "2rem", width: "2rem" }}>

                                            </Avatar>
                                        </IconButton>
                                    }
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