import React, { useState,createContext } from 'react'
import StuCard from './Card'
import './slider.css';
import staudents from './data'

export const SliderContext = createContext(null)

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
    const [current , setCurrent]=useState(0);
    const [data,setData]=useState(staudents);
    const [curr,setCurr]=useState(0);
    const [prev,setPrev]=useState(1);
    const [next,setNext]=useState(2);
    const colors=['green','blue','pink'];
    var color =0;
    const handleColors =(num)=>{
        if(num<0){
        return colors.length -1
    }
    else if(num===colors.length)
        return 0
    else
    return num
    }
    return (
    <SliderContext.Provider value={{current,setCurrent,data,handleCurrent,curr,setCurr,prev,setPrev,next,setNext}}>
        <div className='row w3-container'>
            {data.map((student,index)=>{
                color=handleColors(color+1)
                console.log(color)
                if(index===current)
                return <StuCard props={{...student,display:'curr',num:curr}} key={student.id} />
                else if(index===handleCurrent(current-1)){
                return <StuCard props={{...student,display:'prev',num:prev}} key={student.id} />
                }
                else if(index===handleCurrent(current+1))
                return <StuCard props={{...student,display:'next',num:next}} key={student.id} />
                else 
                return <StuCard props={{...student,color}} key={student.id} />
            })}
        </div>
    </SliderContext.Provider>
    )
}

export default Slider
