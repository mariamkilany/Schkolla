import React, { useState } from 'react'
import StuCard from './Card'
import './slider.css';
import staudents from './data'

const handleCurrent = (num)=>{
    if(num<0){
        return staudents.length -1
    }
    else if(num===staudents.length)
        return 0
    else
    return num
}

function Slider() {
    console.log(staudents)
    const [current , setCurrent]=useState(0);
    return (
    <div className='row'>
        {staudents.map((student,index)=>{
            console.log(index)
            if(index===current)
            return <StuCard props={{...student,display:'curr'}} key={student.id} />
            else if(index===handleCurrent(current-1)){
            return <StuCard props={{...student,display:'prev'}} key={student.id} />
            }
            else if(index===handleCurrent(current+1))
            return <StuCard props={{...student,display:'next'}} key={student.id} />
            else 
            return <StuCard props={student} key={student.id} />
        })}
    </div>
    )
}

export default Slider
