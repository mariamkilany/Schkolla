import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddSubject from '../../components/popupComponents/AddSubject'
import { Button ,Table } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loading from '../Loading/Loading'
import './subjects.css'
import useAxios from '../../hooks/useAxios';
function Subjects() {
    // const handleDelete=async (subjectId)=>await axios.delete(`subject/deleteSubject/${subjectId}`)
    const handleDelete=(subjectId)=>{
        fetchData('delete',`subject/deleteSubject/${subjectId}`)
    }
    const { fetchData,data:subjects , loading} = useAxios()
    // console.log(data , 'subjects')
    useEffect(() => {
    fetchData('get','subject/getAllSubjects')
    }
    ,[]);
    if(loading) <Loading/>
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
            <TransitionGroup component="tbody">
                {subjects&&subjects?.map((subject,index)=><CSSTransition key={subject.id} timeout={700} classNames="sub">
                    <tr key={index} className={`w3-center w3-animate-left`}>
                    <td><Button variant="danger" onClick={()=>{handleDelete(subject._id)}}>حذف</Button></td>
                    <td>{subject.name}</td>
                    </tr>
                </CSSTransition>)}
            </TransitionGroup>
        </Table>
        </>
    )
}

export default Subjects
