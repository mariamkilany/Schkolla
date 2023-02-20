import Table from 'react-bootstrap/Table';
import"./style.css"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function TeacherShow() {
    const accessToken = localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const teacherId=useRef('');
    const teacherName=useRef('')
    const [teachersDate,setTeachersData]=useState([]);
    const regex1=new RegExp(`^${teacherId.current.value}`)
    const regex2=new RegExp(`^${teacherName.current.value}`)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`teacher/getAllTeachers`,{ params: { userId: id } , headers: {authorization: `Bearer ${accessToken}`} }).then(
        (response)=>{
            setTeachersData(response.data)
        }
        )
    },[teachersDate,setTeachersData,id,accessToken])
    const handleClick=(id)=>{
        localStorage.setItem('teacherId',id)
        navigate('teacherData')
    }
    return (
        <>
        <div className="input-cont row mb-5">
        <input className="col-md-4 search-input" disabled={teacherId.current.value!==''?true:false} ref={teacherName}  type="search1"  placeholder="البحث بالاسم"/>
        <input  className="col-md-4 search-input"disabled={teacherName.current.value!==''?true:false} type="search2" placeholder="البحث بالرقم القومي" ref={teacherId} />
        </div>
        <Table striped  hover>
                <thead className="line">
                    <th >الرقم القومي</th>
                    <th>الصورة </th>
                    <th>الاسم </th>
                    <th>النوع </th>
                    <th> التخصص </th>
                    <th> رقم الهاتف </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                    { teacherId.current.value===''&&teacherName.current.value===''? teachersDate.map((data)=>{
                            return(
                        <tr className={`teacherImg w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>)
                    }):
                    teacherId.current.value!==''?
                    teachersDate.map((data)=>{
                        return(
                        <tr className={`teacherImg ${!regex1.test(data.nationalId)?'disapear':''} w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>
                        )
                    }
                    )
                    :
                    teachersDate.map((data)=>{
                        console.log(data._id)
                        return(
                        <tr className={`teacherImg ${!regex2.test(data.name)?'disapear':''} w3-center w3-animate-left`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gender}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>
                        )
                    }
                    )
                }
                </tbody>
            </Table>
        </>

    );
}
