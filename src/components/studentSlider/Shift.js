import React , {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import { RiArrowRightSLine , RiArrowLeftSLine} from 'react-icons/ri'
import { SliderContext } from './Slider';
function Shift(props) {
    const {current,setCurrent,data,handleCurrent,curr,setCurr,prev,setPrev,next,setNext}=useContext(SliderContext)
    setTimeout(() => {
        setCurr(next)
        setPrev(curr)
        setNext(prev)
        setCurrent(handleCurrent(current+1))
    }, 10000);
    return (
    <div className='shift' style={{display:props.props==='curr'?'block':'none'}}>
        <Button className='btn-secondary'
        onClick={()=>{
            setCurrent(handleCurrent(current+1))
            setCurr(next)
            setPrev(curr)
            setNext(prev)
        }}
        > <RiArrowLeftSLine/></Button>
        {current+1} / {data.length}
        <Button className='btn-secondary'
        onClick={()=>{
            setCurrent(handleCurrent(current-1))
            setCurr(prev)
            setPrev(next)
            setNext(curr)
        }}
        > <RiArrowRightSLine/></Button>
    </div>
    )
}

export default Shift
