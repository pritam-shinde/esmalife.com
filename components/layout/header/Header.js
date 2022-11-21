import React from 'react'
import { Topbar, Navbar } from './components/components'

const Header = ({cart}) => {
  return (
    <>
      <header>
        <Topbar cart={cart} />
        <Navbar cart={cart} />
      </header>
    </>
  )
}

export default Header