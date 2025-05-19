import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <header className="header w-full flex justify-center content-center sticky top-0 z-50">
      <Link to="/" className="pl-22"><div className="logo pl-4 bg-white pr-4 rounded-full border-2">
        {" "}
        <img className="w-[40px]" src="/logo.png" />
        Nimory
      </div></Link>

      <nav className="h-12 flex  border-2 pl-4 pr-4 rounded-full items-center font-bold bg-white">
        <Link to="/" className="hover-effect">HOME</Link>
        <Link to="/about" className="hover-effect">ABOUT</Link>
        <Link to="/manga" className="hover-effect">MANGA</Link>
        <Link to="/movies" className="hover-effect">MOVIES</Link>
      </nav>

      <div className="pr-36">
        <button className="searchbut"><IoMdSearch className="h-8 w-8" /></button>
      </div>
    </header>
  );
};

export default Header;
