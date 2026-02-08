"use client";
import { useState} from "react";
import { useRouter } from "next/navigation";
import {useAuth} from "./context/AuthContext"

export default function Home() {
  const {login}=useAuth();
  const[email,setEmail]= useState("");
const[password,setPassword]= useState("");
const router=useRouter();
return(
  <div className="min-h-screen flex flex-col items-center justify-center bg-amber-400">

  <input placeholder="Email" 
  required={true} 
  className="bg-white p-3 my-3"
  onChange={(event)=>setEmail(event.target.value)}
  />

   <input placeholder="Password"
   required={true}
   className="bg-white p-3 my-3"
   onChange={(event)=>setPassword(event.target.value)}
   />
   <button className="bg-blue-500 text-white p-3 my-3 "
   onClick={(event)=>{
    console.log(email);
    console.log(password);
    // //router.push(`/home?email=${email}&password=${password}`)
    // localStorage.setItem('emailValue',email);
    // localStorage.setItem('passwordValue',password);
    login(email,password);
    router.push(`/home`);
   }}>Submit</button>
   </div>
)
  }
