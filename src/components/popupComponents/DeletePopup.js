import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css';
import axios from 'axios';

function DeleteLevel(props) {
    const [show, setShow] = useState(false);
    const accessToken = localStorage.getItem('accessToken');
const id=localStorage.getItem('id');
const handleDelete=async()=>{
    await axios.delete(`grade/deleteGrade/${props.id}`,
    { params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} })
}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" className='btn delete-btn bttm pt-2' onClick={handleShow}>
            حذف 
        </Button>
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

export default DeleteLevel;