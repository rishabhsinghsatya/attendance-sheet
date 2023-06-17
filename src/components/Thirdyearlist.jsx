import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import students3 from "../students3.json";
import { useState } from "react";

const Thirdyearlist = (props) => {
  const [present, setPresent] = useState([]);
  return (
    <div className="full-second-page">
      {/* <Header today={props.today} /> */}
      <div className="date-heading">
        <h3 className="date">Date: {props.today}</h3>
        <p className="header-heading">Attendance 3rd year B.tech (CSE)</p>
      </div>
      <div className="list-heading">
        <p>Roll.No</p>
        <p>Name</p>

        <p className="presentheading">Present</p>
        <p className="absentheading">Absent</p>
      </div>
      <div className="list-container">
        {students3.map((student) => (
          <div className="name-roll">
            <p>{student.roll_no}</p>
            <h3 className="studentname">{student.name}</h3>
            <button
              className="present"
              onClick={() => setPresent([...present, student.name])}
            >
              present
            </button>
            <button className="absent">Absent</button>
          </div>
        ))}
      </div>
      <Footer setPage={props.setPage} presentStudents={present} />
    </div>
  );
};

export default Thirdyearlist;
