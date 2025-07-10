import React, { useState } from "react";
import Backgroung from "./Backgroung";
import { Link } from "react-router";

const Login = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="">
      <div className="w-full fixed flex top-0 z-50 h-20 items-center justify-between">
        <Link to="/">
          <div className="logo pl-4 pr-4 w-60 text-4xl text-white">
            <img className="w-[65px]" src="/logo.png" />
            <p className="text-4xl text-white flex"> Nimory</p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-5 mr-20">
          <button
            className="bg-red-600 rounded-md w-20 h-8"
            onClick={() => {
              setLogin(!login);
            }}
          >
            <p className="text-1xl text-white font-bold">
              {login ? "Sign in" : "Log in"}
            </p>
          </button>
        </div>
      </div>
      <div className= "h-20 absolute top-1/3 left-60 z-5 flex flex-col items-center">
        <h1 className=" text-white font-extrabold text-6xl">
         Watch your favorite anime,</h1><h1 className="text-white font-extrabold text-6xl">movies and Read manga here</h1>

      </div>
      <Backgroung />
    </div>
  );
};

export default Login;
