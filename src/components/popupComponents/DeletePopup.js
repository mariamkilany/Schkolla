import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeletePopup(props) {
    const [show, setShow] = useState(false);
    const accessToken = localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const navigate = useNavigate()
const handleDelete=async()=>{
    await axios.delete(`${props.link}${props.id}`,
    { params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} }).then(()=>{
        if(props.link==='teacher/deleteTeacher/')
        navigate(-1)
    })
}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button className={`btn delete-btn bttm ${props.link==='teacher/deleteTeacher/'?'pt-2 btn-danger btn-1 w-100':''}`} onClick={handleShow}>
            حذف 
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>حذف {props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                هل انت متأكد من حذف {props.name} بالكامل؟
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                تراجع
            </Button>
            <Button variant="primary" type="submit" onClick={handleDelete}>
            تأكيد الحذف
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default DeletePopup;