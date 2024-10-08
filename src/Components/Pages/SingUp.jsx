import React from 'react'
import Utility from "./Utility.tsx";
import { Google, Apple, KeyFill } from "react-bootstrap-icons";
import {useNavigate} from 'react-router-dom'
const SingUp = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12">
      <div className="bg-slate-800 font-bold roboto-regular col-span-4 h-[100vh]">
        <h1 className="text-white flex gap-2 mt-10  ml-20">
          <KeyFill className="my-auto" color="#0390fc" /> HRdream
        </h1>
        <div className="my-64">
          <h1 className="text-white m-40 ml-20 mb-4 text-[20px]">
            Plan includes
          </h1>
          <ul className=" flex flex-col font-thin ">
            <li className="text-white text-[14px] text-left ml-20 ">
              <Utility text="Unlimited employee uploads" />
            </li>
            <li className="text-white text-[14px] text-left ml-20 ">
              <Utility text="Free forever" />
            </li>
            <li className="text-white text-[14px] text-left ml-20 ">
              <Utility text="Full author permissions" />
            </li>
            <li className="text-white text-[14px]  text-left ml-20 ">
              <Utility text="Pro tips" />
            </li>
          </ul>
        </div>
      </div>
      <div className=" col-span-8 p-5">
        <h1 className="text-right">
         Already a member? ? <strong > <a href="/Login">Log in</a> .</strong>
        </h1>
        <div className=" w-1/2  h-1/2 m-auto mt-40">
          <h1 className="text-[30px] font-bold">Sing Up</h1>
          <br />
          <span className="mt-10">Sing up with an already existing account</span>
          <div className="flex gap-4">
            <button className="flex  border-2 px-16 py-2 my-2 rounded-md ">
              <Google className="my-auto mx-2" /> Google
            </button>
            <button className="flex  border-2 px-16 py-2 my-2 rounded-md ">
              <Apple className="my-auto mx-2" />
              Apple
            </button>
          </div>
          <br />
          <p>Or sing up with your email address</p>
          <div className="flex flex-col gap-4">
            <input
              className="border-2 w-5/6 h-10 py-6 pl-4 rounded-md mt-2"
              placeholder="Email address"
            />
            <input
               type='password'
              className="border-2 w-5/6 h-10 py-6 pl-4 rounded-md"
              placeholder="password"
            />
            <input
               type='password'
              className="border-2 w-5/6 h-10 py-6 pl-4 rounded-md"
              placeholder=" Repeat password"
            />
          </div>
          <br />
          <button onClick={()=>{navigate('/verify')}} className="btn-primary w-5/6 py-10 h-12 font-bold">
                Create an account
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}

export default SingUp