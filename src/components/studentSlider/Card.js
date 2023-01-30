import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function StuCard() {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/student1.png" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}

export default StuCard
