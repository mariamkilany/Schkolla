import React from 'react'
import SideBar from '../components/sideBar/SideBar'
import {Outlet} from 'react-router-dom'
function Layout() {
  return <>
  <SideBar/>
  <div className='container'>
    <Outlet/>
  </div>
  </>
}

export default Layout
