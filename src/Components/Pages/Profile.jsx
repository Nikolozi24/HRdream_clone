import { LinearScale } from 'chart.js'
import React from 'react'
import {
     KeyFill, GraphUp , People, Grid , PersonArmsUp ,
      ArrowCounterclockwise, Gear, BoxArrowRight,
      Search,
      Envelope,
      Bell,
      ChevronDown,
      Dot,
      Calendar3,
      Lightbulb,
      PatchQuestionFill

} from 'react-bootstrap-icons'
import CombinedChart from '../Grapic/WeekChart'
import { Button } from 'antd'


const Profile = () => {
    const data = [
        {
            name:"Sun",
            workHours:1,
            totalHours:8,
        },
        {
            name:"Mon",
            workHours:4,
            totalHours:8,
        },
        {
            name:"Tue",
            workHours:6,
            totalHours:8,
        },
        {
            name:"Wed",
            workHours:8,
            totalHours:8,
        },
        {
            name:"Thu",
            workHours:2,
            totalHours:8,
        },
        {
            name:"Fri",
            workHours:3,
            totalHours:8,
        },
        {
            name:"Sat",
            workHours:6,
            totalHours:8,
        },
    ]
  return (
    <div className=' flex'>
        <div className=' col-start-1 col-span-1 w-1/6  h-full row-span-2 border-r-2 '>
            <h1 className=" flex font-bold text-[20px] text-slate-700 gap-2 mt-10  ml-20">
          <KeyFill className="my-auto" color="#0390fc" /> HRdream
        </h1>
    <ul className='m-auto w-1/2 flex flex-col text-[14px] gap-4 mt-8'>
        <li className='flex gap-2 text-center align-middle' >
                <Grid className='my-auto'/> Dashboard
        </li>
        <li className='flex gap-2 text-center align-middle' >
         <GraphUp className='my-auto'/>     Applicant tracker
         </li>
        <li className='flex gap-3 text-center align-middle' ><People className='my-auto'/>People</li>
        <li className='flex gap-3 text-center align-middle' ><PersonArmsUp className='my-auto'/>Who's away</li>
        <li className='flex gap-3 text-center align-middle' ><ArrowCounterclockwise className='my-auto'/>Reflect</li>
    </ul>
        <div> 
            <ul className='w-1/2 mx-auto flex flex-col gap-4 mt-96 mb-4'>
        <li className='flex gap-3 text-center align-middle' ><Gear className='my-auto'/>settings</li>
        <li className='flex gap-3 text-center align-middle' ><BoxArrowRight className='my-auto'/>Log out</li>
                
            </ul>


        </div>
            </div>

            <div className='w-5/6  '>
                <div className=' border-b-2 flex justify-between'>
                        <div className='w-1/2 my-4 '>

                      <div className=' w-5/6 bg-slate-100 flex h-10 m-auto rounded-md'>
                        <input className='bg-slate-100 outline-none w-5/6 mx-auto' placeholder='Search'/> 
                        <button className='flex w-10  justify-center text-center  '><Search className='m-auto'/></button>
                        
                      </div>   
                        </div>
                        <div className='my-auto'>
                            <ul className='flex justify-around gap-3'>
                                <li className='my-auto' ><Envelope/></li>
                                <li className='my-auto' ><Bell/></li>
                                <li >
                                <a className='flex gap-3' href='#'>

                                <img src="https://xsgames.co/randomusers/assets/avatars/female/21.jpg" className='rounded-full' width={30}  height={30 }/>
                                 Admira Broom  <ChevronDown className='my-auto'/>
                                </a>
                                 </li>
                            </ul>
                        </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 border-r-2 p-4 flex flex-col bg-slate-50 gap-1'>
                    <h1 className='text-[25px] font-bold font-mono'>Good Morning, Admira</h1>
                    <p className='text-slate-400'>
                        Open the panel and watch your progress and growth in knowledge.
                    </p>
                    <button className='btn-outlined-primary w-1/3 my-4'>Account settings</button>
                    <div className='p-4 bg-white rounded-md shadow-md'>
                        <h1 className='font-bold '>My tasks</h1>
                        <p className='text-slate-400 '>2 active tasks</p>
                        <div className='flex justify-between'>

                        <ul className='flex gap-2 mt-2'>
                            <li><img src='https://xsgames.co/randomusers/assets/avatars/female/21.jpg'  className='rounded-full' width={25} height={25}/></li>
                            <li className='text-slate-400 '>Admra</li>
                            <li className=' flex'><Dot color="#2766cc" className='my-auto'/></li>
                            <li className="">Interview with developer</li>
                        </ul>
                        <p className='text-[#ff0000] text-[10px] my-auto'>Due today</p>
                        </div>
                        <div className='flex justify-between'>

                        <ul className='flex gap-2 mt-2'>
                            <li><img src='https://xsgames.co/randomusers/assets/avatars/female/21.jpg'  className='rounded-full' width={25} height={25}/></li>
                            <li className='text-slate-400 '>Admra</li>
                            <li className=' flex'><Dot color="#2766cc" className='my-auto'/></li>
                            <li className="">Reflection time</li>
                        </ul>
                        <p className='text-orange-400 text-[10px] my-auto'>Tomorrow</p>
                        </div>
                        <div className='flex justify-between'>

                        <ul className='flex gap-2 mt-2'>
                            <li><img src='https://xsgames.co/randomusers/assets/avatars/female/21.jpg'  className='rounded-full' width={25} height={25}/></li>
                            <li className='text-slate-400 '>Admra</li>
                            <li className=' flex'><Dot color="#2766cc" className='my-auto'/></li>
                            <li className="">Sprint questions preparation</li>
                        </ul>
                        <p className='text-[#ff0000] text-[10px] my-auto'>Due today</p>
                        </div>
                        <p className='text-center my-5 text-blue-500'><a href='#'>See all tasks</a></p>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <div className=' h-26 shadow-lg p-8 bg-white  w-2/5'>
                                <h1 className='font-bold text-slate-900'>Next retrospective</h1>
                                <p className='text-slate-400 mb-4'> Week 12</p>
                                <ul className='flex gap-2'>
                                    <li className='flex'>
                                        <img className='rounded-full' src="https://xsgames.co/randomusers/assets/avatars/female/28.jpg" width={20} height={20}/>
                                        <img className='rounded-full transform -translate-x-1' src="https://xsgames.co/randomusers/assets/avatars/female/25.jpg" width={20} height={20}/>
                                        <img className='rounded-full  transform -translate-x-2' src="https://xsgames.co/randomusers/assets/avatars/female/23.jpg" width={20} height={20}/>
                                    </li>
                                    <li className='text-slate-600'>Design team</li>
                                </ul>
                        </div>
                        <div className=' h-26 shadow-lg p-8 bg-white  w-2/5'>
                                <h1 className='font-bold text-slate-900'>Next sprint</h1>
                                <p className='text-slate-400 mb-4'> Week 12</p>
                                <ul className='flex gap-2'>
                                    <li className='flex'>
                                        <img className='rounded-full' src="https://xsgames.co/randomusers/assets/avatars/female/28.jpg" width={20} height={20}/>
                                        <img className='rounded-full transform -translate-x-1' src="https://xsgames.co/randomusers/assets/avatars/female/25.jpg" width={20} height={20}/>
                                        <img className='rounded-full  transform -translate-x-2' src="https://xsgames.co/randomusers/assets/avatars/female/23.jpg" width={20} height={20}/>
                                    </li>
                                    <li className='text-slate-600 '>Design team</li>
                                </ul>
                        </div>
                        <div className=' h-23 p-8 shadow-lg p-4 bg-white  w-1/5'>
                            <h1 className=' font-bold'> Calendar</h1>
                            <Calendar3 className='m-auto  mt-10  w-10 h-10 p-3 text-blue-700 rounded-md bg-blue-100'  />
                        </div>
                    </div>
                    <div className='h-40 bg-white  '>
                    <h1 className='text-center  font-bold'>Total working hours</h1>
                        <CombinedChart/>

                    </div>
                    </div>
                    <div className='w-1/2 p-4 flex flex-col bg-slate-50 gap-8' >
                            <h1 className='font-bold'>Quick Actions</h1>
                            <ul className='flex flex-row justify-around'>
                                <li className='bg-blue-600  px-2 rounded-md py-6'>
                                    <h1 className=' mx-4 font-bold text-white text-center' >Reflection Time</h1>
                                    <h4 className=' text-center text-white text-[10px]'>10 questions</h4>
                                    <Lightbulb  className='m-auto my-5 bg-blue-100 p-2 rounded-full text-blue-600'  width={80} height={80}/>
                                </li>
                                <li className='bg-[#3fc2c4] px-2 rounded-md py-6'>
                                    <h1 className=' font-bold mx-4 text-white text-center' >Daily progress</h1>
                                    <h4 className=' text-center text-white text-[10px]'>1 task to go!</h4>
                                   <h1 className='bg-[#b9e6e8] text-[#3fc2c4]  text-[30px] mx-6 my-5  rounded-full text-center flex content-center  items-center justify-center mt-6 w-20 h-20'>82%</h1>
                                </li>
                                <li className='bg-[#989ffe] px-2 rounded-md py-6'>
                                    <h1 className=' mx-4 text-white text-center' >Reflection Time</h1>
                                    <h4 className=' text-center text-white text-[10px]'>10 questions</h4>
                                    <PatchQuestionFill className='m-auto my-5 bg-[#d6d6fd] p-2 rounded-full text-[#989ffe]'  width={80} height={80}/>
                                    </li>
                            </ul>
                            <h1 className='font-bold'>August 2024 </h1>
                            <ul className='flex justify-around'>
                                <li><button className='w-16 h-16 px-2 rounded-md'>Mon 27
                                </button></li>
                                <li><button className='w-16 h-16  px-2 rounded-md'>Tue <br/>28 
                                </button></li>
                                <li><button className='w-16 h-16  border-2 px-2 bg-white rounded-md'>Wen 29
                                </button></li>
                                <li><button className='w-16 h-16  px-2 rounded-md'>Fri <br/> 30
                                </button></li>
                                <li><button className='w-16 h-16  px-2 rounded-md'>Sat<br/>31
                                </button></li>
                                <li><button className='w-16 h-16 border-2 px-2 rounded-md'>Sun <br/> 1
                                </button></li>
                            </ul>
                            <h1 className='font-bold'>Upcoming calendar tasks</h1>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Profile