import React from 'react'
import Cards from './Cards';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = React.useState(0);
  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length-1);
    }else{
      setIndex(index-1);
    }
  }

  function rightShiftHandler(){
  if(index+1>reviews.length-1){
    setIndex(0);
  }else{
    setIndex(index+1);
  }
  }
  function surppriseHandler(){
   let randomIndex = (Math.floor(Math.random()*reviews.length));
   setIndex(randomIndex);
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10  mx-auto transition-all duration-100 hover:shadow-xl'>
      <Cards review = {reviews[index]}></Cards>
      <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto'>
        <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>
        <button  onClick = {rightShiftHandler}className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>
      </div>
      <div className='mt-5'>
        <button onClick={surppriseHandler} className='bg-violet-400 transition-all duration-100 cursor-pointer px-10  py-2 rounded-md font-bold text-white text-lg hover:text-whitesmoke-500'>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonials
