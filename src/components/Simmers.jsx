import React from "react";
import "../css/Simmers.css";
import SimmerBody from "./ChildComponents/SimmerBody";

const Simmer = () => {
  return (
    <>
      <div className="main">
        <div className="shimmer-container">
          <div className="shimmer-car"></div>
        </div>
      </div>
      <div className="sim-con w-7/8 ml-20 p-20">
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
        <SimmerBody />
      </div>
    </>
  );
};

export default Simmer;
