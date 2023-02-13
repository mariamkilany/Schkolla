import MoreinfoTeacher from '../../components/Moreinfo/MoreinfoTeacher'
import teacher from '../../imge/admin.jpg'
import './teacher.css'
export default function Teacher() {
    return <>
        <div className="container">
            <div className="row mb-4">
            <div className="col-md-3 btn-container">
                    <button className='btn btn-warning btn-1'>تعديل البيانات</button>
                    <button className='btn btn-danger btn-2 '>حذف من النظام</button>
                </div>
                <div className="col-md-6 d-flex justify-content-center flex-column align-items-end presonal">
                    <h2>سهيله احمد محمد الجمل</h2>
                    <h5>301047928379</h5>
                </div>
                <div className="col-md-3">
                    <img src={teacher} alt="teacher_photo" className='photo-cont'/>
                </div>
            </div>
            <MoreinfoTeacher/>
        </div>
    
    </>; 
}