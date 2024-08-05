import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';



const Cards = (props) => {
  let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
       <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src = {review.image} alt=""></img>
      </div>
      <div className='w-[140px] h-[140px] absolute rounded-full bg-violet-500 top-[-7px] z-[-10] left-[10px]'>
      </div>
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold uppercase text-2xl'>{review.name}</p>
        <p className='text-violet-500 uppercase text-sm'>{review.job}</p>
      </div>
     
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft />
      </div>
      <div className='text-center mt-4 text-slate-500'>
        <p>{review.text}</p>
      </div>
      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight />
      </div>
    
    </div>
  )
}

export default Cards
