import React from "react"
import NavBar from "./NavBar.jsx"
import Header from "./Header.jsx"
import ListComponent from '../peopleUtils/ListComponent.jsx'
import Introduce from "../AppTrackerUtils/Introduce.jsx"
const EmployeePage:React.FC = ()=>{ 
  return (
    <div className="flex p-4 ">
 

      <NavBar/>

      <div
      className="w-5/6"
      >
        <Header/>  
        <div className="p-5">

        <Introduce head="People" text="30 employees"/>
      <ul>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
        <li><ListComponent
          url="https://xsgames.co/randomusers/assets/avatars/male/21.jpg"
          fullName="Nick Astrov"
          role="developer"
          dest="Paris"
          time="14:45"
          Department="HR"
          isBlue={true}
          /></li>
      </ul>
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}
export default EmployeePage
