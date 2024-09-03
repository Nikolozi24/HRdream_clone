import { Button } from 'antd';
import React, { useEffect , useState} from 'react'
import { BalloonFill } from 'react-bootstrap-icons';

const BoxWithInfo = ({name , email, dest, text , textIcon, Department="", isGreen=false, isBlue=false, isPurple=false, className=""}) => {
  const [color,setColor]  = useState('');
  
  useEffect(()=>{
    const col = ReturnColor(Department);
    setColor(col);
  })
  
  const Colors  = {
        PeopleAndCulture:'green',
        Marketing:'blue',
        IT:'purple',
        Finance:"sky",
        Management:"purple",
        Design:'green'
    }

  const ReturnColor =  (dep)=>{
      if(dep==="Marketing" || dep==="Finance"){
        return Colors.Finance;
      }
     else if(dep==="PeopleAndCulture" || dep==="Design"){
        return Colors.Design;
     }
     else{
      return Colors.IT;
     }
  }
  return (
    <div className={`${className}`}>

    <div className={`flex flex-col gap-3 p-4 bg-white rounded-md shadow-lg `}>
    <div>
        <h1 className='text-[20px] font-bold'>{name}</h1>
        <p className='underline text-slate-500'>{email}</p>
    </div>
      <span className='p-2 bg-red-200 w-1/2 rounded-lg text-red-700 flex gap-2'><BalloonFill className='my-auto' color='red'/>{dest}</span>
      <p className='flex  rounded-lg bg-yellow-300 text-yellow-800 gap-2 p-2 w-3/4 '>{textIcon} {text}</p>
        {
          isBlue && <span className='  px-4 bg-blue-200 rounded-lg py-2  w-3/4 text-blue-800'>{Department}</span>
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

export default BoxWithInfo