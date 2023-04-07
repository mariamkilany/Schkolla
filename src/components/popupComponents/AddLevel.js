import React, { useState ,useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { PopupsContext } from './PopupContext';
import './popup.css';
import axios from 'axios'

function AddLevel() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    // const[selectdSubjects,setSelectedSubjects]=useState([]);
    const{selectdSubjects,selectdSubjectsDispatch}=useContext(PopupsContext)
    const[subject,setSubject]=useState('');
    const [subjects,setSubjects]=useState([]);
    const [subjectsIds,setSubjectsIds]=useState([])
    const name=useRef(null);
    const accessToken =localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    useEffect(()=>{
        axios.get(`subject/getAllSubjects`
    ,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} })
    .then((response) =>setSubjects(response.data))
    },[])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    await axios.post('grade/addGrade',{name:name.current.value,subjects:subjectsIds},
    {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`}})
    .then(()=>{
        handleClose();
        setSubjects([]);
        setSubjectsIds([]);
        selectdSubjectsDispatch({action:'CLEAR'})
    })
    setValidated(true);
    };
    return (
        <>
        <Button variant="primary" className='levelbtn' onClick={handleShow}>
        إضافة مرحلة دراسية
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>إضافة مرحلة جديدة</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>إسم المرحلة الدراسية</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="مثال : الاولى"
                    ref={name}
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>إضافة مواد</Form.Label>
                <Form.Select required onChange={(e)=>setSubject(e.target.value)}>
                    <option value=''>اختر مادة</option>
                    {subjects.map((sub)=>{
                        return (
                            <option value={sub.name+"  "+sub._id} key={sub._id}>
                                {sub.name}
                            </option>
                        )
                    })}
                </Form.Select>
                    <Button className='addbtn' variant="primary" onClick={()=>{
                        var subname= subject.split("  ")[0]
                        var subid = subject.split("  ")[1]
                        selectdSubjectsDispatch({type:'ADD SUBJECT',newSubject:subname})
                        if(!subjectsIds.includes(subid))
                        setSubjectsIds([...subjectsIds,subid])
                        }}>إضافة</Button>
                </Form.Group>
            </Form>
            {(selectdSubjects && selectdSubjects.length)?
            <Table striped bordered hover>
        <thead>
            <tr>
            <th>حذف</th>
            <th>المواد المسجلة</th>
            </tr>
        </thead>
        <tbody>
            {selectdSubjects.map((sub)=>{
                return (
            <tr key={sub}>
                <td><Button variant="danger" onClick={
                    ()=>selectdSubjectsDispatch({type:'DELETE SUBJECT',deletedSubject:sub})}>حذف</Button>
                </td>
                <td>{sub}</td>
            </tr>
            )
            })}
        </tbody>
    </Table>:''}
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

export default AddLevel;