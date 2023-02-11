import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AddSubject from '../../components/popupComponents/AddSubject'
import AuthContext from "../../components/shared/AuthContext";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import jwtInterceoptor from '../../helpers/jwtInterceptor';
import './subjects.css'
import { PopupsContext } from '../../components/popupComponents/PopupContext';
function Subjects() {
    const{subjects,setSubjects}=useContext(PopupsContext)
    const {user} =useContext(AuthContext)
    const handleDelete=async (subjectId)=>{
        jwtInterceoptor
        .delete(`https://h1.publisher-hub.com/v1/subject/deleteSubject/${subjectId}`,{ params: { userId: user.id } , headers: {Authorization : `Bearer ${user.accessToken}`, withCradintials : true} })
    }
    useEffect(() => {
    jwtInterceoptor
    .get(`https://h1.publisher-hub.com/v1/subject/getAllSubjects`,{ params: { userId: user.id } , headers: {Authorization: `Bearer ${user.accessToken}`, withCradintials : true} })
    .then((response) => {
        setSubjects(response.data)
        ;});}, [subjects]);
    return (
        <>
        <div className="row sub-cont">
            <AddSubject/>
        </div>
        <Table className='sub-table'>
            <thead>
                <tr>
                    <th>حذف</th>
                    <th>المواد المسجلة</th>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject,index)=>{
                    return <tr key={index}>
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
