import React, { useState , useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { PopupsContext } from './PopupContext';
import './popup.css';

function AddClass() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const{selectdSubjects,teachersForSubDidpatch}=useContext(PopupsContext)

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
        إضافة فصل جديد
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>إضافة فصل جديد</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01" >
                <Form.Label>إسم الفصل </Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="مثال : أ"
                    autoFocus
                />
                </Form.Group>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>المعلم</th>
                                <th>المواد المسجلة</th>
                            </tr>
                        </thead>
                        <tbody>
            {selectdSubjects.map((sub)=>{
                return (
            <tr key={sub}>
                <td>
                    <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Select required onChange={(e)=>teachersForSubDidpatch({type:'ADD TEACHER',newPair:{teacher:e.target.value,subject:sub}})}>
                        <option value=''>اختر معلم المادة</option>
                        <option value="أحمد عبد الجليل">أحمد عبد الجليل</option>
                        <option value="فتحي المسلماني">فتحي المسلماني</option>
                        <option value="عبير عبد العاطي">عبير عبد العاطي</option>
                        <option value="سليمان الدمشقي">سليمان الدمشقي</option>
                        <option value="رأفت الهجان">رأفت الهجان</option>
                    </Form.Select>
                    </Form.Group>
                </td>
                <td>{sub}</td>
            </tr>
            )
            })}
        </tbody>
    </Table>
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

export default AddClass;