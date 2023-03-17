import Table from 'react-bootstrap/Table';
import"./style.css"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate ,useParams } from 'react-router-dom';
export default function StudentShow(props)
{
    const accessToken = localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const studentId=useRef('');
    const studentName=useRef('')
    const [studentsDate,setstudentsData]=useState([]);
    const regex1=new RegExp(`^${studentId.current.value}`)
    const regex2=new RegExp(`^${studentName.current.value}`)
    const navigate = useNavigate()
    const params =useParams();
    useEffect(()=>{
        axios.get(`student/getClassStudents/${params.classId}`,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} }).then(
        (response)=>{
            setstudentsData(response.data)
            console.log(response)
        }
        )
    },[studentsDate,setstudentsData,id,accessToken])
    const handleClick=(id)=>{
        localStorage.setItem('studentId',id)
        navigate('studentData')
    }
  return<>
        <div className="input-cont row mb-5">
        <input className="col-md-4 search-input" disabled={studentId.current.value!==''?true:false} ref={studentName}  type="search1"  placeholder="البحث بالاسم"/>
        <input  className="col-md-4 search-input"disabled={studentName.current.value!==''?true:false} type="search2" placeholder="البحث بالرقم القومي" ref={studentId} />
        </div>
        <Table striped  hover>
                <thead className="line">
                    <th >الرقم القومى</th>
                    <th>الصورة </th>
                    <th>الاسم </th>
                    <th>النوع </th>
                    <th> اسم ولى الأمر </th>
                    <th> رقم ولى الأمر </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                    { studentId.current.value===''&&studentName.current.value===''? studentsDate.map((data)=>{
                            return(
                        <tr className={`studentImg w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.elWasy}</td>
                            <td>{data.email}</td>
                        </tr>)
                    }):
                    studentId.current.value!==''?
                    studentsDate.map((data)=>{
                        return(
                        <tr className={`studentImg ${!regex1.test(data.nationalId)?'disapear':''} w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.elWasy}</td>
                            <td>{data.email}</td>
                        </tr>
                        )
                    }
                    )
                    :
                    studentsDate.map((data)=>{
                        console.log(data._id)
                        return(
                        <tr className={`teacherImg ${!regex2.test(data.name)?'disapear':''} w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.elWasy}</td>
                            <td>{data.email}</td>
                        </tr>
                        )
                    }
                    )
                }
                </tbody>
            </Table>
    </>
}