// import React from 'react'
import React, { useState ,useEffect } from 'react'
import './rgister.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../Hooks/useAuth';
import axios from '../../Api/Api';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const LOGIN_URL = '/login';

export default function Register() {
  const[user,SetUser]=useState({
    email:'',
    password:''
});
const [validated, setValidated] = useState(false);
function getUserData(e){
  let myUser ={...user};
  myUser[e.target.name]=e.target.value;
  SetUser(myUser);
}
  const[emailEror,setEmailError]=useState('');
  const[passEror,setPassError]=useState('');
  // use hoooks
  const { setAuth } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      let data= await axios.post(LOGIN_URL,user)
      console.log(data)
      const accessToken = data?.data?.accessToken;
            // setAuth({ email:user.email, passwword:user.password,accessToken });
            SetUser({  email:'',
            password:''});
            // navigate(from, { replace: true });
    }catch(err){
      if (!err?.response) {
        setEmailError('السرفر لا يستجيب اسفيين يسطا');
    } else if (err.response?.data.msg.includes(`this email dosen't exist!`)) {
        setEmailError('البريد الالكترونى غير صالح');
    } else if (err.response?.data.msg.includes(`this is a wrong password`)) {
        setPassError('كلمة المرور غير صحيحه');
    } else {
        setValidated(true);
    }
}

    }
  return <>
  <Form noValidate className='col-md-6 col-sm-8' validated={validated} onSubmit={handleSubmit}>
            <div className="log-container  py-3">
            <h2 className='mb-3'>أهلا بعودتك</h2>
      <div className="input-cont py-4">
      <Form.Group className="mb-5" controlId="validationCustom01" >
                <Form.Control
                    required
                    type="text"
                    placeholder="البريد الالكترونى"
                    name='email'
                    autoFocus
                    onChange={getUserData}
                />
                  <Form.Control.Feedback type="invalid">
                        الرجاء ادخال البريد الالكترونى
            </Form.Control.Feedback>
            <div className="invalid-feedback" style={{display:emailEror!==''?'block':'none'}}>
              {emailEror}
            </div>
                        
                </Form.Group>
                <Form.Group className="mb-1" controlId="validationCustom01" >
                <Form.Control
                    required
                    type="password"
                    placeholder="كلمة المرور"
                    name='password'
                    autoFocus
                    onChange={getUserData}
                />
                  <Form.Control.Feedback type="invalid">
                    الرجاء ادخال كلمة المرور
            </Form.Control.Feedback>
            <div className="invalid-feedback" style={{display:passEror!==''?'block':'none'}}>
              {passEror}
            </div>
                </Form.Group>
      </div>
      <Button variant="primary" type="submit" onClick={ (e)=>{handleSubmit(e)}}>
                تسجيل الدخول 
            </Button>
            </div>
            </Form>
      {/* <form onSubmit={submitRegsterForm}>
      <div className='log-container col-3 py-3'>
            <h2 className='mb-3'>أهلا بعودتك</h2>
            <div className="input-cont py-4">
                <input type="text" placeholder='البريد الالكترونى' name='email' id='email'  onChange={getUserData}/>
                <input type="password" placeholder='كلمة المرور'  name='password' id='password' onChange={getUserData}/>
            </div>
            <button type="submit" className="btn btn-primary"> 
            {isLoading===true?<i class="fa-solid fa-spinner fa-spin"></i>:'تسجيل الدخول'}
            </button>
        </div>
      </form> */}
      </>
}
