import React from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState ,useEffect} from 'react';
function Course() {
 const [book, setbook] = useState([])
 useEffect(() => {
  const getBook=async()=>{
    try{
      const res=await axios.get('http://localhost:4001/book');
      console.log(res)
      
      setbook(res.data)

    }catch(err)
    {console.log(err)

    }
   

  }
  getBook();
 }, [])
 
  return (
   <>
  <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-16 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500 text-3xl font-bold'>here! :)</span></h1>
    
   <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque officiis eveniet rerum sit accusantium consequuntur tenetur excepturi distinctio, voluptatum repellendus qui dolorum. Velit quae aliquid mollitia dignissimos soluta ea quam labore veritatis. Fugit itaque blanditiis nisi beatae voluptatibus repellat quidem dicta magnam omnis sit neque minus sunt, soluta amet!</p>
     <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
  </div>
  <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
   {
     book.map((item)=>(
      <Cards key={item.id} item={item}/>
     ))
   }
  </div>
  </div>
   </>
  )
}

export default Course;