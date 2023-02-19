
import TeacherData from "./TeacherData";
import Table from 'react-bootstrap/Table';
import"./style.css"
import { useEffect, useRef, useState ,useContext} from "react";
import axios from "axios";
import { useNavigate ,useLocation} from 'react-router-dom';
import { DataContext } from '../../components/ShowData/ShowDataContext';
import { Navigate } from "react-router-dom";
export default function TeacherShow() {
    const accessToken = localStorage.getItem('accessToken');
    const id=localStorage.getItem('id');
    const teacherId=useRef('');
    const teacherName=useRef('')
    const [teachersDate,setTeachersData]=useState([]);
    // const {setTeacherShowId}=useContext(DataContext)
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
        <input className="col-md-4" disabled={teacherId.current.value!==''?true:false} ref={teacherName}  type="search1"  placeholder="البحث بالاسم"/>
        <input  className="col-md-4"disabled={teacherName.current.value!==''?true:false} type="search2" placeholder="البحث بالرقم القومي" ref={teacherId} />
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
                        <tr className={`teacherImg`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gendre}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>)
                    }):
                    teacherId.current.value!==''?
                    teachersDate.map((data)=>
                        <tr className={`teacherImg ${teacherId.current.value!==data.nationalId?'disapear':''}`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gendre}</td>
                            <td>{data.role}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                        </tr>
                    )
                    :
                    teachersDate.map((data)=>{
                        console.log(data._id)
                        return(
                        <tr className={`teacherImg ${!(teacherName.current.value).includes(data.name)?'disapear':''}`} 
                        onClick={()=>handleClick(data._id)}>
                            <td>{data.nationalId}</td>
                            <td><img src={data.imgUrl}alt={"name"} /></td>
                            <td>{data.name}</td>
                            <td>{data.gendre}</td>
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
