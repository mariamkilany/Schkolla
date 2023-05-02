import React, { useEffect, useState,useContext } from 'react'
import './table.css'
import TableSetting from '../popupComponents/TableSetting'
import BtnPop from '../popupComponents/BtnPop'
import AuthContext from '../shared/AuthContext';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Loading from '../../pages/Loading/Loading'
import { useRef } from 'react';
import AddTableCell from '../popupComponents/AddTableCell';
import UpdateTableCell from '../popupComponents/UpdateTableCell';
import { Button } from 'react-bootstrap';
function tConvert (time) {
// Check correct time format and split into components
time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
  return time.join (''); // return adjusted time or original string
}

function addMinutes(time, minsToAdd) {
    function D(J){ return (J<10? '0':'') + J;};
    var piece = time.split(':');
    var mins = piece[0]*60 + +piece[1] + +minsToAdd;

    return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
} 

function TimeTable({subjectToTeacher}) {
    const{refresh ,setref}=useContext(AuthContext)
    const [cells,setCells]=useState([])
    const {fetchData,data:conf,loading}=useAxios()
    const [config,setConfig] = useState({})
    const params=useParams()
    let color =localStorage.getItem('stagecolor');
    if(color==='green'){
        color='#63D0B4';
    }else if(color==='pink'){
        color='#FDBAB1';
    }else if(color==='blue'){
        color='#254C71';
    }
    const time = useRef([])
    const finalTime = useRef(null)
    
    useEffect(()=>{
        fetchData('get',`tableCellRouter/getWeekTableById/${params.classId}`)
    .then((res)=>{
        setConfig(res)
        for(let i=0;i<res.lessonNum;i++){
            if(i===0){
                time.current[i]=`${tConvert(res.startTime)} - ${tConvert(addMinutes(res.startTime,res.duration))}`
                finalTime.current=addMinutes(res.startTime,res.duration)
            }
            else{
                time.current[i]=`${tConvert(finalTime.current)} - ${tConvert(addMinutes(finalTime.current,res.duration))}`
                finalTime.current=addMinutes(finalTime.current,res.duration)
            }
        }
        }
    )
    fetchData('get',`tableCellRouter/getCellsInTableByClassId/${params.classId}`).then((res)=>{
        setCells(res)
    })
    fetchData('get',`tableCellRouter/getCellInTheTableById/${params.classId}`).then(res=>{
        console.log(res , 'hereeee')
    })
}
    ,[refresh])

    const handleDelete=async(id,link)=>{
        fetchData('delete',`tableCellRouter/${link}/${id}`).then(
        ()=> {
            setref(!refresh)
        })};

    const days = ['السبت','الأحد' ,'الإثنين' ,'الثلاثاء','الأربعاء','الخميس','الجمعة']
    // if(loading)
    // return <Loading/>
return (
<div className="container">
        {
            config?
            <>
            <div className="timetable-img text-center">
                    <img src="img/content/timetable.png" alt="" />
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered timetable text-center">
                    {                        
                        <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">الوقت
                                </th>
                                {
                                    time.current.map(curr=><th className="text-uppercase">{curr}</th>)
                                }
                            </tr>
                        </thead>
                    }
                        <tbody>
                        {
                            Array.from({length:config?.lastDay - config?.firstDay +1},(_,index1)=>{
                                return(
                                    <tr>
                                    <th className="align-middle bg-light-gray" >
                                    {
                                        // time.current[index1]
                                        days[index1+config?.firstDay]
                                    }
                                    </th>
                                {
                                    cells.map(cell=>{
                                        if(cell.day===index1+config?.firstDay)
                                        return(
                                            <td className='w3-center w3-animate-left'>
                                            <span style={{backgroundColor:color}} className=" table-sub padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">
                                            {cell.subject}
                                            </span>
                                            <div className="font-size13 text-light-gray">{cell.teacher}</div>
                                            <UpdateTableCell subjectToTeacher={subjectToTeacher} cellData={cell} />
                                            <Button variant="danger" className='table-pop' onClick={()=>{handleDelete(cell._id,'deleteCellById')}}>حذف</Button>
                                            </td>
                                        )
                                    })
                                }
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <Button variant="danger" style={{marginRight: "10px"}} onClick={()=>{handleDelete(config._id ,'deleteWeekTableById')}}>حذف الجدول بالكامل</Button>
                    <AddTableCell subjectToTeacher={subjectToTeacher} />
                </div>
                </>
            :
            <>
            <TableSetting/>
            </>
        }
            </div>
  )
}

export default TimeTable
// <td>
//                                     <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Dance</span>
//                                     <div className="margin-10px-top font-size14">9:00-10:00</div>
//                                     <div className="font-size13 text-light-gray">Ivana Wong</div>
//                                 </td>
//                                 <td>
//                                     <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
//                                     <div className="margin-10px-top font-size14">9:00-10:00</div>
//                                     <div className="font-size13 text-light-gray">Marta Healy</div>
//                                 </td>

//                                 <td>
//                                     <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Music</span>
//                                     <div className="margin-10px-top font-size14">9:00-10:00</div>
//                                     <div className="font-size13 text-light-gray">Ivana Wong</div>
//                                 </td>
//                                 <td>
//                                     <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Dance</span>
//                                     <div className="margin-10px-top font-size14">9:00-10:00</div>
//                                     <div className="font-size13 text-light-gray">Ivana Wong</div>
//                                 </td>
//                                 <td>
//                                     <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Art</span>
//                                     <div className="margin-10px-top font-size14">9:00-10:00</div>
//                                     <div className="font-size13 text-light-gray">Kate Alley</div>
//                                 </td>
//                                 <td>
//                                     <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">English</span>
//                                     <div className="margin-10px-top font-size14">9:00-10:00</div>
//                                     <div className="font-size13 text-light-gray">James Smith</div>
//                                 </td>