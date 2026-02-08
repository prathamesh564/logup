"use client";
import {createContext,useContext,useState}from "react";
const AuthContext=createContext();
export const AuthProvider=({children}) => {
    const[email, setEmail]=useState("");
const[password, setPassword]=useState('');
const login=(email,password)=>{
    setEmail(email);
    setPassword(password);
}
const logout=()=>{
    setEmail("");
    setPassword("");

}
return(<AuthContext.Provider value={{email,password,login,logout}}>{children}</AuthContext.Provider>);
}
export const useAuth =()=>{
    return useContext(AuthContext);
}