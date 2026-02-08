"use client";
import {useState,useEffect} from 'react';
import {useAuth} from '../context/AuthContext';
import {useRouter} from 'next/navigation';
export default function HomePage() {
    const{email,password}=useAuth();
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const[place,setPlace]=useState("");
    const router=useRouter();
   return( 
   <div className="min-h-screen flex flex-col items-center justify-center bg-red-200">
         <input placeholder="Name" 
  required={true} 
  className="bg-white p-3 my-3 "
  onChange={(event)=>setName(event.target.value)}
  />
 <input placeholder="Phone Number" 
  required={true} 
  className="bg-white p-3 my-3"
  onChange={(event)=>setPhone(event.target.value)}
  />
   <input placeholder="Address" 
  required={true} 
  className="bg-white p-3 my-3"
  onChange={(event)=>setPlace(event.target.value)}
  />   <div className="bg-white p-3 my-3"> 
        <div>{email}</div>
        <div>{password}</div>
    </div>
<button className="bg-blue-500 text-white p-3 my-3 "
   onClick={(event)=>{
    console.log(name);
    console.log(phone);
    console.log(place);
    router.push(`./cart`);}}>Go to Cart</button>
  
</div>
   );
// const[email,setEmail]=useState("")
// const[password,setPassword]=useState('');
// useEffect(() => {
//     setEmail(localStorage.getItem('emailValue'));
//     setPassword(localStorage.getItem('passwordValue'));
// },[]);
}

