import MoreinfoTeacher from '../../components/Moreinfo/MoreinfoTeacher'
import DeletePopup from '../../components/popupComponents/DeletePopup'
import UpdateTeacher from '../../components/popupComponents/UpdateTeacher';
import './teacher.css'
import axios from 'axios';
import {useEffect, useState } from 'react';
export default function Teacher() {
    const id=localStorage.getItem('id')
    const accessToken=localStorage.getItem('accessToken')
    const[teacherData,setTeacherData]=useState({})
    const teacherId=localStorage.getItem('teacherId')
    useEffect(() => {
    axios.get(`teacher/getTeacher/${teacherId}`,
    {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}})
    .then(
        (response)=>{
            setTeacherData(response.data)
        }
    )
    },[accessToken,id,teacherData,teacherId])
    
    return <>
        <div className="container">
            <div className="row mb-4 teacher-row1 gy-4">
            <div className="col-sm-3 btn-container ">
                    <DeletePopup name={` المعلم / ة ${teacherData.name}`} id={teacherData._id} link={'teacher/deleteTeacher/'} />
                    <UpdateTeacher teacher={teacherData} />
            </div>
                <div className="col-sm-6 d-flex justify-content-center flex-column align-items-end presonal">
                    <h2>{teacherData.name}</h2>
                    <h5>{teacherData.nationalId}</h5>
                </div>
                <div className="col-sm-3 img-cont">
                    <img src={teacherData.imgUrl} alt="teacher_photo" className='photo-cont'/>
                </div>
            </div>
            <div class="d-flex row teacher-row-2 align-items-start gy-4">
                <MoreinfoTeacher props={teacherData}/>
            </div>
        </div>
    </>; 
}