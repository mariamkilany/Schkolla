import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// The 'createContext' assigned to the 'AuthContex' variable. 
//The 'createContex' loads from the 'react' library
const AuthContext = createContext();

//Create our component for API context like 'AuthContextProvider'.
export const AuthContextProvider = ({ children }) => {
//The 'user' state variable holds the authenticated user information. 
//For the initial value here we check for browser local storage, 
//this case helps when the user reloads the page.
    const [user, setUser] = useState(() => {
        let userProfle = localStorage.getItem("userProfile");
        if (userProfle) {
        return JSON.parse(userProfle);
        }
        return null;
    });
    //Initialized the navigation variable.
    const navigate = useNavigate();
    //In 'logn' method we invoke API calls like 'user login API call', 
    //The 'login' API call for user authentication on the success of the login API sends us an HTTPonly cookie. 
    //Here for every API call, we have to pass configuration to API call like 'withCredentials' with 'true' because our client application and 
    //API application runs under different ports or domains so to store the login cookie into the browser or attach the cookie for every secured API endpoint request we need those configurations.
    const login = async (payload) => {
        let apiResponse =await axios.post("https://h1.publisher-hub.com/v1/admin/login", payload);
        localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
        setUser(apiResponse.data);
        navigate("/dashboard");
    };
    const logout = async () => {
        //Invoking the 'Logout' API call
    await axios.get("https://h1.publisher-hub.com/v1/admin/logout");
    //Then remove the user profile information from the browser's local storage.
    localStorage.removeItem("userProfile");
    //Then empty the 'user' state variable and then navigate to 'login' page
    setUser(null);
    navigate("/login");
};
    return (
        //In the 'AuthContext.Provider' element, we configure the 'value' attribute to which we pass our 'login'(method), 'user'(variable) because these properties have to be accessed by any component in our application.
        <> 
        <AuthContext.Provider value={{ user, login , logout }}>
            {children}
        </AuthContext.Provider>
        </>
    );
    };
    
export default AuthContext;