import teachers from '../../imge/teachers.png'
import student from  '../../imge/students.png'
import employee from '../../imge/emolyee.png'
import Slider from '../../components/studentSlider/Slider'
import Donut from '../../components/donutChart/Donut'
import Bar from '../../components/barChart/Bar'
import './home.css'
export default function Home() {
    return <>
    <div className="row mb-5">
        <div className="col-sm-4 px-5">
            <div className='number-cont py-3 d-flex '>
            <span >عدد الطلاب :1000</span>
            <img src={student} alt="student" className='w-25' />
            </div>
        </div>
        <div className="col-sm-4 px-5">
            <div className='number-cont py-3 d-flex '>
            <span >عدد المعلمين :250</span>
            <img src={teachers} alt="teachers"className='w-25' />
            </div>
        </div>
        <div className="col-sm-4 px-5">
            <div className='number-cont py-3 d-flex '>
            <span >عدد الموظفين:5</span>
            <img src={employee} alt="employee" className='w-25' />
            </div>
        </div>        
    </div>
    <div className="row mt-5">
        <div className="col-sm-8 py-5 mt-5">
            <Slider/>
        </div>
        {/* <div className='col-sm-1'></div> */}
        <div className="col-sm-4 py-5 mt-5 dounat-cont">
            <Donut/>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-sm-6 py-5 mt-5">
            <Bar/>
        </div>
        <div className="col-sm-6 py-5 mt-5">
            ااااااااااااااه يانى
        </div>
    </div>

    </>;
}