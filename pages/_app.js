import React, { useEffect, useState } from 'react'
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import { Footer, Header } from '../components/components'
import Head from 'next/head';
import { Facility } from '../sections/sections';
import { CartProvider } from '../context/cart'
import { useCartState } from '../context/cart';
import commerce from '../lib/commerce';

function MyApp({ Component, pageProps }) {

  const [itemInCart, setItemInCart] = useState(0);

  const fetchCart = async () =>{
    const cart = await commerce.cart.retrieve();
    setItemInCart(cart.total_unique_items)
  }

  useEffect(()=>{
    fetchCart()
  },[itemInCart])


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
  }, [])
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <CartProvider>
    <Header cart={itemInCart} />
      <Component {...pageProps} />
      <Facility />
    <Footer />
    </CartProvider>
  </>)
}

export default MyApp
