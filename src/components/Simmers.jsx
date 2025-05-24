import React from "react";
import "../css/Simmers.css";

const Simmerbody = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer"></div>
      <div className="flex flex-col gap-10 pt-10 w-2/4">
        <div className="shimmer-line shimmer"></div>
        <div className="shimmer-line short shimmer"></div>
        <div className="shimmer-info shimmer"></div>
      </div>
    </div>
  );
};

const Simmer = () => {
  return (
    <>
      <div className="main">
        <div className="shimmer-container">
          <div className="shimmer-car"></div>
        </div>
      </div>
      <div className="sim-con w-7/8 ml-20 p-20">
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
      </div>
    </>
  );
};

export default Simmer;
