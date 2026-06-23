import React from 'react'
import Hero_right from './Hero_right'
import Hero_left from './Hero_left'

const Hero = () => {
  return (
    <div className='h-5/6 pb-4 px-12 flex justify-between gap-5 items-center'>
      <Hero_left />
      <Hero_right />


    </div>
  )
}

export default Hero

