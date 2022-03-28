import { useState } from "react";
type detailUser ={
    name:string,
    email:string 
}
export const User =(props:detailUser)=>{
    const [user,setUser]=useState<detailUser|null>(null)
    const handleLognIn = ()=>{
        setUser({
            name: props.name,
            email: props.email,
        })
    }
    const handleLognOut = ()=>{
        setUser(null)
    }
    return (
        <div>
            <div>Username is {user?.name}</div>
            <div>Username is {user?.email}</div>
            <button onClick={handleLognIn}> Logn in </button>
            <button onClick={handleLognOut}> Logn out </button>
        </div> 
    );
}