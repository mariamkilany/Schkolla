import './base.css'
import studet from '../../imge/3d-casual-life-girl-and-boy-with-backpack-reading-book.png'
import qr from '../../imge/qr.png'
import report from '../../imge/report.png'
import calender from '../../imge/casual-life-3d-blue-desk-calendar-1.png'
import qustion from '../../imge/qusetion.png'
import app from '../../imge/casual-life-3d-smarphone-display-with-instagram.png'
import info from '../../imge/lumiere-plaque-with-information.png'

    
const Base = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="shap-sec col-md-6">
                    <div className="shape">
                    <img src={studet} alt="student"  className='student-svg'/>
                    </div>
                </div>
                <div className="disciption col-md-6">
                    <h1> Schkolla <span>مرحبا بكم فى</span></h1>
                    <p className='fw-bolder mt-2'>نظام ادارة المدرسة بشكل أسهل</p>
                    <p>نحن نظام ادارة مدسي يتمتع بخصائص فريدة لجعل العمليات التعليمة و الادارية ابسط و تسهيل العمليات اليومية المعقده وفيما يلى ابرز الخدمات المقدمه من النظام</p>
                        <div className="row mt-5 py-5">
                        <div className="col-md-4">
                            <div className="serv bg-white p-3">
                                <img src={qr} alt="qr code" className='w-100' />
                                <h4 className='mt-2'>مسح الكود لاخذ الغياب</h4>
                            </div>
                    </div>
                    <div className="col-md-4">
                            <div className="serv bg-white p-3">
                                <img src={report} alt="report" className='w-100' />
                                <h4 className='mt-5'>تقارير شهرية للمتابعة </h4>
                            </div>
                    </div>
                    <div className="col-md-4">
                            <div className="serv bg-white p-3 pb-4">
                                <img src={calender} alt="calender" className='w-100' />
                                <h4 className='mt-4'>المتابعة فى اخذ الغياب</h4>
                            </div>
                    </div>
                    <div className="col-md-4 mt-3">
                            <div className="serv bg-white p-3 pb-4">
                                <img src={qustion} alt="qustion" className='w-100' />
                                <h4 className='mt-4'>امكانية الاطلاع على الشكاوى</h4>
                            </div>
                    </div>
                    <div className="col-md-4 mt-3">
                            <div className="serv bg-white p-3 ">
                                <img src={app} alt="app" className='w-100' />
                                <h4 className='mt-2'> الاحتواء على انظمة صغرى</h4>
                            </div>
                    </div>
                    <div className="col-md-4 mt-3">
                            <div className="serv bg-white p-3 pb-3">
                                <img src={info} alt="info" className='w-75' />
                                <h4 className='mt-4'>الاطلاع على البيانات</h4>
                            </div>
                    </div>
            </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Base;