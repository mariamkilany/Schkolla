import AuthContext from "../shared/AuthContext"
import React, { useState ,useContext , useRef } from 'react'
import './rgister.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login() {
  // const email = useRef("");
  // const password = useRef("");
  const[email ,setEmail] =useState('');
  const[password ,setPassword] =useState('');
  
  const [validated, setValidated] = useState(false);
  const[emailEror,setEmailError]=useState('');
  const[passEror,setPassError]=useState('');

  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    setEmailError('');
    setPassError('');
      let payload = {
            email,
            password
          };
      await login(payload).then((res)=>{
        if (!res?.response && res?.status===400) {
        setEmailError('السرفر لا يستجيب ');
    } else if (res.response?.data.msg.includes(`this email dosen't exist!`)) {
        setEmailError('البريد الالكترونى غير صالح');
    } else if (res.response?.data.msg.includes(`this is a wrong password`)) {
        setPassError('كلمة المرور غير صحيحه');
    } else {
        setValidated(true);
    }
        
      });
    }
  return <>
  <Form onValidate className='col-md-6 col-sm-8'  validated={validated} onSubmit={handleSubmit}>
            <div className="log-container  py-3">
            <h2 className='mb-3 welcome-back'>أهلا بعودتك</h2>
      <div className="input-cont py-4">
      <Form.Group className="mb-5" controlId="validationCustom01">
                <Form.Control
                    className="loginInpt"
                    required
                    type="text"
                    placeholder="البريد الالكترونى"
                    name='email'
                    autoFocus
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                  <Form.Control.Feedback type="invalid">
                        الرجاء ادخال البريد الالكترونى
            </Form.Control.Feedback>
            <div className="invalid-feedback" style={{display:emailEror!==''?'block':'none'}}>
              {emailEror}
            </div>
                        
                </Form.Group>
                <Form.Group className="mb-1" controlId="validationCustom01">
                <Form.Control
                    className="loginInpt"
                    required
                    type="password"
                    placeholder="كلمة المرور"
                    name='password'
                    autoFocus
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                  <Form.Control.Feedback type="invalid">
                    الرجاء ادخال كلمة المرور
            </Form.Control.Feedback>
            <div className="invalid-feedback" style={{display:passEror!==''?'block':'none'}}>
              {passEror}
            </div>
                </Form.Group>
      </div>
      <Button variant="primary" onClick={ ()=>{handleSubmit()}}>
                تسجيل الدخول 
            </Button>
            </div>
            </Form>
      </>
}
