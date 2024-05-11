import React from 'react'
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form"
import axios from 'axios';
function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        const userInfo={
        
          email:data.email,
          password:data.password

        }
       await axios.post('http://localhost:4001/user/login',userInfo).then((res)=>{
          console.log(res.data)
          if(res.data)
          {
            alert("Loggedin Successful")
            document.getElementById("my_modal_3").close();
            window.location.reload();
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user))
          
        }).catch((err)=>{
          if(err.response)
          {console.log(err)
          alert("Error:"+err.response.data.message)}
        })
        
      }
    
  return (
    <div className='bg-white'>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal ">
  <div className="modal-box bg-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
 <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input type="email" placeholder='Enter your email'  className='w-80 px-3 rounded-md outline-none border'
         {...register("email", { required: true })}/><br/>
          {errors.email && <span className='text-sm text-red-500'>This field is required*</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span><br/>
        <input type="password" placeholder='Enter your password'  className='w-80 px-3 rounded-md outline-none border'  {...register("password", { required: true })} /><br/>
        {errors.password && <span className="text-sm text-red-500">This field is required*</span>}
   </div>
    <div className='flex justify-around mt-5'>
        <button  className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Sign up</Link></p>
    </div>
    </form>
    </div>
   
</dialog>
    </div>
  )
}

export default Login