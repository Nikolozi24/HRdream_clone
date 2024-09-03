import Login from './Components/Pages/Login'
import VerifyEmail from './Components/Pages/VerifyEmail'
import Profile from './Components/Pages/Profile'
import Dashboard from  './Components/Pages/Dashboard'
import SingUp from './Components/Pages/SingUp'
import {Route , Routes} from 'react-router-dom'
import ApplicantTracker from './Components/Pages/ApplicantTracker'
import EmployeePage from './Components/Pages/EmployePage.tsx'

function App() {
  return (
    <>
    <Routes>
          <Route path='/app-tracker' element ={<ApplicantTracker/>}/>
          <Route path='/Login' element ={<Login/>}/>
          <Route path='/' element ={<Dashboard/>}/>
          <Route path='/singUp' element ={<SingUp/>}/>
          <Route path='/profile' element ={<Profile/>}/>
          <Route path='/verify' element ={<VerifyEmail/>}/>
          <Route path='/people' element ={<EmployeePage/>} />
    </Routes>
</>
  )
}
{/* <Dashboard/> */}
{/* <Login/> */}
{/* <VerifyEmail/> */}
{/* <Profile/> */}

export default App
