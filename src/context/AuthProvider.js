import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [id,setId]=useState(auth.id);
    return (
        <AuthContext.Provider value={{ auth, setAuth,id }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;