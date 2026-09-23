import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("login")
  return (
    <div className="flex w-full h-175">
      <div className="bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-lg:hidden flex flex-col gap-8 items-center justify-center w-full">
        <h1 className="text-2xl  text-white">Drive more, Spend less, Experience the journey</h1>      
        <img src={assets.banner_car_image} alt="" className="w-90" />
        
        
      </div>

      <div className="w-full flex flex-col items-center justify-center">
      <form
        className=" w-80 md:w-96 flex flex-col items-center justify-center"
        action=""
      >
         <h2 className="text-3xl text-gray-900 font-semibold">{state=== "login" ? `Sign in` : "Sing up"}</h2>
        <p className="text-sm text-gray-500/90 mt-2">{state==="login" ? "Sign in to continue": "Create an account"}</p>

        <div className="mt-4 flex gap-2 w-full h-12 items-center rounded-full border py-2 px-8 border-borderColor ">
          <img src={assets.gmail_logo} className="size-6" alt="" />
          <input type="email" placeholder="Enter your email" className="placeholder-gray-500/80 bg-transparent focus:outline-none" />
        </div>

        {state === "sign up" &&( <div className="mt-4 flex gap-2 w-full h-12 items-center rounded-full border py-2 px-8 border-borderColor ">
          <img src={assets.users_icon} className="size-6" alt="" />
          <input type="text" placeholder="Enter your username" className="placeholder-gray-500/80 bg-transparent focus:outline-none"/>
        </div>)}


        <div className="mt-4 flex gap-2 w-full h-12 items-center rounded-full border py-2 px-8 border-borderColor ">
          <img src={assets.users_icon} className="size-6" alt="" />
          <input type="email" placeholder="Enter your password" className="placeholder-gray-500/80 bg-transparent focus:outline-none"/>
        </div>

       
        {state==="login" && (<div className="flex w-full mt-8 items-center justify-between text-gray-500/80">
          <div className="flex gap-2">
          <input type="checkbox" id="checkbox"  />
          <label htmlFor="checkbox" className=" text-sm">Remember me</label>
          </div>
          <a href="#" className="text-sm underline">Forgot password?</a>
        </div>)}

        <button className="mt-8 w-full bg-primary h-11 rounded-full text-white cursor-pointer hover:bg-primary-dull">
          {state==="login" ? "Login" : "Sign Up"}
        </button>
        {state=== "login" ? (<p className="mt-4 text-sm text-gray-500/90"> Need an account? 
        <span onClick={() => setState("sign up")}  
        className="text-primary underline cursor-pointer text-sm">
          Sign up</span>
        </p>) : (<p className="mt-4 text-sm text-gray-500/90"> Aready have an account? 
        <span onClick={() => setState("login")}  
        className="text-primary underline cursor-pointer text-sm">
          Sign in</span>
        </p>)}
      </form>


    </div>
    </div>
  );
};

export default Login;
