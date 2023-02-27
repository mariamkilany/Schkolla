import React, { useState , useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { PopupsContext } from './PopupContext';
import axios from 'axios';
import './popup.css';

function AddClass(props) {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [className ,setClassName]=useState('');
    const [subjects,setSubjects]=useState([]);
    const gradeId=props.gradeId;
    const [teachers,setTeachers]=useState([]);
    const accessToken =localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');

    // const{selectdSubjects,teachersForSubDidpatch}=useContext(PopupsContext)

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    };
    useEffect(
        ()=>{axios.get('teacher/getAllTeacherNamesWithIds', 
        {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}})
        .then((res)=>{
            setTeachers(res.data)
            handleClose();
            console.log(res.data);
        }
        )
            axios.get(`grade/getGradeSubjects/${gradeId}`, 
        {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}})
        .then((res)=>{
            setSubjects(res.data.subjects)
            handleClose();
            console.log(res.data);
        }
        )
    }
        ,[])
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
            {subjects.map((sub,index)=>{
                return (
            <tr key={index}>
                <td>
                    <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Select required >
                        <option value=''>اختر معلم المادة</option>
                        {teachers.map((teacher,index)=>{
                            console.log(teacher)
                            return(
                                <option value={teacher.name} key={index}>{teacher.name}</option>
                            )
                            })}
                        
                        {/* <option value="أحمد عبد الجليل">أحمد عبد الجليل</option>
                        <option value="فتحي المسلماني">فتحي المسلماني</option>
                        <option value="عبير عبد العاطي">عبير عبد العاطي</option>
                        <option value="سليمان الدمشقي">سليمان الدمشقي</option>
                        <option value="رأفت الهجان">رأفت الهجان</option> */}
                    </Form.Select>
                    </Form.Group>
                </td>
                <td>{sub.name}</td>
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