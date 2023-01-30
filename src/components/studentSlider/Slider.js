import React from 'react'
import StuCard from './Card'
import './slider.css';
import staudents from './data'

function Slider() {
    console.log(staudents)
    return (
    <div>
        {staudents.map((student)=>{
            return <StuCard student key={student.id} />
        })}
    </div>
    )
}

export default Slider
