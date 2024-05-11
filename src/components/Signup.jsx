import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import {useForm} from "react-hook-form"
import axios from "axios";
export default function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname||"/"
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        const userInfo={
          name:data.name,
          email:data.email,
          password:data.password

        }
       await axios.post('http://localhost:4001/user/signup',userInfo).then((res)=>{
          console.log(res.data)
          if(res.data)
          {
            alert("Signup Successful");
            navigate(from,{replace:true})
           
          
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user))
          
        }).catch((err)=>{
          if(err.response)
          {console.log(err)
          alert("Error:"+err.response.data.message)}
        })
        
      }
    
  return (
    <>
    <div className='flex h-screen items-center justify-center  shadow-md  '>
      
  <div className="w-[600px]" >
   <div className="modal-box bg-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Sign up</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input type="name" placeholder='Enter your full name'  className='w-80 px-3 rounded-md outline-none border' {...register("name", { required: true })}/><br/>
        {errors.name && <span className="text-sm text-red-500">This field is required*</span>}<br/>
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input type="email" placeholder='Enter your email'  className='w-80   px-3 py-1 rounded-md outline-none border' {...register("email", { required: true })}/><br/>
        {errors.email && <span className="text-sm text-red-500">This field is required*</span>}<br/>
    </div>
    
    <div className='mt-4 space-y-2'>
        <span>Password</span><br/>
        <input type="password" placeholder='Enter your password'  className='w-80 px-3 rounded-md outline-none border' {...register("password", { required: true })}/><br/>
        {errors.password && <span className="text-sm text-red-500">This field is required*</span>}
        
    </div>
    <div className='flex justify-around mt-5'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p className='text-md'>Have Account? <button  className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}> Login</button></p>{" "}<Login/>
    </div>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}
