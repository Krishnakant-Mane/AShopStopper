import React from 'react'
import { Navbar } from './pages/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './pages/Footer'
import { Products } from './components/Products'
import { Home } from './components/Home'
import { Viewproduct } from './components/Viewproduct'

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <main><Outlet/></main>
        <Footer/>
        
    </>
  )
}
