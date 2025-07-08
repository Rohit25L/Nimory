import React from "react";
import Backgroung from "./Backgroung";
const Login = () => {
  return (
    <div className="">
      <div className="w-full flex absolute top-0 z-50 h-20 items-center justify-between">
        <div className="logo pl-4 pr-4 w-60 text-4xl text-white">
          <img className="w-[65px]" src="/logo.png" />
          <p className="text-4xl text-white flex"> Nim <p className="text-black">ory</p></p>
        </div>
        <div className="flex justify-center items-center gap-5 mr-20">
          <button className="bg-red-600 rounded-md w-20 h-8" >
            <p className="text-1xl text-white font-extrabold">Login</p>
          </button>
        </div>
      </div>

      <Backgroung />
    </div>
  );
};

export default Login;
