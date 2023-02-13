import { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link ,useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";
import logo from '../../pages/login/images/logo.png'
    
const Layout = ({ children }) => {
    //Read the 'user' information from the 'AuthContext'.
    const {accessToken} = useContext(AuthContext);
    const location=useLocation()
    return (
        <>
        {!(location.pathname.toLowerCase().includes('dashboard'))&&
        <Navbar style={{background:'#F3F4F8'}}>
            <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt=""  className="w-50"/>
            </Navbar.Brand>
            <Nav>
                {accessToken && (<Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>)}
            </Nav>
            <Nav className="ms-auto me-5 ">
            {/* Display authenticated user email address. */}
            {/* {accessToken && <Nav.Link>{user?.email}</Nav.Link>} */}
            {/* Show the login menu item if the user is not authenticated. */}
            {!accessToken&&location.pathname!=='/login' && (<Nav.Link as={Link} to="/login">تسجيل الدخول</Nav.Link>)}
            </Nav>
        </Navbar>}
        <Container>{children}</Container>
        </>
    );
};
export default Layout;