import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import { useEffect,useState } from 'react';
import Book from '../../../Backend/model/book';
function Freebook() {
   
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]};
      const [Book, setBook] = useState([])
      useEffect(() => {
        const getBook=async()=>{
          try{
            const res=await axios.get('http://localhost:4001/book');
            console.log(res)
            const filteredData=res.data.filter((data)=>data.category==="Free")
            
            setBook(filteredData)
      
          }catch(err)
          {console.log(err)
      
          }
         
      
        }
        getBook();
       }, [])
    
  return (
   <>
  <div className='max-w-screen-2xl  container max-auto md:px-20'>
    <div>
    <h1 className='font-bold text-xl'>Free Offered Courses</h1>
    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia inventore ratione cum aliquid? Soluta minus aut neque aspernatur quos.</p>
    </div>
 

  <div >
  <Slider {...settings}>
       {Book.map((item)=>(<Cards item={item} key={item.id}/>))}
      </Slider>
     
  </div>
  </div>

   </>
  )
}

export default Freebook