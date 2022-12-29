import React from 'react'
import Head from 'next/head'
import commerce from '../lib/commerce'
import { Hero, NewProduct, ProductBanner, ShopByCategory } from '../sections/sections'

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
      </main>
    </>
  )
}

export default index