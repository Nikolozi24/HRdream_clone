import React from 'react'
import {Pin , ThreeDotsVertical} from 'react-bootstrap-icons'
const PinnedContent = ({text}) => {
  return (
    <div className='p-2 bg-white flex justify-between rounded-md shadow-lg'>
        <div>
            <p className='text-slate-500 mb-4'>5 minutes ago</p>
            <h1 className='text-[20px] font-semibold'>{text}</h1>
            <p className='text-slate-500'>Monday , December 31,2024</p>
        </div>
        <div className='flex gap-3' >
        <Pin/>
        <ThreeDotsVertical/>
        </div>
    </div>
  )
}

export default PinnedContent