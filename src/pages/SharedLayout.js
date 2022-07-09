import React from 'react'
import { Outlet } from 'react-router-dom'
import DesktopNavbar from '../components/navbar/DesktopNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'

const SharedLayout = () => {
  return (
    <main>
      <DesktopNavbar />
      <MobileNavbar />
      <section className='section'>
        <Outlet />
      </section>
    </main>
  )
}

export default SharedLayout
