import React, { useState ,useRef ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {SlCloudUpload} from 'react-icons/sl'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './popup.css';
import axios from 'axios';

const UpdateTeacher = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const teacherId=localStorage.getItem('teacherId')
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [nationalId,setNationalId] = useState('');
    const [dateOfBirth,setDateOfBirth] = useState('');
    const [age,setAge] = useState('');
    const [gender,setSelected] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [address,setAddress] = useState('');
    const [role,setRole] = useState('');
    const [salary,setSalary]= useState('');
    const [imgUrl,setImageUrl] =useState('')
    const accessToken = localStorage.getItem('accessToken')
    const id=localStorage.getItem('id')
    useEffect(()=>{
        axios.get(`teacher/getTeacher/${teacherId}`,
        { params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} }).then((response)=>{
            setName(response.data.name)
            setEmail(response.data.email)
            setAge(response.data.age)
            setDateOfBirth(response.data.dateOfBirth)
            setImageUrl(response.data.imgUrl)
            setNationalId(response.data.nationalId)
            setPassword(response.data.password)
            setPhoneNumber(response.data.phoneNumber)
            setAddress(response.data.address)
            setSalary(response.data.salary)
            setRole(response.data.role)
        })
    },[])

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
    await axios.patch(`teacher/updateTeacher/${teacherId}`,{name,age,nationalId,dateOfBirth,gender:gender,email,phoneNumber,address,role,salary,imgUrl,password},
    { params: { userId: id } , headers: {authorization : `Bearer ${accessToken}`} }).then(()=>{handleClose();})
    };
    return (
        <>
        <button  className='btn btn-warning btn-2 w-100' onClick={handleShow}>تعديل</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>تعديل معلومات المعلم الشخصية</Modal.Title>
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
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                </div>
                <div className='widget-cont'controlId="validationCustom01">
                    <Button onClick={()=>widgetRef.current.open()}>
                        {imgUrl===''?<SlCloudUpload/> :<img src={imgUrl} alt="teacherimg" style={{width:'100%'}}/>}
                    </Button>
                </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>الرقم القومي</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={(e)=>{setNationalId(e.target.value)}}
                    value={nationalId}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>تاريخ الميلاد</Form.Label>
                <Form.Control
                    required
                    type="date"
                    onChange={(e)=>{setDateOfBirth(e.target.value)}}
                    value={dateOfBirth}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>السن</Form.Label>
                <Form.Control
                    required
                    type="number"
                    onChange={(e)=>{setAge(e.target.value)}}
                    value={age}
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
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    type="email"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>رقم الهاتف</Form.Label>
                <Form.Control
                value={phoneNumber}
                onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    required
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>كلمة المرور </Form.Label>
                <Form.Control
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                    required
                    type="password"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
                    required
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>التخصص</Form.Label>
                <Form.Control
                value={role}
                onChange={(e)=>{setRole(e.target.value)}}
                    required
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>المرتب</Form.Label>
                <Form.Control
                value={salary}
                onChange={(e)=>{setSalary(e.target.value)}}
                    required
                    type="number"
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

export default UpdateTeacher