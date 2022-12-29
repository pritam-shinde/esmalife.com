import React from 'react'
import { Topbar, Navbar } from './components/components'

const Header = () => {
  return (
    <>
      <header className='fixed-top bg-white shadow-lg'>
        <Topbar />
        <Navbar />
      </header>
    </>
  )
}

export default Header