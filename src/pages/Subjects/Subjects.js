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
    const {accessToken} =useContext(AuthContext)
    const id=localStorage.getItem('id')
    
    const handleDelete=async (subjectId)=>{
        axios
        .delete(`subject/deleteSubject/${subjectId}`,{ params: { userId: id } , headers: {authorization : `Bearer ${accessToken}`} })
    }
    useEffect(() => {
    axios
    .get(`subject/getAllSubjects`,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} })
    .then((response) => {
        console.log(response.data)
        setSubjects(response.data)
        ;});}, [subjects,setSubjects,id,accessToken]);
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
