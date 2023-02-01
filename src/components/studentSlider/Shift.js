import React , {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import { RiArrowRightSLine , RiArrowLeftSLine} from 'react-icons/ri'
import { SliderContext } from './Slider';
function Shift(props) {
    const {current,currentDispatch,data,colorDispatch}=useContext(SliderContext)
    return (
    <div className='shift' style={{
        //display arrows with current card only
        display:props.props==='curr'?'block':'none'
        }}>
        <Button className='btn-secondary'
        onClick={()=>{
        //switch current and color
        colorDispatch({type: "INCREMENT"})
        currentDispatch({type: "INCREMENT"})
        }}
        > <RiArrowLeftSLine/></Button>
        {current+1} / {data.length}
        <Button className='btn-secondary'
        onClick={()=>{
        //switch current and color
        colorDispatch({type: "DECREMENT"})
        currentDispatch({type: "DECREMENT"})
        }}
        > <RiArrowRightSLine/></Button>
    </div>
    )
}

export default Shift
