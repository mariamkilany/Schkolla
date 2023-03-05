import React, { useContext } from 'react'
import SideBar from '../sideBar/SideBar'
import {Outlet} from 'react-router-dom'
import AuthContext from "./AuthContext";
function DashLayout() {
  //Read the 'user' information from the 'AuthContext'.
    const { isVisible } = useContext(AuthContext);
  return <>
  <SideBar/>
  <div className={`container pt-5 pb-5 ${isVisible?'size':''}`} >
    <Outlet/>
  </div>
  </>
}

export default DashLayout
