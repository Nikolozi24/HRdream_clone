import React from 'react'
import { ArrowRepeat } from 'react-bootstrap-icons'

const LittleComp = ({title, val}) => {
  return (
    <div className='flex justify-between gap-4 w-full '>
          <div>

            <h1 className='font-bold text-[14px]'>{title}</h1>
            <h2 className=' font-bold text-[20px] text-blue-500'>{val}</h2>
            <p className='text-slate-400'>vs.Previous month</p>
        </div>
        <ArrowRepeat className='text-slate-400' />
    </div>
  )
}

export default LittleComp