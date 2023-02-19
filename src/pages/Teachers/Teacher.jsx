import MoreinfoTeacher from '../../components/Moreinfo/MoreinfoTeacher'
import AddTeacher from '../../components/popupComponents/AddTeacher';
import teacher from '../../imge/admin.jpg'
import './teacher.css'
import UploadWidget from '../../components/cloudinary/UploadWidget';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../components/ShowData/ShowDataContext';
export default function Teacher() {
    const id=localStorage.getItem('id')
    const accessToken=localStorage.getItem('accessToken')
    const[teacherData,setTeacherData]=useState({})
    // const {setTeacherShowId,teacherShowId}=useContext(DataContext)
    const teacherId=localStorage.getItem('teacherId')
    useEffect(() => {
        // console.log(teacherShowId)
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
                    <button className='btn btn-warning btn-1 w-100'>تعديل البيانات</button>
                    <button className='btn btn-danger btn-2 w-100'>حذف من النظام</button>
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