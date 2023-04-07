import MoreinfoStudent from '../../components/Moreinfo/MoreinfoStudnt'
import DeletePopup from '../../components/popupComponents/DeletePopup'
import UpdateTeacher from '../../components/popupComponents/UpdateTeacher';
import './student.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useEffect, useState } from 'react';
export default function ShowStudent() {
    const id=localStorage.getItem('id')
    const accessToken=localStorage.getItem('accessToken')
    const[studentData,setStudentData]=useState({})
    const params = useParams()
    useEffect(() => {
    axios.get(`student/getStudentById/${params.stuId}`,{params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}})
    .then(
        (response)=>{
            setStudentData(response.data)
        }
    )
    },[accessToken,id,studentData,params.stuId])
    
    return <>
        <div className="container">
            <div className="row mb-4 teacher-row1 gy-4">
            <div className="col-sm-3 btn-container ">
                    <DeletePopup name={` المعلم / ة ${studentData.name}`} id={studentData._id} link={'teacher/deleteTeacher/'} />
                    <UpdateTeacher teacher={studentData} />
            </div>
                <div className="col-sm-6 d-flex justify-content-center flex-column align-items-end presonal">
                    <h2>{studentData.name}</h2>
                    <h5>{studentData.nationalId}</h5>
                </div>
                <div className="col-sm-3 img-cont">
                    <img src={studentData.imgUrl} alt="teacher_photo" className='photo-cont'/>
                </div>
            </div>
            <div class="d-flex row teacher-row-2 align-items-start gy-4">
                <MoreinfoStudent props={studentData}/>
            </div>
        </div>
    </>; 
}