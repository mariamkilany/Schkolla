import { useContext } from "react";
import { Container, Navbar, Nav , Button } from "react-bootstrap";
import { Link ,useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";
    
const Layout = ({ children }) => {
    //Read the 'user' information from the 'AuthContext'.
    const { user , logout } = useContext(AuthContext);
    const location=useLocation()
    return (
        <>
        {!(location.pathname.toLowerCase().includes('dashboard'))&&
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/">
                Skcholla 
            </Navbar.Brand>
            <Nav>
                {user && (<Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>)}
            </Nav>
            <Nav className="ms-auto">
            {/* Display authenticated user email address. */}
            {user && <Nav.Link>{user?.email}</Nav.Link>}
            {/* Show the login menu item if the user is not authenticated. */}
            {!user && (<Nav.Link as={Link} to="/login">Login</Nav.Link>)}
            </Nav>
        </Navbar>}
        <Container>{children}</Container>
        </>
    );
};
export default Layout;