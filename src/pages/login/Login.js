import React from 'react'
import logo from './images/logo.png'
import kids from './images/kids.png'
import './login.css'
import Login from '../../components/Login/Login'
function LoginPage() {
    return <>
        <header className='row'>
            <img className='col-md-2 col-sm-6 logo' src={logo} alt="logo"/>
            <h2 className='col-md-8 log-head'>إدارة مدرسية</h2>
        </header>
        <div className='row'>
            <h1 className='slogn'>“كن آمنا كن طيباً كن ذكياً”</h1>
        </div>
        <div className='row mt-sm-2'>
            <img src={kids} alt="kids" className='col-sm-6 kids d-none d-sm-block' />
            <div className='col-sm-6 login-con'>
                <Login/>
            </div>
        </div>
        </>
}

export default LoginPage
