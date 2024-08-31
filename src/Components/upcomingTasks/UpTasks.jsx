import React from 'react'

const UpTasks = ({number , text , paragraph , time}) => {
  return (
    <div>
            <div className='flex justify-between'>
                <ul className='flex gap-2 '>
        <li className='flex gap-2'>
            <span
             className='w-10 h-10 m-auto rounded-full p-3 bg-white shadow-lg flex text-center items-center'
            >
            {number}</span>
        <div>
            <h1 className='font-bold'>{text}</h1>
            <p>{paragraph}</p>
        </div>    
        </li>              
      </ul>
      <h1>{time}</h1>
            </div>

    </div>
  )
}

export default UpTasks