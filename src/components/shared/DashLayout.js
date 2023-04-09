import React, { useContext } from 'react'
import SideBar from '../sideBar/SideBar'
import {Outlet} from 'react-router-dom'
import AuthContext from "./AuthContext";
// import {useMediaQuery , useTheme} from '@mui/material'
function DashLayout() {
  //Read the 'user' information from the 'AuthContext'.
    // const theme = useTheme()
    const { isVisible ,setIsVisible } = useContext(AuthContext);
    // const isSm=useMediaQuery(theme.breakpoints.down("md"))
    // if(isSm){
    //   setIsVisible(true);
    // }
  return <>
  <SideBar/>
  <div className={`container appCont pt-5 pb-5 ${isVisible?'size':''}`} >
    <Outlet/>
  </div>
  </>
}

export default DashLayout
