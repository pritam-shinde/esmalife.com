import React, { useEffect } from 'react'
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import { Footer, Header } from '../components/components'
import Head from 'next/head';
import { Facility } from '../sections/sections';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
  }, [])
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Facility />
    <Footer />
  </>)
}

export default MyApp
