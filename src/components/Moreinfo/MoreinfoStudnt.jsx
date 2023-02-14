import React, {useState } from 'react';
import Select from 'react-select'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import './moreinfo.css'
export default function More() {
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

        const handleUpload =() => {
    alert("File uploaded")
        };
return <>
        <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">معلومات شخصية</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">الغياب و الحضور</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">التقارير المدرسية</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">عرض و طباعة الكود </button>
    </div>
<div className='information-container'>
<div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
        <div className="personal-info">
            <h3>تاريخ الميلاد : 2010 - 01 - 12</h3>
            <h3>الجنس : ذكر</h3>
            <h3><span className='mx-5'>المرحلة:    الأولى</span>الفصل: أ</h3>
            <h3> saliem@gmail.com :<span>الإيميل</span></h3>
            <h3>اسم الاب : عبدالسلام جعفر ممدوح</h3>
            <h3>اسم الأم:    ناهد محمد المنصوري</h3>
            <h3>رقم هاتف 1: 0104849370</h3>
            <h3>العنوان : طنطا شارع الفاتح تفرع عمر بن عبد العزيز</h3>
            <h3>وسيلة التنقل : سيارة خاصة</h3>
        </div>
        </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
        <div className="upsent">
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2019-04-02' }
        ]}
    />
        </div>
    </div>
    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
        <div className="report">
            <h3>اختر الشهر</h3>
                <Select 
                closeMenuOnSelect={false}
                options={options} />
            <div className='uplaod'>
            <div className="App">
                <form onSubmit={handleUpload}>
                    <h1 className='mt-5'>Upload a file</h1>
                    <input type="file" />
                    <button type="submit">Upload</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    </div>
</div>
</div>
</>
}