import React from "react";
import "../css/Simmers.css"

const Simmerbody = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer"></div>
      <div className="shimmer-line shimmer"></div>
      <div className="shimmer-line short shimmer"></div>
      <div className="shimmer-info shimmer"></div>
    </div>
  );
};

const Simmer = () => {
  return (
    <>
      <div className="main">
        <div className="shimmer-container">
          <div className="shimmer-car">
          </div>
        </div>
      </div>
      <div className="sim-con">
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />
        <Simmerbody />

      </div>
    </>
  );
};

export default Simmer;