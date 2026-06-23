import React from 'react'

const Card = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
        <img className="h-full w-full object-cover"  src="https://i.pinimg.com/736x/1b/4d/df/1b4ddf8afc6c280795f0607148fefee9.jpg" alt="" />
        <div className='absolute top-0 left-0 h-full w-full bg-amber-300 p-10 flex flex-col justify-between' >
            <h2 className='bg-white rounded-full '>1</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque molestias quis qui architecto iusto saepe delectus!</p>
                <div>
                    <button>Satisfied</button>
                    <button><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card
