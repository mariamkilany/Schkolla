import React from 'react'
import Button from 'react-bootstrap/Button';
import { RiArrowRightSLine , RiArrowLeftSLine} from 'react-icons/ri'
function Shift() {
    return (
    <div className='shift'>
        <Button className='btn-secondary'> <RiArrowLeftSLine/></Button>
        
        <Button className='btn-secondary'> <RiArrowRightSLine/></Button>
    </div>
    )
}

export default Shift
