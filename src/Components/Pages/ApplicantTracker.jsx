
import Header from './Header'
import NavBar from './NavBar'
import React from 'react'
import {Diagram3, Palette, Search, WalletFill} from "react-bootstrap-icons"
import Introduce from '../AppTrackerUtils/Introduce'
import BoxWithInfo from '../AppTrackerUtils/BoxWithInfo'
export const ApplicantTracker = () => {
  return (
    <div className=' flex '>
    
    <NavBar/>
        <div className='w-5/6  bg-slate-50 '>
           <Header/>
            <div className='lg:flex  flex-wrap flex-col  font-serif p-4  mx-8 border-b-2 '>
                   <Introduce head='Application Tracker' text="Here's your selection process overview"/>     
                <ul className='flex justify-around text-[35px]'>
                    <li>Applied</li>
                    <li>Interviewed</li>
                    <li>Made offer</li>
                    <li>Hired</li>
                </ul>
               <div className='grid grid-cols-4 gap-4 mt-4 grid-rows-3'>

                <BoxWithInfo
                   isGreen={true}
                    name={"Harper Stone"}
                    email={"harperstone@email.com"}    
                    dest="Copenhagen"
                    text="Head of HR"
                    textIcon={<Diagram3 className='my-auto'/>}
                Department={"People & Culture"}
                 />
                <BoxWithInfo
                    isBlue={true}
                    name={"Lucy Keyword"}
                    email={"lucykeyword@email.com"}    
                    dest="Copenhagen"
                    text="SEO Specialist"
                    textIcon={<Search className='my-auto'/>}
                Department={"Marketing"}
                 />
                <BoxWithInfo
                isGreen={true}
                    name={"Millie Ligma"}
                    email={"millieligma@email.com"}    
                    dest="Los Angeles"
                    text="this is Junior Designer"
                    textIcon={<Palette className='my-auto'/>}
                Department={"Design"}
                 />
                <BoxWithInfo
                    isPurple={true}
                    name={"Victor Kowalski"}
                    email={"victorkowalski@email.com"}    
                    dest="Athens"
                    text="Engineering - Back end"
                    textIcon={<svg className='my-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" aria-hidden="true">
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="currentColor"></path>
        </svg>}
                Department={"IT"}
                 />
                <BoxWithInfo
                    isPurple={true}
                    name={"Alojz Novak"}
                    email={"Alojznovak@email.com"}    
                    dest="Prague"
                    text="Engineering - Front end"
                    textIcon={<svg className='my-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" aria-hidden="true">
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="currentColor"></path>
        </svg>}
                Department={"IT"}
                 />
              
                <BoxWithInfo
                 className='col-start-3'
                    name={"Mike Star"}
                    email={"mikestar@email.com"}    
                    dest="Dublin"
                    text="Scrum Master"
                    textIcon={<svg className=' w-6  h-6 my-auto' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 406.6"><path d="M334.1 1.64a202.504 202.504 0 0 1 135.16 77.02c68.84 88.6 52.82 216.19-35.78 285.03-.08.05-.14.11-.22.18-88.57 68.82-216.15 52.81-284.97-35.76-.04-.06-.09-.12-.14-.17A204.822 204.822 0 0 1 125.31 291a168.69 168.69 0 0 0 37.79-5.42 172.61 172.61 0 0 0 13.55 20.29c56.7 72.81 161.67 85.86 234.46 29.15 72.8-56.69 85.84-161.66 29.15-234.46-40.28-51.71-107.08-75.09-170.82-59.79a171.08 171.08 0 0 0-21.88-31.29c2.46-.8 4.95-1.51 7.46-2.21 25.77-7.13 52.69-9.03 79.19-5.63h-.11zM0 129.16v-15.4C3.97 50.8 56.26.95 120.21.92h.05c66.58-.01 120.55 53.93 120.59 120.51.03 66.58-53.93 120.56-120.51 120.59C56.33 242.04 3.97 192.17 0 129.16zm158.04-71.34c-1.65-1.11-3.51-1.62-5.4-1.24-1.87.37-3.51 1.37-4.63 2.99l-6.4 9.04c-4.34-1.93-9.86-3.2-14.54-3.89l-2-11.79c-.4-1.99-1.4-3.49-2.91-4.64-1.63-1.12-3.38-1.5-5.38-1.12l-14.8 2.62c-1.9.39-3.39 1.27-4.65 2.9-1.11 1.62-1.62 3.38-1.25 5.4l1.89 10.78c-4.56 1.9-9.08 4.68-12.92 7.78l-10.04-6.92c-1.63-1.12-3.38-1.61-5.25-1.24-1.91.38-3.54 1.39-4.65 3.01l-8.53 12.16c-1.14 1.64-1.63 3.51-1.25 5.4.36 2 1.36 3.51 3.01 4.62l9.02 6.42c-1.91 4.28-3.21 9.89-3.89 14.55l-11.78 2c-2.02.38-3.51 1.38-4.67 2.89-1.11 1.64-1.49 3.38-1.11 5.38l2.62 14.8c.4 1.89 1.27 3.4 2.91 4.65 1.63 1.13 3.39 1.64 5.39 1.26l10.78-1.89c2 4.73 4.72 8.97 7.78 13.06l-6.92 9.91c-1.11 1.62-1.62 3.38-1.24 5.25.38 1.88 1.38 3.51 3.02 4.64l12.29 8.65a6.88 6.88 0 0 0 5.38 1.14c1.89-.38 3.52-1.25 4.78-2.89l6.38-9.16c4.41 1.94 9.81 3.18 14.57 3.91l2 11.78c.37 2 1.37 3.51 2.88 4.63 1.65 1.13 3.39 1.51 5.39 1.13l14.8-2.62c1.89-.39 3.38-1.27 4.65-2.9 1.13-1.62 1.64-3.37 1.24-5.37l-1.86-10.79c4.77-2.02 8.91-4.72 13.04-7.8l9.92 6.92c1.62 1.11 3.36 1.61 5.36 1.24 2.02-.36 3.51-1.38 4.66-3.01l8.65-12.29c1.12-1.62 1.51-3.53 1.12-5.38-.36-1.89-1.25-3.51-2.87-4.8l-9.16-6.25c1.91-4.31 3.21-9.88 3.87-14.55l11.8-2c2-.39 3.51-1.39 4.67-2.9 1.11-1.62 1.49-3.37 1.11-5.37l-2.64-14.81c-.38-1.87-1.27-3.38-2.89-4.63-1.63-1.15-3.39-1.66-5.39-1.26l-10.78 1.87c-2.08-4.69-4.56-8.92-7.78-12.92l6.9-10.03c1.13-1.64 1.64-3.4 1.24-5.26-.36-1.88-1.36-3.5-3-4.66l-12.17-8.51-.37.11zm-37.61 32.04c17.46 0 31.63 14.16 31.63 31.62s-14.17 31.62-31.63 31.62-31.62-14.16-31.62-31.62 14.16-31.62 31.62-31.62zm177.19 14.65c1.24-9.88 10.24-16.88 20.09-15.64h.04c9.82 1.32 16.73 10.32 15.46 20.13l-11.7 94.09 65.06 50.55c7.85 6.1 9.3 17.4 3.2 25.28a18.011 18.011 0 0 1-11.95 6.82c-4.73.62-9.51-.68-13.26-3.62l-72.82-56.61a17.818 17.818 0 0 1-5.79-7.08 18.336 18.336 0 0 1-1.46-9.67l13.13-104.2v-.05z"/></svg>}
                Department={"Management"}
                isPurple={true}
                 />
                <BoxWithInfo
                className='col-start-1'
                    name={"Jay Raver"}
                    email={"jayraver@email.com"}    
                    dest="Berlin"   
                    isPurple={1}
                    text="Accountant"
                Department={"Finance"}
                textIcon={<WalletFill className='my-auto'/>}
                 />
               </div>
            </div>
            </div>
            </div>
)
}
export default ApplicantTracker