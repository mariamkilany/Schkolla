import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AddSubject from '../../components/popupComponents/AddSubject'
import AuthContext from "../../components/shared/AuthContext";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const {user} =useContext(AuthContext)
    const handleDelete=async (subjectId)=>{
        axios.delete(`https://h1.publisher-hub.com/v1/subject/deleteSubject/${subjectId}`,{ params: { userId: user.id } , headers: {'Authorization': `Bearer ${user.accessToken}`} })
    }
    useEffect(() => {
    axios
    .get(`https://h1.publisher-hub.com/v1/subject/getAllSubjects`,{ params: { userId: user.id } , headers: {'Authorization': `Bearer ${user.accessToken}`} })
    .then((response) => {
        setSubjects(response.data);});}, [subjects]);
    return (
        <>
        <AddSubject/>
        {/* {subjects.map((item) =><div>{item.name}</div>)} */}
        <Table>
            <thead>
                <tr>
                    <th>حذف</th>
                    <th>المواد المسجلة</th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject)=>{
                    // console.log(subject._id)
                    return <tr key={subject._id}>
                    <td><Button variant="danger" onClick={()=>handleDelete(subject._id)}>حذف</Button></td>
                    <td>{subject.name}</td>
                    </tr>
                })}
            </tbody>
        </Table>
        </>
    )
}

export default Subjects
