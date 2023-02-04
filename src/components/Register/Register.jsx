import React, {useState } from 'react'
import './rgister.css'
import axios from 'axios'

export default function Register() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const msg=await axios.post(`https://erin-hungry-bonobo.cyclic.app/v1/admin/login`,{email,password})
    console.log(msg)
  }
  return (
    <form onSubmit={handleSubmit}>
    <div>
          <div className='log-container col-3'>
              <h2>أهلا بعودتك</h2>
              <div className="input-cont">
                  <input type="text" placeholder='أسم المستخدم' onChange={(e)=>setEmail(e.target.value)} />
                  <input type="password" placeholder='كلمة المرور' onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">تسجيل الدخول</button>
          </div>
      </div>
    </form>
  )
}
