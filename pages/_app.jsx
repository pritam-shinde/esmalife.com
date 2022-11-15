import React from 'react'
import "swiper/css/bundle";
import '../styles/globals.css'
import Head from 'next/head'
import { Footer, Header } from '../components/components'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
