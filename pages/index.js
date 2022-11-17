import React from 'react'
import Head from 'next/head'
import  commerce  from '../lib/commerce'
import {  Hero, NewProduct, ProductBanner, ShopByCategory } from '../sections/sections'

export const getServerSideProps = async () => {
  const { data: merchant } = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      merchant,
      products,
      categories
    }
  }
}

const index = ({ merchant, products, categories }) => {

  return (
    <>
      <Head>
        <title>Home - esmalife.com</title>
      </Head>
      <main>
        <Hero />
        <ShopByCategory />
        <NewProduct products={products} />
        <ProductBanner />
      </main>
    </>
  )
}

export default index