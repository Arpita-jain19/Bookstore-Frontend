import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
   const handleLogout=()=>{
    try{
        setAuthUser({...authUser,user:null})
        localStorage.removeItem("Users")
        alert("Logged out Successfully")
        window.location.reload();
    }
    catch(err){
        alert("Error logging out",err.message)
        
    }

   }
  return (
    <div>
        <button className='px-3 py-3 text-white rounded-md bg-red-500 cursor-pointer'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout