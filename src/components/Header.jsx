import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { IoMdSearch } from "react-icons/io";
import { FaBookmark ,FaRegBookmark  } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { BiSolidSearchAlt2 } from "react-icons/bi";

const Header = () => {
  const [input, setInput] = useState("");
  const [search,setSearch] = useState(true)
   const [heeadbg,setHeadbg] = useState(false)
  console.log(input);

  function handelSearch(){
    setSearch(!search);
  }


  return (
    <div className='w-full flex sticky top-0 z-50 h-17 justify-around items-center rounded-b-lg' >
      <Link to="/"><div className="logo pl-4 bg-white pr-4 rounded-full border-2 ">
        {" "}
        <img className="w-[40px]" src="/logo.png" />
        Nimory
      </div></Link>

{  search ?    <nav className="h-12 flex  border-2 pl-4 pr-4 rounded-full items-center font-bold bg-white">
        <Link to="/" className="hover-effect">HOME</Link>
        <Link to="/about" className="hover-effect">ABOUT</Link>
        <Link to="/manga" className="hover-effect">MANGA</Link>
        <Link to="/movies" className="hover-effect">MOVIES</Link>
      </nav> : <SearchBar />}

      <div className="flex justify-center items-center gap-5">
        <button className="searchbut" onClick={handelSearch} >{search ? <IoMdSearch className="h-8 w-8 hover:scale-120 " />:<BiSolidSearchAlt2 className="h-8 w-8 hover:scale-120"/>}</button>
        <Link to="/bookmark"><FaRegBookmark className="h-6 w-6 hover:scale-120"/></Link>
      </div>
    </div>
  );
};

export default Header;
