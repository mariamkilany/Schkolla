import React, { useState ,useRef ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {SlCloudUpload} from 'react-icons/sl'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './popup.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const AddStudent = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const accessToken = localStorage.getItem('accessToken')
    const id=localStorage.getItem('id')

    const name = useRef(null);
    const password = useRef(null);
    const nationalId = useRef(null);
    const dateOfBirth = useRef(null);
    const age = useRef(null);
    const [gender,setSelected] = useState('ذكر');
    const email = useRef(null);
    const address = useRef(null);
    const stage = useRef(null);
    const clss = useRef(null);
    // const relation = useRef(null)
    // const relationName = useRef(null)
    // const phoneNumber = useRef(null)
    const [relation,setRelation]=useState('')
    const [relationName,setRelationName]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [contacts,setContacts] = useState([])
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
    const AddContact = ()=>{
        if(relation!==''&&phoneNumber!==''&&relationName!==''){
            setContacts([...contacts,{relation,phoneNumber,relationName}])
            setRelation('');
            setRelationName('');
            setPhoneNumber('');
        }
    }
    const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    console.log({name:name.current.value,age:age.current.value,nationalId:nationalId.current.value,
        dateOfBirth:dateOfBirth.current.value,gender:gender,email:email.current.value,address:address.current.value,stage:stage.current.value,class:clss.current.value,imgUrl:imgUrl,password:password.current.value})
    await axios.post('student/addStudent',{name:name.current.value,age:age.current.value,nationalId:nationalId.current.value,
        dateOfBirth:dateOfBirth.current.value,gender:gender,email:email.current.value,address:address.current.value,stage:stage.current.value,class:clss.current.value,imgUrl:imgUrl,password:password.current.value,elWasy:contacts,meanOfTransport:''}).then(()=>{
        name.current.value=null;
        email.current.value=null;
        nationalId.current.value=null;
        dateOfBirth.current.value=null;
        age.current.value=null;
        setSelected(null);
        address.current.value=null;
        stage.current.value=null;
        clss.current.value=null;
        setImageUrl('');
        handleClose();
    })
    };
    return (
        <>
        <Button variant="primary" className='levelbtn mt-5' onClick={handleShow}>إضافة طالب جديد</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>معلومات الطالب الشخصية</Modal.Title>
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
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>كلمة المرور </Form.Label>
                <Form.Control
                ref={password}
                    required
                    type="password"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                ref={address}
                    required
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>المرحلة</Form.Label>
                <Form.Control
                ref={stage}
                    required
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>الفصل</Form.Label>
                <Form.Control
                ref={clss}
                    required
                    type="text"
                />
                </Form.Group>
                <div className='d-flex mb-5 justify-content-between' style={{height:"50px"}}>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>صلة القرابة</Form.Label>
                <Form.Control
                onChange={(e)=>setRelation(e.target.value)}
                    required
                    value={relation}
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>رقم الموبايل</Form.Label>
                <Form.Control
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    required
                    value={phoneNumber}
                    type="text"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>الاسم </Form.Label>
                <Form.Control
                    onChange={(e)=>setRelationName(e.target.value)}
                    required
                    value={relationName}
                    type="text"
                />
                </Form.Group>
                </div>
                <Button variant='primary' onClick={AddContact} className='mb-5'>
                أضافة جهة اتصال
                </Button>
            </Form>
            <Table striped bordered hover>
        <thead>
            <tr>
            <th>حذف</th>
            <th>صلة القرابة</th>
            <th>رقم الموبايل</th>
            <th>الإسم</th>
            </tr>
        </thead>
        <tbody>
        {contacts.map(({phoneNumber,relationName,relation})=>{
            return(
                <tr>
                    <td><Button variant='danger'>حذف</Button></td>
                    <td>{relation}</td>
                    <td>{phoneNumber}</td>
                    <td>{relationName}</td>
                </tr>
            )
        })}
        </tbody>
        </Table>
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

export default AddStudent