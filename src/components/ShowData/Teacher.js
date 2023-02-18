
import TeacherData from "./TeacherData";
import Button from 'react-bootstrap/Button';
import"./style.css"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function TeacherShow() {
    const accessToken = localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const teacherId=useRef('');
    const [teachersDate,setTeachersData]=useState([]);
    useEffect(()=>{
        axios.get(`teacher/getAllTeachers`,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} }).then(
        (response)=>{
            setTeachersData(response.data)
        }
        )
    },[teachersDate,setTeachersData,id,accessToken])

    return (
        <>
        <input type="search1" placeholder="البحث بالاسم"/>
        <input type="search2" placeholder="البحث بالرقم القومي" ref={teacherId} />
            <table>
                <thead className="line">
                    <th>الرقم القومي</th>
                    <th>الصورة </th>
                    <th>الاسم </th>
                    <th>النوع </th>
                    <th> التخصص </th>
                    <th> رقم الهاتف </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                    { teacherId.current.value===''? teachersDate.map((data)=>{
                            return(
                        <tr className={`teacherImg`}>
                            <td>{data._id}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gendre}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>)
                    }):
                    teachersDate.map((data)=>
                        <tr className={`teacherImg ${teacherId.current.value!==data._id?'disapear':''}`}>
                            <td>{data._id}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gendre}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>

    );
}
