import React, { useEffect, useState } from 'react'
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import { Footer, Header } from '../components/components'
import Head from 'next/head';
import { Facility } from '../sections/sections';
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
  }, [])

  useEffect(() => {
    window.myInfo = () => {
      const developer = [
        {
          Developer: "Aditya Nitin Burse (Jain)",
          Designation: "Front-End Developer",
          Employer: "Nonstop Corporation"
        },
        {
          Developer: "Ankit Shahu",
          Designation: "Full Stack Developer",
          Employer: "Nonstop Corporation"
        }

      ]
      console.log(developer)
    }
  })

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Facility />
      <Footer />
    </Provider>
  </>)
}

export default MyApp
