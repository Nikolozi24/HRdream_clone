import React from 'react'

const Annoucement = () => {
  return (
    <div className='flex justify-between p-2'>
    <div className='flex flex-col gap-1'>
        <h1 className='text-[20px] font-bold'>Annoucements</h1>
        <p>2 active tasks</p>
    </div>
        <div className='p-2 h-3/4 rounded-md  bg-blue-300'>
            Today, Dec.12,2024
        </div>
    </div>
  )
}

export default Annoucement