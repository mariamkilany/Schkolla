import { Card } from "react-bootstrap";
    
const Base = () => {
    return (
        <>
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "500px", minWidth: "600px" }}
        >
            <Card>
            <Card.Body>
                <Card.Text style={{fontSize:'30px',}}>
                Welcome to demo on ReactJS SCHKOLLA
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        </>
    );
};
export default Base;