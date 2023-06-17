import React from "react";
import Arrowicon from "../icons/Arrow.svg";

const Yearcolumn = (props) => {
  return (
    <div className="yearwise-container">
      <div className="year-container">
        <h1 className="heading">B.tech (cse) 1st Year</h1>
        <img
          className="arrow"
          src={Arrowicon}
          alt="arrow icon here...."
          onClick={() => props.setPage(6)}
        />
      </div>
      <div className="year-container">
        <h1 className="heading">B.tech (cse) 2nd Year</h1>
        <img
          className="arrow"
          src={Arrowicon}
          alt="arrow icon here...."
          onClick={() => props.setPage(4)}
        />
      </div>
      <div className="year-container">
        <h1 className="heading">B.tech (cse) 3rd Year</h1>
        <img
          className="arrow"
          src={Arrowicon}
          alt="arrow icon here...."
          onClick={() => props.setPage(2)}
        />
      </div>
      <div className="year-container">
        <h1 className="heading">B.tech (cse) 4th Year</h1>
        <img
          className="arrow"
          src={Arrowicon}
          alt="arrow icon here...."
          onClick={() => props.setPage(8)}
        />
      </div>
    </div>
  );
};

export default Yearcolumn;
