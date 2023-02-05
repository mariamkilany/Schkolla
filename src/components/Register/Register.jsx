import React from 'react'
import React, { useState ,useEffect } from 'react'
import './rgister.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Register() {
  const[emailEror,setEmailError]=useState('الرجاء ادخال البريد الاكترونى');
  const[passEror,setPassError]=useState(' الرجاء ادخال كلمة المرور ');
  useEffect(()=>{
    async function sendRegesterData(){
      let data= await axios.post(`https://erin-hungry-bonobo.cyclic.app/v1/admin/login`,user).then((res,req)=>{
        console.log(res.status)
      }).catch((error)=>{
        if(error.response){
          console.log(error.response.data.msg);
          if(error.response.data.msg===`this email dosen't exist!`){
            setEmailError("هذا البريد الإلكتروني غير صالح") 
          }
        }
      });
  }
  },[emailEror,passEror])
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
  // async function sendRegesterData(){
  //     let data= await axios.post(`https://erin-hungry-bonobo.cyclic.app/v1/admin/login`,user).then((res,req)=>{
  //       console.log(res.status)
  //     }).catch((error)=>{
  //       if(error.response){
  //         console.log(error.response.data.msg);
  //         if(error.response.data.msg===`this email dosen't exist!`){
  //           setEmailError("هذا البريد الإلكتروني غير صالح") 
  //         }
  //       }
  //     });
  // }
  ////////////////////////////
  // // function submitRegsterForm(e){
  // //   e.preventDefault();
  //   sendRegesterData();
    // let validation = validateRegisterForm();
    // console.log(validation.error.details[0]);
    // if(validation.error){
    //   setIsLoading(false);
    //   setErrorList()
    // }
    // else{
    //   sendRegesterData();
    // }
  // }
  // function validateRegisterForm(){
  //   let scheme=Joi.object({
  //     email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
  //     password:Joi.string().pattern(/[A-Z][a-z]{3-5}[0-9]{5-8}/).required()
  //   });
  //   console.log(scheme.validate(user,{abortEarly:false}));
  // }
  const handleSubmit = (event) => {
    sendRegesterData();
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    };
  return <>
  {/* {errorList.map((error,index)=>{
    if(error.context.label==='password'){
      <div key={index} className="alert alert-danger my-2">password invalid</div>
    }else{
      <div key={index} className="alert alert-danger my-2">{error.massage}</div>
    }
  })} */}
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="log-container col-3 py-3">
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
                      {emailEror}  
            </Form.Control.Feedback>
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
                        {passEror}
            </Form.Control.Feedback>
                </Form.Group>
      </div>
      <Button variant="primary" type="submit" onClick={ (e)=>{handleSubmit(e)}}>
                تسجيل الدخول 
            </Button>
            </div>
            <button type="submit" className="btn btn-primary">تسجيل الدخول</button>
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
    </div>
  )
      </form> */}
      </>
}