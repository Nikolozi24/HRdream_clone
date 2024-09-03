import React , {useState} from 'react'
import {Pin , ThreeDotsVertical, PinFill} from 'react-bootstrap-icons'
const PinnedContent = ({text}) => {
  const [isPinned , setIsPinned] = useState(false)
  return (
    <div className='p-2 bg-white flex justify-between rounded-md shadow-lg'>
        <div>
            <p className='text-slate-500 mb-4'>5 minutes ago</p>
            <h1 className='text-[20px] font-semibold'>{text}</h1>
            <p className='text-slate-500'>Monday , December 31,2024</p>
        </div>
        <div className='flex gap-3' >
        
          
    {
      !isPinned?    <Pin title='pin'  className=" cursor-pointer " onClick={()=>{setIsPinned(prev=>!prev)}}/>:<PinFill title="unpin"onClick={()=>{setIsPinned(prev=>!prev)}} color="grey"/>
    }
        
        <ThreeDotsVertical/>
        </div>
    </div>
  )
}

export default PinnedContent