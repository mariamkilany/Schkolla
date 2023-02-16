import MoreinfoTeacher from '../../components/Moreinfo/MoreinfoTeacher'
import AddTeacher from '../../components/popupComponents/AddTeacher';
import teacher from '../../imge/admin.jpg'
import './teacher.css'
import UploadWidget from '../../components/cloudinary/UploadWidget';
export default function Teacher() {
    return <>
        <div className="container">
            <div className="row mb-4 teacher-row1 gy-4">
            <div className="col-sm-3 btn-container">
                    <button className='btn btn-warning btn-1 w-100'>تعديل البيانات</button>
                    <button className='btn btn-danger btn-2 w-100'>حذف من النظام</button>
                </div>
                <div className="col-sm-6 d-flex justify-content-center flex-column align-items-end presonal">
                    <h2>سهيله احمد محمد الجمل</h2>
                    <h5>301047928379</h5>
                </div>
                <div className="col-sm-3 img-cont">
                    <img src={teacher} alt="teacher_photo" className='photo-cont'/>
                </div>
            </div>
            <div class="d-flex row teacher-row-2 align-items-start gy-4">
                <MoreinfoTeacher/>
            </div>
            <AddTeacher/>
        </div>
    </>; 
}