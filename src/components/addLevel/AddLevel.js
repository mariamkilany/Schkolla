import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import './level.css';

function AddLevel() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const[selectdSubjects,setSelectedSubjects]=useState([]);
    const[subject,setSubject]=useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
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
                    <option value="اللغة العربية">اللغة العربية</option>
                    <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
                    <option value="الرياضيات">الرياضيات</option>
                    <option value="التربية الدينية">التربية الدينية</option>
                    <option value="الدراسات الإجتماعية">الدراسات الإجتماعية</option>
                </Form.Select>
                <Button className='addbtn' variant="primary" onClick={()=>{
                    if(subject!==''&& !selectdSubjects.includes(subject))
                    setSelectedSubjects([...selectdSubjects,subject])
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
                <td><Button variant="danger" onClick={()=>{
                    setSelectedSubjects(selectdSubjects.filter((subj)=>subj!==sub))
                }}>حذف</Button></td>
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