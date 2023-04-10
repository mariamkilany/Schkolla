import React, { useState } from 'react'
import './table.css'
import TableSetting from '../popupComponents/TableSetting'
import BtnPop from '../popupComponents/BtnPop'
function TimeTable() {
    const config = {
        duration : "00:45",
        lessonNum:3,
        daysNum:5,
        startTime : "07:00",
        endTime : "12:00",
        firstDay:1,
        lastDay:5
    }
    const timeConverter = (time) =>{
        return parseInt(time.split(':')[0]*60)+parseInt(time.split(':')[1])
    }
    const timeReconverter = (time)=>{
        // setTime(time+duration)
        const hours = parseInt(time/60);
        const min = time - (hours*60);
        return `${hours}:${min}`
    } 
    var time=timeConverter(config.startTime)
    const [duration , setDuration ] = useState(timeConverter(config.duration))
    var timeArr = []
    for(let i = 0 ; i<config.lessonNum;i++){
        if(i===0)
        timeArr[i]=time
        else{
        timeArr[i]=time+duration;
        time+=duration
        }
    }

    const data = [
        [
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ],
        [
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ],
        [
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ]
        ,
    [
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ]
        ,[
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ],
        [
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ],
        [
            {
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            },{
                teacherName:"عبد الفتاح",
                subject:"لغة عربية"
            }
        ]
    ]

    console.log(duration)
    console.log( timeReconverter(time))
    // console.log(parseInt(config.startTime.split(':')[0]*60)+parseInt(config.startTime.split(':')[1]))
    const days = ['السبت','الأحد' ,'الإثنين' ,'الثلاثاء','الأربعاء','الخميس','الجمعة']
    console.log(config.duration)
return (
<div className="container">
        <TableSetting/>
                <div className="timetable-img text-center">
                    <img src="img/content/timetable.png" alt="" />
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">Time
                                </th>
                                {
                                    days.map((day,index)=>{
                                        if(index>=config.firstDay && index<=config.lastDay)
                                        return  <th className="text-uppercase">{day}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Array.from({length:config.lessonNum},(_,index1)=>{
                                // if(index>0)
                                //setTime(time+duration)

                                // const showTime = timeReconverter(time)
                                return(
                                    <tr>
                                    <td className="align-middle">{timeReconverter(timeArr[index1])}</td>
                                {
                                    Array.from({length:(config.lastDay - config.firstDay +1)},(_,index2)=>{
                                        
                                        return (
                                            <td >
                                            <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{data[index2][index1]?.subject}</span>
                                            <div className="margin-10px-top font-size14"> 
                                            {timeReconverter(timeArr[index1]) }-{timeReconverter(timeArr[index1]+duration)} </div>
                                            <div className="font-size13 text-light-gray">{data[index2][index1]?.teacherName}</div>
                                            <BtnPop/>
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
                </div>
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