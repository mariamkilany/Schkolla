import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import './level.css';

function DeleteLevel() {
    const [show, setShow] = useState(false);
    const[selectdSubjects,setSelectedSubjects]=useState([]);
    const[subject,setSubject]=useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" className='levelbtn' onClick={handleShow}>
            حذف المرحلة
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>حذف المرحلة بالكامل</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                هل انت متأكد من حذف المرحلة بالكامل؟
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                تراجع
            </Button>
            <Button variant="primary" type="submit">
            تأكيد الحذف
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default DeleteLevel;