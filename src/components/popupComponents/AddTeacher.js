import React, { useState ,useContext, useRef ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {SlCloudUpload} from 'react-icons/sl'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../shared/AuthContext'
import './popup.css';
import axios from 'axios';

const AddTeacher = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const {accessToken} =useContext(AuthContext)
    const id=localStorage.getItem('id')

    const name = useRef(null);
    const password = useRef(null);
    const nationalId = useRef(null);
    const dateOfBirth = useRef(null);
    const age = useRef(null);
    const [gender,setSelected] = useState(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    const address = useRef(null);
    const role = useRef(null);
    const salary = useRef(null);
    const [imgUrl,setImageUrl] =useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange=(e)=> {
    setSelected(e.target.value );
}
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary
        widgetRef.current= cloudinaryRef.current.createUploadWidget({
            cloudName:'djvazpvio',
            uploadPreset:'rkgmm1az'
    },(error, result) => { 
    if (!error && result && result.event === "success") { 
        setImageUrl(result.info.secure_url)
    }})
    },[])

    const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    await axios.post('teacher/addTeacher',{name:name.current.value,age:age.current.value,nationalId:nationalId.current.value,
        dateOfBirth:dateOfBirth.current.value,gender:gender,email:email.current.value,phoneNumber:phoneNumber.current.value,
        address:address.current.value,role:role.current.value,salary:salary.current.value,imgUrl:imgUrl,password:password.current.value},
    { params: { userId: id } , headers: {authorization : `Bearer ${accessToken}`} }).then(()=>{
        name.current.value=null;
        email.current.value=null;
        phoneNumber.current.value=null;
        nationalId.current.value=null;
        dateOfBirth.current.value=null;
        age.current.value=null;
        setSelected(null);
        address.current.value=null;
        role.current.value=null;
        salary.current.value=null;
        setImageUrl('');
        handleClose();
    })
    };
    return (
        <>
        <Button variant="primary" className='levelbtn' onClick={handleShow}>إضافة معلم جديد</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>معلومات المعلم الشخصية</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01" style={{display: "flex",flexDirection: "row-reverse",justifyContent: "space-between"}} >
                <div className='w-75'>
                <Form.Label>الإسم</Form.Label>
                <Form.Control
                    style={{height:"40%"}}
                    required
                    type="text"
                    autoFocus
                    ref={name}
                />
                </div>
                <div className='widget-cont'controlId="validationCustom01">
                    {imgUrl===''?<Button onClick={()=>widgetRef.current.open()}><SlCloudUpload/></Button>: <img src={imgUrl} alt="teacherimg"/>}
                </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>الرقم القومي</Form.Label>
                <Form.Control
                    required
                    type="text"
                    ref={nationalId}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>تاريخ الميلاد</Form.Label>
                <Form.Control
                    required
                    type="date"
                    ref={dateOfBirth}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>السن</Form.Label>
                <Form.Control
                    required
                    type="number"
                    autoFocus
                    ref={age}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>الجنس</Form.Label>
                <Form.Select required  value={gender} onChange={(e)=>handleChange(e)}>
                    <option value={''} disabled>أختر</option>
                    <option defult value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>الإيميل</Form.Label>
                <Form.Control
                ref={email}
                    required
                    type="email"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>رقم الهاتف</Form.Label>
                <Form.Control
                ref={phoneNumber}
                    required
                    type="text"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>كلمة المرور </Form.Label>
                <Form.Control
                ref={password}
                    required
                    type="password"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                ref={address}
                    required
                    type="text"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>التخصص</Form.Label>
                <Form.Control
                ref={role}
                    required
                    type="text"
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>المرتب</Form.Label>
                <Form.Control
                ref={salary}
                    required
                    type="number"
                    autoFocus
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                إغلاق
            </Button>
            <Button variant="primary" type="submit" onClick={ (e)=>{handleSubmit(e)}}>
                حفظ التغييرات
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AddTeacher
