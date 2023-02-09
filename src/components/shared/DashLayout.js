import React, { useContext } from 'react'
import SideBar from '../sideBar/SideBar'
import {Outlet} from 'react-router-dom'
import AuthContext from "./AuthContext";
function DashLayout() {
  //Read the 'user' information from the 'AuthContext'.
    const { user } = useContext(AuthContext);
  return <>
  <SideBar/>
  <div className='container mt-5'>
    <Outlet/>
  </div>
  </>
}

export default DashLayout
