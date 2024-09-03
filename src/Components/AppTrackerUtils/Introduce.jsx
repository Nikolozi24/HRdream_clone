import React from 'react'
import { Funnel } from 'react-bootstrap-icons'

const Introduce = ({text="", head=""}) => {
  return (
    <div className='border-b-2 pb-5'>
          <h1 className='text-[30px]'>{head}</h1>
                        <div className='flex justify-between'>
                            <span className='text-slate-600'>{text}</span>
                            <span className='flex gap-3 cursor-pointer'>
                                <Funnel className='my-auto'/> Filter
                            </span>
                        </div>
    </div>
  )
}

export default Introduce