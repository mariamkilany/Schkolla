import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiArrowRightSLine , RiArrowLeftSLine} from 'react-icons/ri'
import Shift from './Shift';
function StuCard(stu) {
    const student =stu.props
    return (
    <Card style={{ width: '18rem', display: student.display==='curr'||student.display==='prev'||student.display==='next'?'block':'none' }} 
                className={`col-4 ${student.display==='curr'?'order-2':''}
                ${student.display==='prev'?'order-1':''}
                ${student.display==='prev'?'order-3':''}`}>
        <Card.Img variant="top" src="./images/student1.png" />
        <Card.Body>
        <Card.Text>
            <span>الإسم: {student.name}</span>
            <span>المرحلة: {student.level}</span>
            <span> الفصل: {student.class}</span>
        </Card.Text>
        <Button className='btn btn-secondary'>عرض الطالب</Button>
        <Shift/>
        </Card.Body>
    </Card>
    );
}

export default StuCard
