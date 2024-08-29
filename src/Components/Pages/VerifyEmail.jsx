import React from 'react'
import Utility from "./Utility.tsx";
import { Google, Apple, KeyFill } from "react-bootstrap-icons";


const VerifyEmail = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-slate-800 font-bold roboto-regular col-span-4">
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
         Already a member? ? <strong > <a href="/sing_up">Log in</a> .</strong>
        </h1>
        <div className=" w-1/2  h-1/2 m-auto mt-40 flex flex-col gap-4 w-1/2 h-1/2">
          <h1 className="text-[30px] font-bold">Verify  your email </h1>
       
          <p>We have sent a verification code to your email inbox</p>
          <div className="flex  gap-4">
            <input
              className="border-2 bg-slate-100 btn-outline-primary w-20 h-20 m-auto flex justify-center align-middle text-center font-sans text-[20px] rounded-md mt-2"
            />
            <input
              className="border-2 bg-slate-100 btn-outline-primary w-20 h-20 m-auto flex justify-center align-middle text-center font-sans text-[20px] rounded-md"
            />
            <input
              className="border-2 bg-slate-100 btn-outline-primary w-20 h-20 m-auto flex justify-center align-middle text-center font-sans text-[20px] rounded-md"     
            />
            <input
              className="border-2 bg-slate-100 btn-outline-primary w-20 h-20 m-auto flex justify-center align-middle text-center font-sans text-[20px] rounded-md "     
            />
          </div>
          <br />
          <button className="btn-primary w-5/6 py-10 h-12 font-bold">
               Verify
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail