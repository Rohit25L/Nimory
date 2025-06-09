import React from "react";
import SimmerBody from "./SimmerBody";

const TopanimeSimmers = () => {
  return (
    <div className="w-full h-[930px] overflow-hidden">
      <div className="w-full flex flex-wrap justify-center pt-20 gap-10 overflow-hidden">
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
      </div>
    </div>
  );
};

export default TopanimeSimmers;
