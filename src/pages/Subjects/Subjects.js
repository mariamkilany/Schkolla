import axios from 'axios';
import React, { useEffect, useState  ,useCallback} from 'react'
import AddSubject from '../../components/popupComponents/AddSubject'
import { Button ,Table } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loading from '../Loading/Loading'
import './subjects.css'
import useAxios from '../../hooks/useAxios';
function Subjects() {
    const accessToken = localStorage.getItem('accessToken')
    const id=localStorage.getItem('id')
    // const [subjects,setSubjects] = useState([])
    const handleDelete=useCallback( async(subjectId)=>{
        fetchData('delete',`subject/deleteSubject/${subjectId}`)
        // await axios.delete(`subject/deleteSubject/${subjectId}`,{ params: { userId: id } , headers: {authorization : `Bearer ${accessToken}`} })
    } 
    , []);
    const { fetchData,data:subjects , loading} = useAxios()
    // console.log("subjects:",subjects)
    useEffect(() => {
    fetchData('get','subject/getAllSubjects')
    // axios.get('subject/getAllSubjects',{ params: { userId: id } , headers: {authorization : `Bearer ${accessToken}`} }).then((res)=>{
    //     setSubjects(res.data)
    // })
    }
    ,[handleDelete]);
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
