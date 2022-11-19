import React, { useEffect } from 'react'
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import { Footer, Header } from '../components/components'
import Head from 'next/head';
import { Facility } from '../sections/sections';
import { CartProvider } from '../context/cart'
import { useCartState } from '../context/cart';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
  }, [])
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <CartProvider>
    <Header />
      <Component {...pageProps} />
      <Facility />
    <Footer />
    </CartProvider>
  </>)
}

export default MyApp
