import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

//The 'ProtectedRoute' component destructured props like 'children'(actual component to render for route), 
//'accessBy'(a custom configuration whether the route can be accessed by either authenticated or non-authenticated user)
const ProtectedRoute = ({ children, accessBy }) => {
    //Fetching the 'user' information form the 'AuthContext'.
    // const { accessToken } = useContext(AuthContext);
    const login=localStorage.getItem('firstLogin')
    //If the 'accessBy' value is 'non-authenticated' and the user is not logged into our application 
    //then the user can access the page of the route.
    if (accessBy === "non-authenticated") {
        if (!login) {
            return children;
        }
    }
    //If the 'accessBy' value is 'authenticated' and the user is logged into our application 
    //then the user can access the page of the route.
    else if (accessBy === "authenticated") {
        if (login) {
        return children;
        }
    }
    //By default home page can be accessed by any kind of user we are redirected to the home page using the 'Navigate' component 
    //by specifying the route to redirect.
    return <Navigate to="/"></Navigate>;
};
export default ProtectedRoute;