import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shift from './Shift';
function StuCard(stu) {
    const student =stu.props
    return (
                //display only curr , prev and next cards
    <Card style={{width: '18rem', display: student.display==='curr'||student.display==='prev'||student.display==='next'?'block':'none'}} 
                className=
                //add animation to current ,order cards and handle opacity of others
                //handlecolors with num
                {`col-lg-3  ${student.display==='curr'?'order-2 w3-center w3-animate-top':student.display==='prev'?'order-1 back .d-sm-none .d-md-block':'order-3 back .d-sm-none .d-md-block'}
                ${student.num===0?'green-card':student.num===1?'blue-card':'pink-card'}`}>
        <Card.Img variant="top" src="./images/student1.png" />
        <Card.Body>
        <Card.Text>
            <span>الإسم: {student.name}</span>
            <span>المرحلة: {student.level}</span>
            <span> الفصل: {student.class}</span>
        </Card.Text>
        <Button className='btn btn-secondary'>عرض الطالب</Button>
        <Shift props={student.display} />
        </Card.Body>
    </Card>
    );
}

export default StuCard
