import React from 'react'
import './rgister.css'

export default function register() {
  return (
  <div className='row'>
        <div className='log-container col-3'>
            <h2>أهلا بعودتك</h2>
            <div className="input-cont">
                <input type="text" placeholder='أسم المستخدم' />
                <input type="password" placeholder='كلمة المرور' />
            </div>
            <button type="submit" className="btn btn-primary">تسجيل الدخول</button>
        </div>
    </div>
  )
}
