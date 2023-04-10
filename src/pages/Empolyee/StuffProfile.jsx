import MoreinfoStuff from '../../components/Moreinfo/MoreInfoStuff';
import DeletePopup from '../../components/popupComponents/DeletePopup'
import UpdateTeacher from '../../components/popupComponents/UpdateTeacher';
import './teacher.css'
import axios from 'axios';
import {useEffect, useState } from 'react';
export default function StuffProfile() {
    const id=localStorage.getItem('id')
    const accessToken=localStorage.getItem('accessToken')
    const[stuffData,setStuffData]=useState({})
    const stuffId=localStorage.getItem('stuffId')
    useEffect(() => {
    axios.get(`security_man/getSecurityMemberById/${stuffId}`,
    {params: { userId: id } ,headers: {'Authorization': `Bearer ${accessToken}`, withCradintials : true}})
    .then(
        (response)=>{
            setStuffData(response.data)
        }
    )
    },[accessToken,id,stuffData,stuffId])
    
    return <>
        <div className="container">
            <div className="row mb-4 teacher-row1 gy-4">
            <div className="col-sm-3 btn-container ">
                    <DeletePopup name={` المعلم / ة ${stuffData.name}`} id={stuffData._id} link={'security_man/deleteSecurityMember/'} />
                    <UpdateTeacher teacher={stuffData} />
            </div>
                <div className="col-sm-6 d-flex justify-content-center flex-column align-items-end presonal">
                    <h2>{stuffData.name}</h2>
                    <h5>{stuffData.nationalId}</h5>
                </div>
                <div className="col-sm-3 img-cont">
                    <img src={stuffData.imgUrl} alt="teacher_photo" className='photo-cont'/>
                </div>
            </div>
            <div class="d-flex row teacher-row-2 align-items-start gy-4">
                <MoreinfoStuff props={stuffData}/>
            </div>
        </div>
    </>
}