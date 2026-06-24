import React from 'react'
import Card_detail from './Card_detail'

const Card = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative  w-1/3 rounded-4xl'>
        <img className="h-full w-full object-cover "  src={props.img} alt="" />
       <Card_detail id={props.id} tag={props.tag} />

    </div>
  )
}

export default Card
