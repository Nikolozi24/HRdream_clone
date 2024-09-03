import React from 'react'

const ListComponent = ({url="" , fullName="" , role="" , dest="", time="", Department="",isGreen=false, isBlue=false, isPurple=false}) => {
  return (
    <div className='flex justify-around p-4 w-full'>
    <div className='flex w-full gap-2 '>
        <img width={50} height={50} className='rounded-full' src={url} />
        <div className='flex flex-col gap-1'>
            <h1>{fullName}</h1>
            <p>{role}</p>
        </div>
    </div>
        <div className='w-full'>
            <h1>{dest}</h1>
            <p>{time}</p>
        </div>
        <div className='w-full flex items-center justify-center '>

        {
          isBlue && <button className=' px-4  bg-blue-200 rounded-lg py-2 my-auto w-3/4 text-blue-800'>{Department}</button>
        }
        {
          isGreen && <button className= ' px-4 bg-green-200 py-2 rounded-lg text-green-800 w-3/4'>{Department}</button>
        }
        {
          isPurple && <button className='px-4 bg-purple-200 rounded-lg py-2 w-2/3 text-purple-800'>{Department}</button>
        }
        </div>
    </div>
  )
}

export default ListComponent