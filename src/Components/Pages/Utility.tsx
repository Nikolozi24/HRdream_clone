import React from "react"
import {CheckCircleFill} from "react-bootstrap-icons"
interface UtilityProps{
  text:string;
}
const Utility:React.FC<UtilityProps> = (props) => {
  const {text} = props;
  return ( <p className='flex mb-2 align-middle'><CheckCircleFill  className='my-auto' color='#036bfc'/>  <span className='ml-2 align-middle'>{text}</span></p>
  )
}

export default Utility