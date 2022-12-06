import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider=({children})=>{

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))||null);

    const login=()=>{
        //TODO: fetch user info from backend
        setUser({
            name: "John Doe",
            id: 1,
            profilePicture: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        })
    }
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user));
    },[user])

    return(
        <AuthContext.Provider value = {{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}