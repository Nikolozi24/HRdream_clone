import { LinearScale } from 'chart.js'
import React from 'react'
import CombinedChart from '../Grapic/WeekChart'

import UpTasks from '../upcomingTasks/UpTasks'
import LittleComp from '../DashboardUtils/littleComp'
import EmployDepChart from '../DashboardUtils/EmployDepChart'
import TotalExoenes from '../DashboardUtils/TotalExoenes'
import QualityWorkflowChart from '../DashboardUtils/QualityWorkflowChart'
import NavBar from './NavBar'
import Header from './Header'
import Annoucement from '../DashboardUtils/Annoucement'
import PinnedContent from '../DashboardUtils/PinnedContent'
import RecentActivity from '../DashboardUtils/RecentActivity'

const Dashboard = () => {
  return (
    <div className=' flex '>
    
        <NavBar/>
            <div className='w-5/6  '>
               <Header/>
                <div className='lg:flex lg:flex-row md:flex-col'>
                    <div className='lg:w-3/5 border-r-2 flex flex-col gap-3 p-6 bg-slate-50'>
                    <h1 className='text-[30px] font-bold'>Dashboard</h1>
                    <div className='w-full'>
                        <ul className='flex justify-around gap-5 w-full'>
                            <li className='bg-white shadow-md rounded-md w-full p-4'>
                               <LittleComp title={"Absence rate"} val={"9%"}/>

                            </li>
                            <li className= 'bg-white w-full shadow-md rounded-md p-4'>
                            <LittleComp title={"Absence const"} val={"$1,432"}/></li>
                            <li className='bg-white w-full shadow-md rounded-md p-4'>
                            <LittleComp  title={"Unplanned absence"} val={"12 days"}/></li>
                        </ul>
                    </div>
                    <div className='bg-white shadow-lg rounded-md'>

                             <EmployDepChart/>
                    </div>
                             <TotalExoenes/>
                    <div className='bg-white shadow-lg rounded-md'>
                  <QualityWorkflowChart/>
                    </div>
                    </div>

                   <div className='lg:w-2/5 flex flex-col p-4 gap-4 bg-slate-50'>
                  <Annoucement/>
                  <div className='flex flex-col gap-4'>
                    <PinnedContent text={"Outing schedule for every department "}/>
                    <PinnedContent text={"Meeting Design Department"}/>
                    <PinnedContent text={"Outing schedule for every department"}/>
                    <PinnedContent text={"Meeting HR Department"}/>
                    <a href='#' className='text-center mt-2 text-blue-400'>See all annoucements</a>
                  </div>
                  <RecentActivity/>
                   </div>
                 
                </div>
            </div>
    </div>
  )
}

export default Dashboard