import React from 'react'

const RecentActivity = () => {
  return (
    <div className='text-white p-8 mt-10 bg-blue-600 rounded-md'>
    <h1 className='text-[20px]'>  Recent Activity  </h1>
    <div className=' border-b-2 pb-4 border-white'>
        <p>10:40 AM ,  Fri.sept.10, 2024</p>
        <h1>Outing schedule for every department</h1>
        <p>Check the job description and requirements to make sure everything is correct.</p>
    </div>
    <div className='mt-4'>
        <p>10:40 AM ,  Fri.sept.10, 2024</p>
        <h1>Outing schedule for every department</h1>
        <p>Check the job description and requirements to make sure everything is correct.</p>
    </div>
    <div className='flex justify-between mt-8'>

    <p>Today you've completed 12 task</p>
    <button className='btn-outlined-primary'>See all tasks</button>
    </div>
          
    </div>
  )
}

export default RecentActivity