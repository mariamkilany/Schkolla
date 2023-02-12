import React, { useState ,useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './popup.css';
import AuthContext from "../shared/AuthContext";
import axios from 'axios';
import jwtInterceptor from '../../helpers/jwtInterceptor';
import { PopupsContext } from './PopupContext';

function AddSubject() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const subject=useRef();
    const {accessToken} =useContext(AuthContext)
    const id=localStorage.getItem('id')
    const {subjects,setSubjects}=useContext(PopupsContext)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit =async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    await axios.post('subject/addSubject',{name:subject.current.value},
    {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}})
    .then(handleClose)
    };
    return (
        <>
        <Button variant="primary" className='levelbtn' onClick={handleShow}>
        إضافة مادة دراسية
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>إضافة مادة جديدة</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>إسم المادة</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="مثال : اللغة العربية"
                    autoFocus
                    ref={subject}
                />
                </Form.Group>
                
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                إغلاق
            </Button>
            <Button variant="primary" type="submit" onClick={ (e)=>{handleSubmit(e)}}>
                إضافة
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AddSubject;
