import React from "react";
import Yearcolumn from "./Yearcolumn";
import DSMNRU from "../icons/DSMNRU.png";
import Logo from "../icons/logo.png";

const Firstpage = (props) => {
  return (
    <div>
      <div className="main-container">
        <img src={DSMNRU} alt="college name icon" className="collagename" />
        <div className="uplogo-course">
          <div className="collage-state-container">
            <img src={Logo} alt="state logo" className="uplogo" />
            <h1 className="state-name">Uttar Pradesh</h1>
          </div>
          <div className="attendance-session">
            <div className="attendance-course-container">
              <h1 className="attendance-heading">ATTENDANCE</h1>
              <p className="course-heading">B.tech (cse)</p>
            </div>
          </div>
          <p className="session">SESSION: 2021-22</p>
        </div>
        <Yearcolumn setPage={props.setPage} />
      </div>
    </div>
  );
};

export default Firstpage;
