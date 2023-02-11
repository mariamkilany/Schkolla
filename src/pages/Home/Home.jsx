import teachers from '../../imge/teachers.png'
import student from  '../../imge/students.png'
import employee from '../../imge/emolyee.png'
import Slider from '../../components/studentSlider/Slider'
import Donut from '../../components/donutChart/Donut'
import Bar from '../../components/barChart/Bar'
import './home.css'
export default function Home() {
    return <>
    <div className="row mb-5 gy-5 nums-cont">
        <div className="col-md-4 px-5">
            <div className='number-cont py-md-4 py-sm-3 d-flex fs-md-3 '>
            <span  >عدد الطلاب :1000</span>
            <img src={student} alt="student" />
            </div>
        </div>
        <div className="col-md-4 px-5">
            <div className='number-cont py-md-4 py-sm-3 d-flex '>
            <span >عدد المعلمين :250</span>
            <img src={teachers} alt="teachers" />
            </div>
        </div>
        <div className="col-md-4 px-5">
            <div className='number-cont py-md-4 py-sm-3 d-flex '>
            <span >عدد الموظفين:5</span>
            <img src={employee} alt="employee"  />
            
            </div>
        </div>        
    </div>
    <div className="row mt-5">
        <div className="col-lg-7 py-5 mt-5 slider-cont">
            <Slider/>
        </div>
        {/* <div className='col-md-1'></div> */}
        <div className="col-lg-5 col-md-8  py-5 mt-5 dounat-cont">
            <Donut/>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg-6 col-md-10 bar-cont">
            <Bar/>
        </div>
        <div className="col-md-6 py-5 mt-5">
            ااااااااااااااه يانى
        </div>
    </div>

    </>;
}