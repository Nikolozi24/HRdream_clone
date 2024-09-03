import React from 'react'
import {
     Search,
     Envelope,
     Bell,
     ChevronDown,
   

} from 'react-bootstrap-icons'
const Header = () => {
  return (
    <div className=' border-b-2  bg-white top-0 sticky flex justify-between'>
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
                                <a className='flex gap-3' href='/profile'>

                                <img src="https://xsgames.co/randomusers/assets/avatars/female/21.jpg" className='rounded-full' width={30}  height={30 }/>
                                 Admira Broom  <ChevronDown className='my-auto'/>
                                </a>
                                 </li>
                            </ul>
                        </div>
                </div>
  )
}

export default Header