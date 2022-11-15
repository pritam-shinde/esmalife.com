import Head from 'next/head'
import React from 'react'
import { Facility, Hero, NewProduct, ProductBanner, ShopByCategory } from '../sections/sections'

const index = () => {
  return (
    <>
      <Head>
        <title>Home - esmalife.com</title>
      </Head>
      <main>
        <Hero />
        <ShopByCategory />
        <NewProduct />
        <ProductBanner />
        <Facility />
      </main>
    </>
  )
}

export default index