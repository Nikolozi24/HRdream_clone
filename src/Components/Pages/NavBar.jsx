import React from 'react'
import {
    KeyFill, GraphUp , People, Grid , PersonArmsUp ,
     ArrowCounterclockwise, Gear, BoxArrowRight,
} 
from 'react-bootstrap-icons'
import {useNavigate} from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='relative h-[99vh] sticky top-0  col-start-1 col-span-1  flex flex-col justify-between  w-1/6  h-full row-span-2 border-r-2 '>
    <div>
         <h1 className=" flex font-bold text-[20px] text-slate-700 gap-2 mt-10  ml-20">
      <KeyFill className="my-auto" color="#0390fc" /> HRdream
    </h1>
<ul className='m-auto w-1/2 flex flex-col text-[14px] gap-4 mt-8'>
    <li onClick={()=>{navigate('/')}} className='flex gap-2 text-center align-middle cursor-pointer' >
            <Grid className='my-auto'/> Dashboard
    </li>
    <li onClick={()=>{navigate('/app-tracker')}} className='flex gap-2 text-center align-middle cursor-pointer' >
     <GraphUp className='my-auto'/>Applicant tracker
     </li>
    <li onClick={()=>{navigate('/people')}} className='flex gap-3 text-center align-middle cursor-pointer' ><People className='my-auto'/>People</li>

    <li className='flex gap-3 text-center align-middle' ><PersonArmsUp className='my-auto'/>Who's away</li>
    <li className='flex gap-3 text-center align-middle' ><ArrowCounterclockwise className='my-auto'/>Reflect</li>
</ul>
    </div>

    <div> 
        <ul className='w-1/2 mx-auto flex flex-col gap-4 mt-96 mb-4'>
    <li className='flex gap-3 text-center align-middle' ><Gear className='my-auto'/>settings</li>
    <li onClick={()=>{navigate('/Login')}} className='flex gap-3 text-center align-middle cursor-pointer' ><BoxArrowRight className='my-auto'/>Log out</li>
            
        </ul>

</div>
        </div>
  )
}

export default NavBar