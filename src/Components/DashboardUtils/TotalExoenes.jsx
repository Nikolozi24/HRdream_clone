import React from 'react'
import LittleComp from './LittleComp'
const TotalExoenes = () => {
  return (
  <>
<h1 className='ml-2 text-[20px] font-bold'>Total Company expenses</h1>
  <div className='flex justify-around gap-6 '> 
  
    <div className='bg-white p-6 rounded-md shadow-lg w-4/5'>

    <LittleComp val={`$34,566.23`} title={`Total Bonuses`}/>
    </div>
        <div className='bg-white p-6 rounded-md shadow-lg w-4/5'>

    <LittleComp val={`$45,000.41`} title={`Total comission`}/>
        </div>
    </div>
  </>
  )
}

export default TotalExoenes