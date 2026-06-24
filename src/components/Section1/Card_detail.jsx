import React from 'react'

const Card_detail = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between' >
            <h2 className='bg-white rounded-full w-9 h-9 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p id='para' className='mb-8 text-white '>Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque molestias quis qui architecto iusto saepe delectus!</p>
                <div className='flex justify-between  mt-4'>
                    <button className='bg-blue-600  rounded-full text-white w-[140px] h-10 text-center'>{props.tag}</button>
                    <button className='bg-blue-600 rounded-full  text-white w-10 h-10'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default Card_detail
