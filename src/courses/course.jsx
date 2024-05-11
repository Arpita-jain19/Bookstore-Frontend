import React from 'react'



import Course from '../components/Course'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

function Courses() {
 
  return (
    <>
   <Navbars/>
   <div className='min-h-screen bg-white'>
   <Course/>
   </div>
   <Footer/>
    
   
    
    </>
  )
}

export default Courses