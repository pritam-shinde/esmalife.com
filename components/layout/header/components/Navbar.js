import { Close, Menu, LocalMallOutlined } from '@mui/icons-material';
import { Badge, Container, Grid, IconButton, Box } from '@mui/material'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Styles from '../../../../styles/Header.module.css'
import Logo from '../../../../public/logo/logo.webp'
import TransparentLogo from '../../../../public/logo/logo.png'
import Image from 'next/legacy/image';
import { useSelector, useDispatch } from 'react-redux'
import { retriveCart } from '../../../../redux/action/cartActions'
import { useRouter } from 'next/router';

const Navbar = () => {
    const [width, setWidth] = useState();
    const [open, setOpen] = useState(false)
    const cart = useSelector((state) => state.setCartReducer.cart)
    const dispatch = useDispatch()

    const router = useRouter()

    useEffect(() => {
        dispatch(retriveCart())
    },[])

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })

    return (
        <>
            {
                width > 1000 ? <nav>
                    <Container maxWidth="xxl" className='bg-pestal-purple py-2'>
                        <Grid container>
                            <Grid item xs={12} lg={10} className="mx-auto">
                                <ul className='d-flex list-unstyled m-0'>
                                    <li className={Styles.navItem}>
                                        <Link href="/shop/" legacyBehavior>
                                            <a className={Styles.navLink}>ALL PRODUCTS</a>
                                        </Link>
                                    </li>
                                    <li className={Styles.navItem}>
                                        <Link href="/category/gems-and-jewelry/" legacyBehavior>
                                            <a className={Styles.navLink}>GEM AND JEWELRY</a>
                                        </Link>
                                    </li>
                                    <li className={Styles.navItem}>
                                        <Link href="/category/healing-kits/" legacyBehavior>
                                            <a className={Styles.navLink}>HEALING KITS</a>
                                        </Link>
                                    </li>
                                    <li className={Styles.navItem}>
                                        <Link href="/category/crystal-pendulum/" legacyBehavior>
                                            <a className={Styles.navLink}>CRYSTAL PENDULUMS</a>
                                        </Link>
                                    </li>
                                    <li className={Styles.navItem}>
                                        <Link href="/category/healing-lamps/" legacyBehavior>
                                            <a className={Styles.navLink}>HEALING LAMPS</a>
                                        </Link>
                                    </li>
                                    <li className={Styles.navItem}>
                                        <Link href="/category/healing-jewelry/" legacyBehavior>
                                            <a className={Styles.navLink}>HEALING JEWELRY</a>
                                        </Link>
                                    </li>
                                    <li className={Styles.navItem}>
                                        <Link href="/category/healing-wand/" legacyBehavior>
                                            <a className={Styles.navLink}>HEALING WANDS</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Container>
                </nav>

                    :

                    width < 1000 ? <nav>
                        <Container maxWidth="xxl" className='relative'>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item xs={2}>
                                    <IconButton onClick={() => setOpen(!open)}>
                                        <Menu />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={width < 600 ? 5 : 4}>
                                    <Link href="/" legacyBehavior>
                                        <a className='navbar-brand'>
                                            <Image src={Logo} alt="Esmalife Logo" title="Esmalife Logo" layout='responsive' />
                                        </a>
                                    </Link>
                                </Grid>
                                {router.pathname !== '/checkout' ? <Grid item xs={2}>
                                    <IconButton onClick={()=> router.push('/cart/')}>
                                            <Badge color='secondary' badgeContent={cart ? cart.total_items ? cart.total_items : null : null }>
                                                <LocalMallOutlined className='text-dark-grey' />
                                            </Badge>
                                    </IconButton>
                                </Grid> : null}
                            </Grid>
                        </Container>
                        {
                            open ? <Container maxWidth="xxl" className={Styles.mobileMenu}>
                                <Box>
                                    <Box py={2}>
                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Grid item xs={width < 600 ? 6 : 4}>
                                                <Link href="/" legacyBehavior>
                                                    <a className='navbar-brand'>
                                                        <Image src={TransparentLogo} alt="Esmalife Logo" title="Esmalife Logo" layout='responsive' />
                                                    </a>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <IconButton onClick={() => setOpen(!open)}>
                                                    <Close className='text-pestal-purple font-bold' />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box mt={3}>
                                        <ul className='list-unstyled'>
                                            <li className={Styles.navItem}>
                                                <Link href="/shop/" legacyBehavior>
                                                    <a className={Styles.navLink}>ALL PRODUCTS</a>
                                                </Link>
                                            </li>
                                            <li className={Styles.navItem}>
                                                <Link href="/category/gems-and-jewelry/" legacyBehavior>
                                                    <a className={Styles.navLink}>GEM AND JEWELRY</a>
                                                </Link>
                                            </li>
                                            <li className={Styles.navItem}>
                                                <Link href="/category/healing-kits/" legacyBehavior>
                                                    <a className={Styles.navLink}>HEALING KITS</a>
                                                </Link>
                                            </li>
                                            <li className={Styles.navItem}>
                                                <Link href="/category/crystal-pendulum/" legacyBehavior>
                                                    <a className={Styles.navLink}>CRYSTAL PENDULUMS</a>
                                                </Link>
                                            </li>
                                            <li className={Styles.navItem}>
                                                <Link href="/category/healing-lamps/" legacyBehavior>
                                                    <a className={Styles.navLink}>HEALING LAMPS</a>
                                                </Link>
                                            </li>
                                            <li className={Styles.navItem}>
                                                <Link href="/category/healing-jewelry/" legacyBehavior>
                                                    <a className={Styles.navLink}>HEALING JEWELRY</a>
                                                </Link>
                                            </li>
                                            <li className={Styles.navItem}>
                                                <Link href="/category/healing-wand/" legacyBehavior>
                                                    <a className={Styles.navLink}>HEALING WANDS</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Container> : null
                        }
                    </nav>

                        :
                        null
            }
        </>
    )
}

export default Navbar