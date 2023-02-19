import React, {useState } from 'react';
import Select from 'react-select'
import './moreinfo.css'

export default function MoreinfoTeacher(props) {
    const teacherData=props.props
    const options = [
        { value: 'January ', label: 'يناير ' },
        { value: 'February', label: 'فبراير ' },
        { value: 'March ', label: 'مارس' },
        { value: 'April ', label: 'أبريل' },
        { value: 'May', label: 'مايو' },
        { value: 'June ', label: 'يونيو' },
        { value: 'July ', label: 'يوليو' },
        { value: 'August ', label: 'أغسطس' },
        { value: 'September ', label: 'سبتمبر' },
        { value: 'October ', label: 'أكتوبر' },
        { value: 'November', label: 'نوفمبر' },
        { value: 'December', label: 'ديسمبر' }
    ]
return <>
        <div class="nav nav-teacher flex-column nav-pills me-3 w-25 h-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">معلومات شخصية</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">المراحل و الصفوف</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">جدول الحصص</button>
    </div>
<div className='information-container h-100'>
<div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
        <div className="personal-info">
            <h3>تاريخ الميلاد : <span>{teacherData.dateOfBirth}</span></h3>
            <h3>السن: {teacherData.age}</h3>
            <h3>الجنس : {teacherData.gender}</h3>
            <h3> {teacherData.email} :<span>الإيميل</span></h3>
            <h3>رقم هاتف :{teacherData.phoneNumber}</h3>
            <h3>العنوان :{teacherData.address}</h3>
            <h3>التخصص: {teacherData.role} </h3>
            <h3>المرتب: {teacherData.salary} ج</h3>
        </div>
        </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                jnkkj
    </div>
    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
        <div className="report">
            <h3>اختر الشهر</h3>
                <Select 
                closeMenuOnSelect={false}
                options={options} />
            </div>
        </div>
    </div>
    </div>
</>
}
