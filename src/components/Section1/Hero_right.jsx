import React from 'react'
import Card from './Card'

const Hero_right = (props) => {
  return (
    <div id='right' className='w-2/3 h-full flex gap-5 overflow-x-auto flex-nowrap '>
      {props.users.map(function(elem, idx){
        return <Card key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}



    </div>
  )
}

export default Hero_right
