import React, { useState,createContext, useReducer } from 'react'
import StuCard from './Card'
import './slider.css';
import staudents from './data'

//create context for slider
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

const currentSwitch=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return handleCurrent(state+1)
        case 'DECREMENT':
            return handleCurrent(state-1)
        default:
            return new Error()
    }
}

const colorSwitch=(state,action)=>{
    switch(action.type){
        case'INCREMENT':
            return {curr:state.next,next:state.prev,prev:state.curr}
        case 'DECREMENT':
            return {curr:state.prev,next:state.curr,prev:state.next}
        default:
            return new Error()
    }
}

function Slider() {
    //reducer to handle current card
    const [current,currentDispatch]=useReducer(currentSwitch,0);
    //set data from api in state
    const [data,setData]=useState(staudents);
    //handle switch between colors
    const [colors,colorDispatch]=useReducer(colorSwitch,{curr:0,prev:1,next:2});

    return (
    <SliderContext.Provider value={{current,currentDispatch,data,handleCurrent,colors,colorDispatch}}>
        <div className='row w3-container'>
            {data.map((student,index)=>{
                //check current ,prev ,next and other cards 
                if(index===current) 
                return <StuCard props={{...student,display:'curr',num:colors.curr}} key={student.id} />
                else if(index===handleCurrent(current-1))
                return <StuCard props={{...student,display:'prev',num:colors.prev}} key={student.id} />
                else if(index===handleCurrent(current+1))
                return <StuCard props={{...student,display:'next',num:colors.next}} key={student.id} />
                else 
                return <StuCard props={{...student}} key={student.id} />
            })}
        </div>
    </SliderContext.Provider>
    )
}

export default Slider
